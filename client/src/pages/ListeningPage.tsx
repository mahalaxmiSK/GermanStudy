import { useState, useEffect, useMemo, useCallback, useRef, type CSSProperties } from 'react';
import { listeningExercises, type ListeningExercise } from '../data/listening';
import BackButton from '../components/BackButton';
import ThemeFilter from '../components/ThemeFilter';
import ProgressBar from '../components/ProgressBar';

const ACCENT = '#e91e63';
const STORAGE_KEY = 'germanstudy-listening-progress';

interface ExerciseProgress {
  score: number;
  total: number;
  completed: boolean;
  answeredQuestions: Record<string, number>;
}

type ProgressMap = Record<string, ExerciseProgress>;

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function saveProgress(p: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

const TYPE_LABELS: Record<ListeningExercise['type'], string> = {
  dialogue: '💬 Dialogue',
  announcement: '📢 Announcement',
  'phone-message': '📞 Phone Message',
  conversation: '🗣️ Conversation',
};

type PlaybackState = 'idle' | 'playing' | 'paused';

const s = {
  page: {
    maxWidth: 760,
    margin: '0 auto',
    padding: '1.5rem 1rem 3rem',
    fontFamily: 'var(--font-sans)',
    color: 'var(--text-primary)',
  } satisfies CSSProperties,
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '0.75rem',
    marginBottom: '1.25rem',
  } satisfies CSSProperties,
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  } satisfies CSSProperties,
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text-heading)',
    margin: 0,
  } satisfies CSSProperties,
  scoreBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35em',
    fontSize: '0.85rem',
    fontWeight: 600,
    padding: '0.3em 0.8em',
    borderRadius: 'var(--radius-pill)',
    background: `${ACCENT}22`,
    color: ACCENT,
  } satisfies CSSProperties,
  filterWrap: {
    marginBottom: '1.25rem',
  } satisfies CSSProperties,
  audioCard: {
    background: 'rgba(233, 30, 99, 0.06)',
    border: `1px solid ${ACCENT}33`,
    borderRadius: 'var(--radius-lg)',
    padding: '1.75rem',
    marginBottom: '1.5rem',
  } satisfies CSSProperties,
  typeBadge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '0.25em 0.7em',
    borderRadius: 'var(--radius-pill)',
    background: `${ACCENT}22`,
    color: ACCENT,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
    marginBottom: '0.75rem',
  } satisfies CSSProperties,
  exerciseTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: 'var(--text-heading)',
    margin: '0 0 1rem 0',
  } satisfies CSSProperties,
  controlsRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '0.6rem',
    marginBottom: '1rem',
  } satisfies CSSProperties,
  speedRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  } satisfies CSSProperties,
  playCount: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginLeft: '0.5rem',
  } satisfies CSSProperties,
  transcriptToggle: {
    marginTop: '0.75rem',
  } satisfies CSSProperties,
  transcript: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'var(--text-primary)',
    whiteSpace: 'pre-wrap' as const,
    padding: '1.25rem',
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(255,255,255,0.08)',
    marginTop: '0.75rem',
  } satisfies CSSProperties,
  questionsSection: {
    marginBottom: '1.5rem',
  } satisfies CSSProperties,
  questionBlock: {
    marginBottom: '1.25rem',
  } satisfies CSSProperties,
  questionText: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text-heading)',
    marginBottom: '0.6rem',
  } satisfies CSSProperties,
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  } satisfies CSSProperties,
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  } satisfies CSSProperties,
  counter: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    minWidth: '7rem',
    textAlign: 'center' as const,
  } satisfies CSSProperties,
  empty: {
    textAlign: 'center' as const,
    padding: '3rem 1rem',
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
  } satisfies CSSProperties,
};

function speedBtnStyle(active: boolean): CSSProperties {
  return {
    padding: '0.3em 0.7em',
    fontSize: '0.8rem',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    border: `1px solid ${active ? ACCENT : 'var(--border-color)'}`,
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    background: active ? `${ACCENT}22` : 'var(--bg-card)',
    color: active ? ACCENT : 'var(--text-primary)',
    transition: 'all var(--transition-fast)',
  };
}

export default function ListeningPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);
  const [showTranscript, setShowTranscript] = useState(false);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [speed, setSpeed] = useState(1);
  const [playCount, setPlayCount] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const filtered = useMemo(() => {
    if (!selectedTheme) return listeningExercises;
    return listeningExercises.filter((e) => e.theme === selectedTheme);
  }, [selectedTheme]);

  // Reset on filter change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTheme]);

  // Reset audio state when exercise changes
  useEffect(() => {
    speechSynthesis.cancel();
    setPlaybackState('idle');
    setShowTranscript(false);
    setPlayCount(0);
    utteranceRef.current = null;
  }, [currentIndex, selectedTheme]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  // Persist progress
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const currentExercise = filtered[currentIndex] as ListeningExercise | undefined;
  const exerciseProgress = currentExercise ? progress[currentExercise.id] : undefined;
  const answeredQuestions = exerciseProgress?.answeredQuestions ?? {};
  const currentScore = exerciseProgress?.score ?? 0;
  const totalAnswered = exerciseProgress?.total ?? 0;

  const overallCompleted = useMemo(
    () => Object.values(progress).filter((p) => p.completed).length,
    [progress],
  );

  const speak = useCallback(
    (text: string, rate: number) => {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = rate;
      utterance.onend = () => setPlaybackState('idle');
      utterance.onerror = () => setPlaybackState('idle');
      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
      setPlaybackState('playing');
    },
    [],
  );

  const handlePlay = () => {
    if (!currentExercise) return;
    speak(currentExercise.transcript, speed);
    setPlayCount((c) => c + 1);
  };

  const handlePause = () => {
    if (playbackState === 'playing') {
      speechSynthesis.pause();
      setPlaybackState('paused');
    }
  };

  const handleResume = () => {
    if (playbackState === 'paused') {
      speechSynthesis.resume();
      setPlaybackState('playing');
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setPlaybackState('idle');
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    // If currently playing, restart with new speed
    if (playbackState === 'playing' && currentExercise) {
      speak(currentExercise.transcript, newSpeed);
    }
  };

  const handleAnswer = useCallback(
    (questionId: string, selectedIdx: number, correctIdx: number) => {
      if (!currentExercise) return;
      if (answeredQuestions[questionId] !== undefined) return;

      const isCorrect = selectedIdx === correctIdx;
      const prev = progress[currentExercise.id] ?? {
        score: 0,
        total: 0,
        completed: false,
        answeredQuestions: {},
      };
      const newAnswered = { ...prev.answeredQuestions, [questionId]: selectedIdx };
      const newScore = prev.score + (isCorrect ? 1 : 0);
      const newTotal = prev.total + 1;
      const allDone = newTotal >= currentExercise.questions.length;

      const next: ProgressMap = {
        ...progress,
        [currentExercise.id]: {
          score: newScore,
          total: newTotal,
          completed: allDone,
          answeredQuestions: newAnswered,
        },
      };
      setProgress(next);
    },
    [currentExercise, progress, answeredQuestions],
  );

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < filtered.length) setCurrentIndex(idx);
  };

  const optionClass = (questionId: string, optIdx: number, correctIdx: number) => {
    const selected = answeredQuestions[questionId];
    if (selected === undefined) return 'quiz-option';
    if (optIdx === correctIdx) return 'quiz-option correct';
    if (optIdx === selected) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  const progressPct =
    filtered.length > 0
      ? (filtered.filter((e) => progress[e.id]?.completed).length / filtered.length) * 100
      : 0;

  const listenLabel =
    playCount === 0
      ? 'First listen'
      : playCount === 1
        ? '2nd listen'
        : `${playCount + 1}th listen`;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerLeft}>
          <BackButton />
          <h1 style={s.title}>🎧 Listening Practice</h1>
        </div>
        <span style={s.scoreBadge}>
          ✓ {overallCompleted}/{listeningExercises.length} completed
        </span>
      </div>

      {/* Theme filter */}
      <div style={s.filterWrap}>
        <ThemeFilter selectedTheme={selectedTheme} onSelectTheme={setSelectedTheme} />
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <ProgressBar value={progressPct} color={ACCENT} height={6} />
      </div>

      {filtered.length === 0 ? (
        <div style={s.empty}>
          <p>No exercises match the selected theme.</p>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => setSelectedTheme(null)}>
            Clear Filter
          </button>
        </div>
      ) : currentExercise ? (
        <>
          {/* Navigation */}
          <div style={s.navRow}>
            <button className="btn" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
              ◀ Prev
            </button>
            <span style={s.counter}>
              Exercise {currentIndex + 1} / {filtered.length}
            </span>
            <button className="btn" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= filtered.length - 1}>
              Next ▶
            </button>
          </div>

          {/* Audio card */}
          <div style={s.audioCard}>
            <span style={s.typeBadge}>{TYPE_LABELS[currentExercise.type]}</span>
            <h2 style={s.exerciseTitle}>{currentExercise.title}</h2>

            {/* Audio controls */}
            <div style={s.controlsRow}>
              {playbackState === 'idle' && (
                <button className="btn" onClick={handlePlay} style={{ borderColor: ACCENT, color: ACCENT }}>
                  ▶ {playCount > 0 ? 'Play Again' : 'Play'}
                </button>
              )}
              {playbackState === 'playing' && (
                <>
                  <button className="btn" onClick={handlePause} style={{ borderColor: ACCENT, color: ACCENT }}>
                    ⏸ Pause
                  </button>
                  <button className="btn" onClick={handleStop}>
                    ⏹ Stop
                  </button>
                </>
              )}
              {playbackState === 'paused' && (
                <>
                  <button className="btn" onClick={handleResume} style={{ borderColor: ACCENT, color: ACCENT }}>
                    ▶ Resume
                  </button>
                  <button className="btn" onClick={handleStop}>
                    ⏹ Stop
                  </button>
                </>
              )}

              {/* Speed controls */}
              <div style={s.speedRow}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
                  Speed:
                </span>
                {[0.5, 0.75, 1].map((spd) => (
                  <button
                    key={spd}
                    style={speedBtnStyle(speed === spd)}
                    onClick={() => handleSpeedChange(spd)}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              {playCount > 0 && <span style={s.playCount}>🔊 {listenLabel}</span>}
            </div>

            {/* Transcript toggle */}
            <div style={s.transcriptToggle}>
              <button
                className="btn"
                onClick={() => setShowTranscript((v) => !v)}
                style={{ fontSize: '0.9rem' }}
              >
                {showTranscript ? '🙈 Hide Transcript' : '👁️ Show Transcript'}
              </button>
              {showTranscript && <div style={s.transcript}>{currentExercise.transcript}</div>}
            </div>
          </div>

          {/* Score for current exercise */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
            }}
          >
            <span style={{ color: 'var(--text-muted)' }}>
              Questions: {totalAnswered}/{currentExercise.questions.length} answered
            </span>
            <span style={{ color: ACCENT, fontWeight: 600 }}>
              Score: {currentScore}/{totalAnswered}
            </span>
          </div>

          {/* Questions */}
          <div style={s.questionsSection}>
            {currentExercise.questions.map((q, qIdx) => {
              const isAnswered = answeredQuestions[q.id] !== undefined;
              return (
                <div key={q.id} style={s.questionBlock}>
                  <p style={s.questionText}>
                    {qIdx + 1}. {q.question}
                  </p>
                  <div style={s.optionsGrid}>
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        className={optionClass(q.id, optIdx, q.correctAnswer)}
                        onClick={() => handleAnswer(q.id, optIdx, q.correctAnswer)}
                        disabled={isAnswered}
                        style={isAnswered ? { cursor: 'default' } : undefined}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {isAnswered && (
                    <p
                      style={{
                        marginTop: '0.4rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color:
                          answeredQuestions[q.id] === q.correctAnswer
                            ? 'var(--color-success)'
                            : 'var(--color-error)',
                      }}
                    >
                      {answeredQuestions[q.id] === q.correctAnswer ? '✓ Richtig!' : '✗ Falsch'}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom navigation */}
          <div style={s.navRow}>
            <button className="btn" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
              ◀ Previous
            </button>
            <button className="btn" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= filtered.length - 1}>
              Next ▶
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
