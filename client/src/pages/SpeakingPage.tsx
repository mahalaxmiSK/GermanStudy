import { useState, useEffect, useMemo, useCallback, useRef, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { speakingPrompts } from '../data/speaking';
import type { SpeakingPrompt } from '../data/speaking';
import BackButton from '../components/BackButton';
import ThemeFilter from '../components/ThemeFilter';
import ProgressBar from '../components/ProgressBar';

const STORAGE_KEY = 'germanstudy-speaking-progress';
const ACCENT = '#51cf66';

type RecordingState = 'idle' | 'recording' | 'recorded';

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function saveProgress(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

const TYPE_LABELS: Record<SpeakingPrompt['type'], string> = {
  monologue: '🎙️ Monologue',
  roleplay: '🎭 Roleplay',
  'picture-description': '🖼️ Picture Description',
  alltagssituation: '🗨️ Alltagssituation',
};

const TYPE_COLORS: Record<SpeakingPrompt['type'], string> = {
  monologue: '#7c83ff',
  roleplay: '#ffc107',
  'picture-description': '#00bcd4',
  alltagssituation: '#e040fb',
};

const TEIL_LABELS: Record<number, string> = {
  1: 'Teil 1',
  2: 'Teil 2',
  3: 'Teil 3',
};

const TEIL_COLOR = '#ff7043';

/* ── Inline styles ── */

const s = {
  page: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '1.5rem 1rem 3rem',
    fontFamily: 'var(--font-sans)',
    color: 'var(--text-primary)',
  } satisfies CSSProperties,

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  } satisfies CSSProperties,

  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text-heading)',
    margin: 0,
    flex: 1,
  } satisfies CSSProperties,

  progressBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4em',
    padding: '0.35em 0.85em',
    fontSize: '0.8rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    background: `${ACCENT}22`,
    color: ACCENT,
    whiteSpace: 'nowrap' as const,
  } satisfies CSSProperties,

  section: {
    marginBottom: '1rem',
  } satisfies CSSProperties,

  statsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.6rem 1rem',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.875rem',
    marginBottom: '1.25rem',
    border: '1px solid var(--border-color)',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  } satisfies CSSProperties,

  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    padding: '1.5rem',
    marginBottom: '1.25rem',
    boxShadow: 'var(--shadow-card)',
  } satisfies CSSProperties,

  typeBadge: (type: SpeakingPrompt['type']): CSSProperties => ({
    display: 'inline-block',
    padding: '0.2em 0.7em',
    fontSize: '0.75rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    background: `${TYPE_COLORS[type]}22`,
    color: TYPE_COLORS[type],
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: '0.75rem',
  }),

  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'var(--text-heading)',
    margin: '0 0 0.5rem',
  } satisfies CSSProperties,

  scenario: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
    marginBottom: '1rem',
  } satisfies CSSProperties,

  questionList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1rem',
  } satisfies CSSProperties,

  questionItem: {
    padding: '0.35rem 0',
    paddingLeft: '1.25rem',
    position: 'relative' as const,
    fontSize: '0.88rem',
    color: 'var(--text-primary)',
    lineHeight: 1.5,
  } satisfies CSSProperties,

  timeLimitRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginTop: '0.5rem',
  } satisfies CSSProperties,

  recordSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    marginBottom: '1.25rem',
  } satisfies CSSProperties,

  timerDisplay: {
    fontFamily: 'var(--font-mono)',
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--text-heading)',
    letterSpacing: '0.05em',
  } satisfies CSSProperties,

  timerWarning: {
    fontFamily: 'var(--font-mono)',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ff6b6b',
    letterSpacing: '0.05em',
  } satisfies CSSProperties,

  recordBtn: (active: boolean): CSSProperties => ({
    width: 72,
    height: 72,
    borderRadius: '50%',
    border: 'none',
    fontSize: '1.5rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: active ? 'var(--color-error)' : ACCENT,
    color: '#fff',
    transition: 'all var(--transition-fast)',
    boxShadow: active ? '0 0 0 0 rgba(255, 107, 107, 0.5)' : `0 4px 16px ${ACCENT}44`,
  }),

  controlRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  } satisfies CSSProperties,

  hintsPanel: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    marginBottom: '1.25rem',
    overflow: 'hidden',
  } satisfies CSSProperties,

  hintsToggle: {
    width: '100%',
    padding: '0.85rem 1.25rem',
    background: 'transparent',
    border: 'none',
    color: ACCENT,
    fontSize: '0.9rem',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    cursor: 'pointer',
    textAlign: 'left' as const,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } satisfies CSSProperties,

  hintsContent: {
    padding: '0 1.25rem 1.25rem',
  } satisfies CSSProperties,

  hintsSubheading: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--text-heading)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    margin: '0.75rem 0 0.4rem',
  } satisfies CSSProperties,

  phraseChip: {
    display: 'inline-block',
    padding: '0.25em 0.65em',
    margin: '0.2rem',
    fontSize: '0.8rem',
    background: `${ACCENT}15`,
    color: ACCENT,
    borderRadius: 'var(--radius-sm)',
    border: `1px solid ${ACCENT}33`,
  } satisfies CSSProperties,

  tipItem: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    lineHeight: 1.5,
    padding: '0.2rem 0',
  } satisfies CSSProperties,

  navRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '0.75rem',
  } satisfies CSSProperties,

  empty: {
    textAlign: 'center' as const,
    padding: '3rem 1rem',
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
  } satisfies CSSProperties,

  micError: {
    textAlign: 'center' as const,
    padding: '1rem',
    background: 'var(--color-error-bg)',
    color: 'var(--color-error)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9rem',
    lineHeight: 1.5,
  } satisfies CSSProperties,
} as const;

function btn(bg: string, fg = '#fff'): CSSProperties {
  return {
    padding: '0.55rem 1.25rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    background: bg,
    color: fg,
    transition: 'opacity var(--transition-fast)',
  };
}

export default function SpeakingPage() {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedTeil, setSelectedTeil] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<string>>(loadProgress);

  // Recording state
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [elapsed, setElapsed] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [hintsOpen, setHintsOpen] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Filter prompts
  const prompts = useMemo(() => {
    let filtered = speakingPrompts;
    if (selectedTheme) filtered = filtered.filter((p) => p.theme === selectedTheme);
    if (selectedTeil !== null) filtered = filtered.filter((p) => p.teil === selectedTeil);
    return filtered;
  }, [selectedTheme, selectedTeil]);

  // Clamp index when prompts change
  useEffect(() => {
    setCurrentIndex((prev) => (prompts.length === 0 ? 0 : Math.min(prev, prompts.length - 1)));
  }, [prompts.length]);

  // Persist progress
  useEffect(() => {
    saveProgress(completed);
  }, [completed]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prompt = prompts[currentIndex] as SpeakingPrompt | undefined;

  const completedCount = useMemo(
    () => prompts.filter((p) => completed.has(p.id)).length,
    [prompts, completed],
  );

  const progressPct = prompts.length > 0 ? Math.round((completedCount / prompts.length) * 100) : 0;

  // Stop any existing recording & timer
  const stopRecordingCleanup = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    mediaRecorderRef.current = null;
  }, []);

  const startRecording = useCallback(async () => {
    // Clean up any previous audio
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setMicError(null);
    chunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setRecordingState('recorded');
      };

      mediaRecorder.start();
      setRecordingState('recording');
      setElapsed(0);

      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      const msg =
        err instanceof DOMException && err.name === 'NotAllowedError'
          ? 'Microphone access was denied. Please allow microphone access in your browser settings to use the recording feature.'
          : err instanceof DOMException && err.name === 'NotFoundError'
            ? 'No microphone found. Please connect a microphone and try again.'
            : 'Could not access the microphone. Please check your browser settings and try again.';
      setMicError(msg);
      setRecordingState('idle');
    }
  }, [audioUrl]);

  const stopRecording = useCallback(() => {
    stopRecordingCleanup();
  }, [stopRecordingCleanup]);

  const recordAgain = useCallback(() => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setRecordingState('idle');
    setElapsed(0);
  }, [audioUrl]);

  // Reset recording state when switching prompts
  const goTo = useCallback(
    (idx: number) => {
      if (idx >= 0 && idx < prompts.length) {
        stopRecordingCleanup();
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
        setRecordingState('idle');
        setElapsed(0);
        setMicError(null);
        setCurrentIndex(idx);
        setHintsOpen(false);
      }
    },
    [prompts.length, stopRecordingCleanup, audioUrl],
  );

  const toggleComplete = useCallback(() => {
    if (!prompt) return;
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(prompt.id)) {
        next.delete(prompt.id);
      } else {
        next.add(prompt.id);
      }
      return next;
    });
  }, [prompt]);

  const isNearLimit = prompt ? elapsed >= prompt.timeLimit * 0.8 : false;
  const isOverLimit = prompt ? elapsed >= prompt.timeLimit : false;
  const isCompleted = prompt ? completed.has(prompt.id) : false;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <BackButton />
        <h1 style={s.title}>🗣️ Speaking Practice</h1>
        <span style={s.progressBadge}>
          ✓ {completedCount}/{prompts.length}
        </span>
      </div>

      {/* Theme filter */}
      <div style={s.section}>
        <ThemeFilter selectedTheme={selectedTheme} onSelectTheme={setSelectedTheme} />
      </div>

      {/* Teil filter */}
      <div style={{ ...s.section, display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {([null, 1, 2, 3] as (number | null)[]).map((teil) => {
          const isActive = selectedTeil === teil;
          return (
            <button
              key={teil ?? 'all'}
              onClick={() => setSelectedTeil(teil)}
              style={{
                padding: '0.3em 0.75em',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                borderRadius: 'var(--radius-pill)',
                border: `1.5px solid ${isActive ? TEIL_COLOR : 'var(--border-color)'}`,
                background: isActive ? `${TEIL_COLOR}22` : 'transparent',
                color: isActive ? TEIL_COLOR : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {teil === null ? 'All Teile' : TEIL_LABELS[teil]}
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div style={s.section}>
        <ProgressBar value={progressPct} color={ACCENT} height={6} showLabel />
      </div>

      {/* Stats bar */}
      <div style={s.statsBar}>
        <span>
          Prompt <strong>{prompts.length === 0 ? 0 : currentIndex + 1}</strong> / {prompts.length}
        </span>
        <span style={{ color: ACCENT }}>✓ Practiced: {completedCount}</span>
        <span style={{ color: 'var(--text-muted)' }}>
          Remaining: {prompts.length - completedCount}
        </span>
      </div>

      {prompts.length === 0 ? (
        <div style={s.empty}>No prompts match the current filter.</div>
      ) : prompt ? (
        <>
          {/* Prompt card */}
          <div style={s.card}>
            <span style={s.typeBadge(prompt.type)}>{TYPE_LABELS[prompt.type]}</span>
            {prompt.teil !== undefined && (
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.2em 0.7em',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-pill)',
                  background: `${TEIL_COLOR}22`,
                  color: TEIL_COLOR,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem',
                  marginLeft: '0.4rem',
                }}
              >
                {TEIL_LABELS[prompt.teil]}
              </span>
            )}
            <h2 style={s.cardTitle}>{prompt.title}</h2>
            <p style={s.scenario}>{prompt.scenario}</p>

            <ul style={s.questionList}>
              {prompt.questions.map((q, i) => (
                <li key={i} style={s.questionItem}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: ACCENT,
                      fontWeight: 600,
                    }}
                  >
                    •
                  </span>
                  {q}
                </li>
              ))}
            </ul>

            <div style={s.timeLimitRow}>
              <span>⏱️</span>
              <span>
                Time limit: <strong>{formatTime(prompt.timeLimit)}</strong>
              </span>
            </div>
          </div>

          {/* Recording controls */}
          <div style={s.recordSection}>
            {micError ? (
              <div style={s.micError}>
                <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>🎤 Microphone Unavailable</p>
                <p style={{ margin: 0 }}>{micError}</p>
              </div>
            ) : (
              <>
                {/* Timer */}
                <div
                  style={
                    recordingState === 'recording' && (isOverLimit ? true : isNearLimit)
                      ? s.timerWarning
                      : s.timerDisplay
                  }
                >
                  {formatTime(elapsed)}
                  {recordingState === 'recording' && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        marginLeft: '0.75rem',
                      }}
                    >
                      / {formatTime(prompt.timeLimit)}
                    </span>
                  )}
                </div>

                {isOverLimit && recordingState === 'recording' && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-error)' }}>
                    ⚠️ Time limit exceeded
                  </span>
                )}

                {isNearLimit && !isOverLimit && recordingState === 'recording' && (
                  <span style={{ fontSize: '0.8rem', color: '#ffc107' }}>
                    ⏰ Approaching time limit
                  </span>
                )}

                {/* Time limit progress bar during recording */}
                {recordingState === 'recording' && (
                  <div style={{ width: '100%', maxWidth: 300 }}>
                    <ProgressBar
                      value={Math.min(100, (elapsed / prompt.timeLimit) * 100)}
                      color={isOverLimit ? '#ff6b6b' : isNearLimit ? '#ffc107' : ACCENT}
                      height={4}
                    />
                  </div>
                )}

                <div className="audio-controls" style={s.controlRow}>
                  {recordingState === 'idle' && (
                    <button
                      className="btn"
                      style={s.recordBtn(false)}
                      onClick={() => void startRecording()}
                      aria-label="Start recording"
                    >
                      🎤
                    </button>
                  )}

                  {recordingState === 'recording' && (
                    <button
                      className="btn recording"
                      style={s.recordBtn(true)}
                      onClick={stopRecording}
                      aria-label="Stop recording"
                    >
                      ⏹
                    </button>
                  )}

                  {recordingState === 'recorded' && audioUrl && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--color-success)',
                          fontWeight: 600,
                        }}
                      >
                        ✓ Recording complete — {formatTime(elapsed)}
                      </span>
                      <audio
                        ref={audioRef}
                        src={audioUrl}
                        controls
                        style={{ width: '100%', maxWidth: 320 }}
                      />
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button style={btn('var(--bg-card)', 'var(--text-primary)')} onClick={recordAgain}>
                          🔄 Record Again
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {recordingState === 'idle' && !audioUrl && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Tap to start recording
                  </span>
                )}
              </>
            )}
          </div>

          {/* Hints panel (collapsible) */}
          <div style={s.hintsPanel}>
            <button style={s.hintsToggle} onClick={() => setHintsOpen((o) => !o)}>
              <span>💡 Hints &amp; Key Phrases</span>
              <span>{hintsOpen ? '▲' : '▼'}</span>
            </button>
            {hintsOpen && (
              <div style={s.hintsContent}>
                <p style={s.hintsSubheading}>Key Phrases</p>
                <div>
                  {prompt.keyPhrases.map((kp, i) => (
                    <span key={i} style={s.phraseChip}>
                      {kp}
                    </span>
                  ))}
                </div>

                <p style={s.hintsSubheading}>Tips</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {prompt.tips.map((tip, i) => (
                    <li key={i} style={s.tipItem}>
                      💬 {tip}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <button
                    className="btn"
                    style={{ fontSize: '0.85rem', background: '#ab47bc22', color: '#ab47bc', border: '1px solid #ab47bc44' }}
                    onClick={() => navigate('/phrases')}
                  >
                    📝 Open Phrase Book
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={s.navRow}>
            <button
              style={btn('var(--bg-card)', 'var(--text-primary)')}
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Previous prompt"
            >
              ◀ Prev
            </button>

            <button
              style={btn(
                isCompleted ? 'var(--color-success-bg)' : ACCENT,
                isCompleted ? ACCENT : '#1a1b2e',
              )}
              onClick={toggleComplete}
            >
              {isCompleted ? '✓ Practiced' : '☐ Mark Practiced'}
            </button>

            <button
              style={btn('var(--bg-card)', 'var(--text-primary)')}
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex >= prompts.length - 1}
              aria-label="Next prompt"
            >
              Next ▶
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
