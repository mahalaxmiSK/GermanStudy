import { useState, useEffect, useMemo, useCallback, type CSSProperties } from 'react';
import { readingTexts, type ReadingText } from '../data/reading';
import BackButton from '../components/BackButton';
import ThemeFilter from '../components/ThemeFilter';
import ProgressBar from '../components/ProgressBar';

const ACCENT = '#00bcd4';
const STORAGE_KEY = 'germanstudy-reading-progress';

interface TextProgress {
  score: number;
  total: number;
  completed: boolean;
  answeredQuestions: Record<string, number>; // questionId → selected index
}

type ProgressMap = Record<string, TextProgress>;

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

const TYPE_LABELS: Record<ReadingText['type'], string> = {
  ad: '📋 Ad',
  email: '✉️ Email',
  notice: '📌 Notice',
  article: '📰 Article',
  'info-board': 'ℹ️ Info Board',
};

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
  textCard: {
    background: 'rgba(0, 188, 212, 0.06)',
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
  textTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: 'var(--text-heading)',
    margin: '0 0 1rem 0',
  } satisfies CSSProperties,
  textBody: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'var(--text-primary)',
    whiteSpace: 'pre-wrap' as const,
    padding: '1.25rem',
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(255,255,255,0.08)',
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

export default function ReadingPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);

  const filtered = useMemo(() => {
    if (!selectedTheme) return readingTexts;
    return readingTexts.filter((t) => t.theme === selectedTheme);
  }, [selectedTheme]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTheme]);

  // Persist progress
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const currentText = filtered[currentIndex] as ReadingText | undefined;
  const textProgress = currentText ? progress[currentText.id] : undefined;

  const answeredQuestions = textProgress?.answeredQuestions ?? {};
  const currentScore = textProgress?.score ?? 0;
  const totalAnswered = textProgress?.total ?? 0;

  // Overall progress across all texts
  const overallCompleted = useMemo(
    () => Object.values(progress).filter((p) => p.completed).length,
    [progress],
  );

  const handleAnswer = useCallback(
    (questionId: string, selectedIdx: number, correctIdx: number) => {
      if (!currentText) return;
      if (answeredQuestions[questionId] !== undefined) return; // already answered

      const isCorrect = selectedIdx === correctIdx;
      const prev = progress[currentText.id] ?? {
        score: 0,
        total: 0,
        completed: false,
        answeredQuestions: {},
      };
      const newAnswered = { ...prev.answeredQuestions, [questionId]: selectedIdx };
      const newScore = prev.score + (isCorrect ? 1 : 0);
      const newTotal = prev.total + 1;
      const allDone = newTotal >= currentText.questions.length;

      const next: ProgressMap = {
        ...progress,
        [currentText.id]: {
          score: newScore,
          total: newTotal,
          completed: allDone,
          answeredQuestions: newAnswered,
        },
      };
      setProgress(next);
    },
    [currentText, progress, answeredQuestions],
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
      ? (filtered.filter((t) => progress[t.id]?.completed).length / filtered.length) * 100
      : 0;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerLeft}>
          <BackButton />
          <h1 style={s.title}>📖 Reading Comprehension</h1>
        </div>
        <span style={s.scoreBadge}>
          ✓ {overallCompleted}/{readingTexts.length} completed
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
          <p>No texts match the selected theme.</p>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => setSelectedTheme(null)}>
            Clear Filter
          </button>
        </div>
      ) : currentText ? (
        <>
          {/* Navigation */}
          <div style={s.navRow}>
            <button className="btn" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
              ◀ Prev
            </button>
            <span style={s.counter}>
              Text {currentIndex + 1} / {filtered.length}
            </span>
            <button className="btn" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= filtered.length - 1}>
              Next ▶
            </button>
          </div>

          {/* Text card */}
          <div style={s.textCard}>
            <span style={s.typeBadge}>{TYPE_LABELS[currentText.type]}</span>
            <h2 style={s.textTitle}>{currentText.title}</h2>
            <div style={s.textBody}>{currentText.text}</div>
          </div>

          {/* Score for current text */}
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
              Questions: {totalAnswered}/{currentText.questions.length} answered
            </span>
            <span style={{ color: ACCENT, fontWeight: 600 }}>
              Score: {currentScore}/{totalAnswered}
            </span>
          </div>

          {/* Questions */}
          <div style={s.questionsSection}>
            {currentText.questions.map((q, qIdx) => {
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
              ◀ Previous Text
            </button>
            <button className="btn" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= filtered.length - 1}>
              Next Text ▶
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
