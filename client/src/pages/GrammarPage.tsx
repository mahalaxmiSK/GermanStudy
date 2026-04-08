import { useState, useEffect, useMemo, useCallback } from 'react';
import { grammarExercises } from '../data/grammar';
import type { GrammarExercise } from '../data/grammar';
import { themes } from '../data/themes';
import BackButton from '../components/BackButton';

/* ── localStorage persistence ── */
const STORAGE_KEY = 'germanstudy-grammar-progress';

interface GrammarProgress {
  score: number;
  completed: string[];
  total: number;
}

function loadProgress(): GrammarProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as GrammarProgress;
  } catch { /* ignore corrupt data */ }
  return { score: 0, completed: [], total: 0 };
}

function saveProgress(p: GrammarProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

/* ── Sentence renderer – replaces ___ with styled gap ── */
function SentenceWithGap({ sentence }: { sentence: string }) {
  const parts = sentence.split('___');
  if (parts.length < 2) return <span>{sentence}</span>;

  return (
    <span>
      {parts[0]}
      <span
        style={{
          display: 'inline-block',
          minWidth: '5rem',
          borderBottom: '2.5px solid #ffc107',
          margin: '0 0.25rem',
          textAlign: 'center',
        }}
      >
        &nbsp;
      </span>
      {parts[1]}
    </span>
  );
}

/* ── Main page component ── */
export default function GrammarPage() {
  /* filters */
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  /* exercise state */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [progress, setProgress] = useState<GrammarProgress>(loadProgress);
  const [finished, setFinished] = useState(false);

  /* derived: unique topics */
  const allTopics = useMemo(
    () => [...new Set(grammarExercises.map((e) => e.topic))],
    [],
  );

  /* derived: filtered exercises */
  const exercises: GrammarExercise[] = useMemo(() => {
    let list = grammarExercises;
    if (selectedTheme) list = list.filter((e) => e.theme === selectedTheme);
    if (selectedTopic) list = list.filter((e) => e.topic === selectedTopic);
    return list;
  }, [selectedTheme, selectedTopic]);

  /* reset on filter change */
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setFinished(false);
    setProgress({ score: 0, completed: [], total: 0 });
  }, [selectedTheme, selectedTopic]);

  const currentExercise = exercises[currentIndex] as GrammarExercise | undefined;
  const total = exercises.length;

  /* answer handler */
  const handleAnswer = useCallback(
    (option: string) => {
      if (answered || !currentExercise) return;
      setSelectedAnswer(option);
      setAnswered(true);

      const isCorrect = option === currentExercise.correctAnswer;
      const next: GrammarProgress = {
        score: progress.score + (isCorrect ? 1 : 0),
        completed: [...progress.completed, currentExercise.id],
        total: progress.total + 1,
      };
      setProgress(next);
      saveProgress(next);
    },
    [answered, currentExercise, progress],
  );

  /* next exercise */
  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  /* restart */
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setFinished(false);
    const fresh: GrammarProgress = { score: 0, completed: [], total: 0 };
    setProgress(fresh);
    saveProgress(fresh);
  };

  /* option class helper */
  const optionClass = (option: string) => {
    if (!answered) return 'quiz-option';
    if (option === currentExercise?.correctAnswer) return 'quiz-option correct';
    if (option === selectedAnswer) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  /* progress percentage */
  const pct = total > 0 ? ((currentIndex + (answered ? 1 : 0)) / total) * 100 : 0;

  /* ── Theme chips for themes present in current exercises ── */
  const relevantThemeIds = useMemo(
    () => [...new Set(grammarExercises.map((e) => e.theme))],
    [],
  );
  const relevantThemes = useMemo(
    () => themes.filter((t) => relevantThemeIds.includes(t.id)),
    [relevantThemeIds],
  );

  /* ── Render ── */
  return (
    <div className="main-content">
      {/* ── Header ── */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <BackButton />
          <h1 style={{ marginBottom: 0 }}>📝 Grammar Drills</h1>
        </div>
        {!finished && total > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge" style={{ background: 'rgba(255,193,7,0.15)', color: '#ffc107', fontSize: '0.85rem' }}>
              Score: {progress.score}/{progress.total}
            </span>
          </div>
        )}
      </div>

      {/* ── Filters ── */}
      <div style={{ marginBottom: '1.5rem' }}>
        {/* Theme chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <button
            className={`theme-chip${selectedTheme === null ? ' active' : ''}`}
            onClick={() => setSelectedTheme(null)}
            style={selectedTheme === null ? { borderColor: '#ffc107', color: '#ffc107', background: 'rgba(255,193,7,0.15)' } : undefined}
          >
            All Themes
          </button>
          {relevantThemes.map((t) => (
            <button
              key={t.id}
              className={`theme-chip${selectedTheme === t.id ? ' active' : ''}`}
              onClick={() => setSelectedTheme(selectedTheme === t.id ? null : t.id)}
              style={selectedTheme === t.id ? { borderColor: t.color, color: t.color, background: `${t.color}22` } : undefined}
            >
              {t.icon} {t.germanName}
            </button>
          ))}
        </div>

        {/* Topic filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button
            className={`theme-chip${selectedTopic === null ? ' active' : ''}`}
            onClick={() => setSelectedTopic(null)}
            style={selectedTopic === null ? { borderColor: '#ffc107', color: '#ffc107', background: 'rgba(255,193,7,0.15)' } : undefined}
          >
            All Topics
          </button>
          {allTopics.map((topic) => (
            <button
              key={topic}
              className={`theme-chip${selectedTopic === topic ? ' active' : ''}`}
              onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
              style={selectedTopic === topic ? { borderColor: '#ffc107', color: '#ffc107', background: 'rgba(255,193,7,0.15)' } : undefined}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* ── Empty state ── */}
      {total === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.25rem' }}>No exercises match the selected filters.</p>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => { setSelectedTheme(null); setSelectedTopic(null); }}>
            Clear Filters
          </button>
        </div>
      )}

      {/* ── Finished screen ── */}
      {finished && total > 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ marginBottom: '0.5rem' }}>Übung abgeschlossen!</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffc107', marginBottom: '0.5rem' }}>
              {progress.score} / {progress.total}
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {progress.total > 0 && progress.score / progress.total >= 0.8
                ? 'Ausgezeichnet! Du hast das toll gemacht! 🌟'
                : progress.total > 0 && progress.score / progress.total >= 0.5
                  ? 'Gut gemacht! Weiter üben wird sich lohnen! 💪'
                  : 'Übung macht den Meister! Versuch es nochmal! 📚'}
            </p>
            <button className="btn-primary btn" onClick={handleRestart}>
              Try Again 🔄
            </button>
          </div>
        </div>
      )}

      {/* ── Exercise card ── */}
      {!finished && currentExercise && (
        <>
          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
              Exercise {currentIndex + 1}/{total}
            </span>
            <div className="progress-bar" style={{ flex: 1 }}>
              <div
                className="progress-bar__fill"
                style={{ width: `${pct}%`, background: '#ffc107' }}
              />
            </div>
          </div>

          {/* Card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            {/* Topic badge */}
            <span
              className="badge"
              style={{
                background: 'rgba(255,193,7,0.15)',
                color: '#ffc107',
                marginBottom: '1rem',
                display: 'inline-block',
              }}
            >
              {currentExercise.topic}
            </span>

            {/* Instruction */}
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              {currentExercise.instruction}
            </p>

            {/* Sentence */}
            <p style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              <SentenceWithGap sentence={currentExercise.sentence} />
            </p>

            {/* Options – 2×2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {currentExercise.options.map((opt) => (
                <button
                  key={opt}
                  className={optionClass(opt)}
                  onClick={() => handleAnswer(opt)}
                  disabled={answered}
                  style={answered ? { cursor: 'default' } : undefined}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {answered && (
              <div style={{ marginTop: '0.75rem' }}>
                {selectedAnswer === currentExercise.correctAnswer ? (
                  <p style={{ color: 'var(--color-success)', fontWeight: 600, fontSize: '1.1rem' }}>
                    ✓ Richtig!
                  </p>
                ) : (
                  <div>
                    <p style={{ color: 'var(--color-error)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                      ✗ Falsch — richtige Antwort: <span style={{ color: 'var(--color-success)' }}>{currentExercise.correctAnswer}</span>
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {currentExercise.explanation}
                    </p>
                  </div>
                )}

                <button
                  className="btn-primary btn"
                  style={{ marginTop: '1rem' }}
                  onClick={handleNext}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
