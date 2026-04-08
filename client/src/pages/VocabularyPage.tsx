import { useState, useEffect, useMemo, useCallback, type CSSProperties } from 'react';
import { vocabulary, type VocabItem } from '../data/vocabulary';
import { themes } from '../data/themes';
import BackButton from '../components/BackButton';

const STORAGE_KEY = 'germanstudy-vocab-progress';
const ACCENT = '#7c83ff';

type CardStatus = 'known' | 'unknown';
type Difficulty = 'easy' | 'medium' | 'hard';

function loadProgress(): Record<string, CardStatus> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, CardStatus>) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, CardStatus>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ── Inline styles using CSS vars ── */

const styles = {
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
  } satisfies CSSProperties,

  section: {
    marginBottom: '1rem',
  } satisfies CSSProperties,

  chipRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
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
  } satisfies CSSProperties,

  cardArea: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '1.25rem',
  } satisfies CSSProperties,

  posBadge: {
    display: 'inline-block',
    padding: '0.15em 0.6em',
    fontSize: '0.75rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    background: `${ACCENT}22`,
    color: ACCENT,
    marginTop: '0.5rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
  } satisfies CSSProperties,

  backDetail: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    margin: '0.25rem 0',
  } satisfies CSSProperties,

  example: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontStyle: 'italic' as const,
    marginTop: '0.5rem',
    lineHeight: 1.5,
  } satisfies CSSProperties,

  actionRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  } satisfies CSSProperties,

  navRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '0.75rem',
  } satisfies CSSProperties,

  toolRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
  } satisfies CSSProperties,

  empty: {
    textAlign: 'center' as const,
    padding: '3rem 1rem',
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
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

function chipStyle(active: boolean, color = ACCENT): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4em',
    padding: '0.4em 1em',
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: 'var(--font-sans)',
    border: `1px solid ${active ? color : 'var(--border-color)'}`,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    background: active ? `${color}22` : 'var(--bg-card)',
    color: active ? color : 'var(--text-primary)',
    transition: 'all var(--transition-fast)',
    userSelect: 'none',
  };
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: '#51cf66',
  medium: '#ffc107',
  hard: '#ff6b6b',
};

export default function VocabularyPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [progress, setProgress] = useState<Record<string, CardStatus>>(loadProgress);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [shuffleOrder, setShuffleOrder] = useState<string[]>([]);

  // Filtered list
  const filtered = useMemo(() => {
    let items = vocabulary;
    if (selectedTheme) items = items.filter((v) => v.theme === selectedTheme);
    if (selectedDifficulty) items = items.filter((v) => v.difficulty === selectedDifficulty);
    return items;
  }, [selectedTheme, selectedDifficulty]);

  // Ordered list (shuffle or natural)
  const cards: VocabItem[] = useMemo(() => {
    if (!shuffled) return filtered;
    const idSet = new Set(filtered.map((v) => v.id));
    const ordered = shuffleOrder.filter((id) => idSet.has(id));
    const lookup = new Map(filtered.map((v) => [v.id, v]));
    return ordered.map((id) => lookup.get(id)!);
  }, [filtered, shuffled, shuffleOrder]);

  // Clamp index when cards change
  useEffect(() => {
    setCurrentIndex((prev) => (cards.length === 0 ? 0 : Math.min(prev, cards.length - 1)));
    setFlipped(false);
  }, [cards.length]);

  // Persist progress
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const currentCard = cards[currentIndex] as VocabItem | undefined;

  const knownCount = useMemo(
    () => cards.filter((c) => progress[c.id] === 'known').length,
    [cards, progress],
  );

  const goTo = useCallback(
    (idx: number) => {
      if (idx >= 0 && idx < cards.length) {
        setCurrentIndex(idx);
        setFlipped(false);
      }
    },
    [cards.length],
  );

  const markCard = useCallback(
    (status: CardStatus) => {
      if (!currentCard) return;
      setProgress((prev) => ({ ...prev, [currentCard.id]: status }));
      if (currentIndex < cards.length - 1) {
        goTo(currentIndex + 1);
      } else {
        setFlipped(false);
      }
    },
    [currentCard, currentIndex, cards.length, goTo],
  );

  const handleShuffle = useCallback(() => {
    const ids = shuffle(filtered.map((v) => v.id));
    setShuffleOrder(ids);
    setShuffled(true);
    setCurrentIndex(0);
    setFlipped(false);
  }, [filtered]);

  const handleUnshuffle = useCallback(() => {
    setShuffled(false);
    setCurrentIndex(0);
    setFlipped(false);
  }, []);

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <BackButton />
        <h1 style={styles.title}>📇 Vocabulary</h1>
      </div>

      {/* Theme filter */}
      <div style={styles.section}>
        <div style={styles.chipRow}>
          <button
            style={chipStyle(selectedTheme === null)}
            onClick={() => setSelectedTheme(null)}
          >
            All
          </button>
          {themes.map((t) => (
            <button
              key={t.id}
              style={chipStyle(selectedTheme === t.id, t.color)}
              onClick={() => setSelectedTheme(selectedTheme === t.id ? null : t.id)}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty filter */}
      <div style={styles.section}>
        <div style={styles.chipRow}>
          {(['easy', 'medium', 'hard'] as const).map((d) => (
            <button
              key={d}
              style={chipStyle(selectedDifficulty === d, DIFFICULTY_COLORS[d])}
              onClick={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={styles.statsBar}>
        <span>
          Card <strong>{cards.length === 0 ? 0 : currentIndex + 1}</strong> / {cards.length}
        </span>
        <span style={{ color: 'var(--color-success)' }}>✓ Known: {knownCount}</span>
        <span style={{ color: 'var(--text-muted)' }}>
          Remaining: {cards.length - knownCount}
        </span>
      </div>

      {cards.length === 0 ? (
        <div style={styles.empty}>No cards match the current filters.</div>
      ) : (
        <>
          {/* Flashcard */}
          <div style={styles.cardArea}>
            <div
              className={`flashcard${flipped ? ' flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFlipped((f) => !f);
                }
              }}
            >
              <div className="flashcard__inner">
                {/* Front */}
                <div className="flashcard-front">
                  <div>
                    {currentCard?.article && (
                      <span style={{ color: 'var(--text-muted)', marginRight: '0.3em' }}>
                        {currentCard.article}
                      </span>
                    )}
                    {currentCard?.german}
                  </div>
                  <span style={styles.posBadge}>{currentCard?.partOfSpeech}</span>
                </div>

                {/* Back */}
                <div className="flashcard-back">
                  <div style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {currentCard?.english}
                  </div>
                  {currentCard?.plural && (
                    <div style={styles.backDetail}>Plural: {currentCard.plural}</div>
                  )}
                  <div style={styles.example}>
                    „{currentCard?.exampleSentence}"
                    <br />
                    {currentCard?.exampleTranslation}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={styles.navRow}>
            <button
              style={btn('var(--bg-card)', 'var(--text-primary)')}
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Previous card"
            >
              ◀ Prev
            </button>
            <button
              style={btn('var(--bg-card)', 'var(--text-primary)')}
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex >= cards.length - 1}
              aria-label="Next card"
            >
              Next ▶
            </button>
          </div>

          {/* Action buttons */}
          <div style={styles.actionRow}>
            <button style={btn('#ff6b6b')} onClick={() => markCard('unknown')}>
              ✗ Again
            </button>
            <button style={btn('#51cf66', '#1a1b2e')} onClick={() => markCard('known')}>
              ✓ Know it
            </button>
          </div>
        </>
      )}

      {/* Toolbar */}
      <div style={{ ...styles.toolRow, marginTop: '1.5rem' }}>
        <button
          style={btn(shuffled ? ACCENT : 'var(--bg-card)', shuffled ? '#fff' : 'var(--text-primary)')}
          onClick={shuffled ? handleUnshuffle : handleShuffle}
        >
          🔀 {shuffled ? 'Unshuffle' : 'Shuffle'}
        </button>
        <button
          style={btn('var(--bg-card)', 'var(--text-muted)')}
          onClick={() => {
            setProgress({});
            localStorage.removeItem(STORAGE_KEY);
          }}
        >
          ↺ Reset progress
        </button>
      </div>
    </div>
  );
}
