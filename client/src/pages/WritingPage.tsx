import { useState, useEffect, useMemo, useCallback, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { writingPrompts, type WritingPrompt } from '../data/writing';
import BackButton from '../components/BackButton';
import ThemeFilter from '../components/ThemeFilter';
import ProgressBar from '../components/ProgressBar';

const ACCENT = '#ff6b6b';
const DRAFTS_KEY = 'germanstudy-writing-drafts';
const COMPLETED_KEY = 'germanstudy-writing-completed';

/* ── localStorage helpers ── */

function loadDrafts(): Record<string, string> {
  try {
    const raw = localStorage.getItem(DRAFTS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function saveDrafts(drafts: Record<string, string>) {
  localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
}

function loadCompleted(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function saveCompleted(completed: Record<string, boolean>) {
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));
}

function countWords(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

const TYPE_LABELS: Record<WritingPrompt['type'], string> = {
  email: '📧 Email',
  message: '💬 Message',
  form: '📝 Form',
};

/* ── Inline styles ── */

const s = {
  page: {
    maxWidth: 800,
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
    flexWrap: 'wrap',
  } satisfies CSSProperties,

  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text-heading)',
    margin: 0,
    flex: 1,
  } satisfies CSSProperties,

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35em',
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: '0.3em 0.8em',
    borderRadius: 'var(--radius-pill)',
    background: `${ACCENT}22`,
    color: ACCENT,
  } satisfies CSSProperties,

  section: {
    marginBottom: '1rem',
  } satisfies CSSProperties,

  card: {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    padding: '1.5rem',
    marginBottom: '1rem',
  } satisfies CSSProperties,

  typeBadge: (color: string): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35em',
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '0.25em 0.7em',
    borderRadius: 'var(--radius-pill)',
    background: `${color}22`,
    color,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: '0.75rem',
  }),

  scenario: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
    lineHeight: 1.6,
  } satisfies CSSProperties,

  task: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: 'var(--text-heading)',
    marginBottom: '0.75rem',
    lineHeight: 1.5,
  } satisfies CSSProperties,

  wordTarget: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  } satisfies CSSProperties,

  textarea: {
    minHeight: 200,
  } satisfies CSSProperties,

  wordCounter: (met: boolean): CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: 500,
    color: met ? '#51cf66' : 'var(--text-muted)',
    transition: 'color 0.25s ease',
  }),

  helpToggle: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4em',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    fontWeight: 500,
    background: 'var(--bg-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    marginBottom: '0.75rem',
  } satisfies CSSProperties,

  helpPanel: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    padding: '1.25rem',
    marginBottom: '1rem',
    animation: 'fade-in 0.2s ease',
  } satisfies CSSProperties,

  helpHeading: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: ACCENT,
    marginBottom: '0.5rem',
    marginTop: '0.75rem',
  } satisfies CSSProperties,

  phraseList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  } satisfies CSSProperties,

  phraseItem: {
    fontSize: '0.9rem',
    color: 'var(--text-primary)',
    padding: '0.35rem 0.6rem',
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans)',
  } satisfies CSSProperties,

  sampleCard: {
    background: `${ACCENT}11`,
    border: `1px solid ${ACCENT}44`,
    borderRadius: 'var(--radius-md)',
    padding: '1.25rem',
    marginBottom: '1rem',
  } satisfies CSSProperties,

  sampleText: {
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    lineHeight: 1.7,
    whiteSpace: 'pre-wrap',
    fontFamily: 'var(--font-sans)',
  } satisfies CSSProperties,

  sampleLabel: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: ACCENT,
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  } satisfies CSSProperties,

  navRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '0.5rem',
  } satisfies CSSProperties,

  counter: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  } satisfies CSSProperties,

  actionRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  } satisfies CSSProperties,

  completedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3em',
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: '0.25em 0.7em',
    borderRadius: 'var(--radius-pill)',
    background: 'rgba(81,207,102,0.15)',
    color: '#51cf66',
  } satisfies CSSProperties,

  progressRow: {
    marginBottom: '1.25rem',
  } satisfies CSSProperties,
};

/* ── Component ── */

const WritingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [drafts, setDrafts] = useState<Record<string, string>>(loadDrafts);
  const [completed, setCompleted] = useState<Record<string, boolean>>(loadCompleted);
  const [showHelp, setShowHelp] = useState(false);
  const [showSample, setShowSample] = useState(false);

  // Persist drafts & completed to localStorage
  useEffect(() => { saveDrafts(drafts); }, [drafts]);
  useEffect(() => { saveCompleted(completed); }, [completed]);

  // Filtered prompts
  const prompts = useMemo(() => {
    if (!selectedTheme) return writingPrompts;
    return writingPrompts.filter((p) => p.theme === selectedTheme);
  }, [selectedTheme]);

  // Clamp index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowSample(false);
    setShowHelp(false);
  }, [selectedTheme]);

  const prompt: WritingPrompt | undefined = prompts[currentIndex];

  // Draft text for current prompt
  const draftText = prompt ? (drafts[prompt.id] ?? '') : '';
  const wordCount = countWords(draftText);
  const targetMet = prompt ? wordCount >= prompt.wordCountTarget : false;

  // Overall completion stats
  const completedCount = useMemo(
    () => prompts.filter((p) => completed[p.id]).length,
    [prompts, completed],
  );
  const progressPercent = prompts.length > 0 ? (completedCount / prompts.length) * 100 : 0;

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!prompt) return;
      setDrafts((prev) => ({ ...prev, [prompt.id]: e.target.value }));
    },
    [prompt],
  );

  const handleToggleComplete = useCallback(() => {
    if (!prompt) return;
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[prompt.id]) {
        delete next[prompt.id];
      } else {
        next[prompt.id] = true;
      }
      return next;
    });
  }, [prompt]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, prompts.length - 1));
    setShowSample(false);
  }, [prompts.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
    setShowSample(false);
  }, []);

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <BackButton />
        <h1 style={s.title}>✍️ Writing Practice</h1>
        <span style={s.badge}>
          {completedCount}/{prompts.length} completed
        </span>
      </div>

      {/* Progress */}
      <div style={s.progressRow}>
        <ProgressBar value={progressPercent} color={ACCENT} height={6} />
      </div>

      {/* Theme Filter */}
      <div style={s.section}>
        <ThemeFilter selectedTheme={selectedTheme} onSelectTheme={setSelectedTheme} />
      </div>

      {prompts.length === 0 ? (
        <div style={s.card}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            No writing prompts found for this theme.
          </p>
        </div>
      ) : prompt ? (
        <>
          {/* Prompt Card */}
          <div style={s.card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={s.typeBadge(ACCENT)}>{TYPE_LABELS[prompt.type]}</span>
              {completed[prompt.id] && (
                <span style={s.completedBadge}>✓ Completed</span>
              )}
            </div>
            <p style={s.scenario}>{prompt.scenario}</p>
            <p style={s.task}>{prompt.task}</p>
            <span style={s.wordTarget}>
              🎯 Target: {prompt.wordCountTarget} words
            </span>
          </div>

          {/* Writing Area */}
          <textarea
            className="text-input"
            style={s.textarea}
            placeholder="Schreibe hier deine Antwort..."
            value={draftText}
            onChange={handleTextChange}
          />
          <div style={s.wordCounter(targetMet)}>
            <span>
              {wordCount} / {prompt.wordCountTarget} words
              {targetMet && ' ✓'}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Auto-saved
            </span>
          </div>

          {/* Action buttons */}
          <div style={{ ...s.actionRow, marginTop: '1rem' }}>
            <button
              style={s.helpToggle}
              onClick={() => setShowHelp((v) => !v)}
            >
              {showHelp ? '🔽 Hide Help' : '💡 Show Help'}
            </button>
            <button
              style={s.helpToggle}
              onClick={() => setShowSample((v) => !v)}
            >
              {showSample ? '🔽 Hide Sample' : '📖 Show Sample'}
            </button>
            <button
              className={completed[prompt.id] ? 'btn btn-success' : 'btn'}
              style={{ fontSize: '0.9rem' }}
              onClick={handleToggleComplete}
            >
              {completed[prompt.id] ? '✓ Completed' : '☐ Mark Complete'}
            </button>
          </div>

          {/* Help Panel */}
          {showHelp && (
            <div style={s.helpPanel}>
              <h4 style={{ ...s.helpHeading, marginTop: 0 }}>💡 Key Phrases</h4>
              <ul style={s.phraseList}>
                {prompt.keyPhrases.map((phrase) => (
                  <li key={phrase} style={s.phraseItem}>{phrase}</li>
                ))}
              </ul>
              <h4 style={s.helpHeading}>🚀 Sentence Starters</h4>
              <ul style={s.phraseList}>
                {prompt.sentenceStarters.map((starter) => (
                  <li key={starter} style={s.phraseItem}>{starter}</li>
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

          {/* Sample Response */}
          {showSample && (
            <div style={s.sampleCard}>
              <p style={s.sampleLabel}>📖 Sample Response</p>
              <p style={s.sampleText}>{prompt.sampleResponse}</p>
            </div>
          )}

          {/* Navigation */}
          <div style={s.navRow}>
            <button
              className="btn"
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            <span style={s.counter}>
              {currentIndex + 1} / {prompts.length}
            </span>
            <button
              className="btn"
              onClick={goNext}
              disabled={currentIndex === prompts.length - 1}
            >
              Next →
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default WritingPage;
