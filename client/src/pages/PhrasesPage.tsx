import { useState, useMemo, useCallback, type CSSProperties } from "react";
import {
  generalPhrases,
  themePhrases,
  type PhraseCategory,
  type PhraseTemplate,
} from "../data/templates";
import { themes } from "../data/themes";
import BackButton from "../components/BackButton";

const ACCENT = "#ab47bc";

type TabId = "general" | "byTheme";

/* ── Styles ── */

const s = {
  page: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "1.5rem 1rem 3rem",
    fontFamily: "var(--font-sans)",
    color: "var(--text-primary)",
  } satisfies CSSProperties,

  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.25rem",
    flexWrap: "wrap",
  } satisfies CSSProperties,

  title: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--text-heading)",
    margin: 0,
    flex: 1,
  } satisfies CSSProperties,

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35em",
    fontSize: "0.8rem",
    fontWeight: 600,
    padding: "0.3em 0.8em",
    borderRadius: "var(--radius-pill)",
    background: `${ACCENT}22`,
    color: ACCENT,
  } satisfies CSSProperties,

  searchBox: {
    width: "100%",
    padding: "0.65rem 1rem 0.65rem 2.5rem",
    fontSize: "0.95rem",
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius-md)",
    outline: "none",
    marginBottom: "1rem",
  } satisfies CSSProperties,

  searchWrap: {
    position: "relative" as const,
    marginBottom: "0.25rem",
  } satisfies CSSProperties,

  searchIcon: {
    position: "absolute" as const,
    left: "0.85rem",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1rem",
    pointerEvents: "none" as const,
    color: "var(--text-muted)",
  } satisfies CSSProperties,

  tabs: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1.25rem",
  } satisfies CSSProperties,

  tab: (active: boolean): CSSProperties => ({
    padding: "0.55rem 1.2rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    borderRadius: "var(--radius-pill)",
    border: active ? `2px solid ${ACCENT}` : "2px solid var(--border-color)",
    background: active ? `${ACCENT}22` : "transparent",
    color: active ? ACCENT : "var(--text-muted)",
    cursor: "pointer",
    transition: "all 0.15s ease",
  }),

  themeChips: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.5rem",
    marginBottom: "1.25rem",
  } satisfies CSSProperties,

  themeChip: (active: boolean, color: string): CSSProperties => ({
    padding: "0.4rem 0.9rem",
    fontSize: "0.85rem",
    fontWeight: 500,
    borderRadius: "var(--radius-pill)",
    border: active ? `2px solid ${color}` : "1px solid var(--border-color)",
    background: active ? `${color}22` : "transparent",
    color: active ? color : "var(--text-muted)",
    cursor: "pointer",
    transition: "all 0.15s ease",
  }),

  accordion: {
    marginBottom: "0.75rem",
    background: "var(--bg-card)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
  } satisfies CSSProperties,

  accordionHeader: (open: boolean): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.85rem 1rem",
    cursor: "pointer",
    background: open ? `${ACCENT}0d` : "transparent",
    transition: "background 0.15s ease",
    userSelect: "none",
  }),

  accordionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text-heading)",
  } satisfies CSSProperties,

  accordionCount: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "var(--text-muted)",
    marginLeft: "0.4rem",
  } satisfies CSSProperties,

  accordionBody: {
    padding: "0 1rem 0.75rem",
  } satisfies CSSProperties,

  phraseCard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.5rem",
    padding: "0.75rem 0.85rem",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "var(--radius-sm)",
    marginBottom: "0.5rem",
    transition: "background 0.12s ease",
  } satisfies CSSProperties,

  phraseGerman: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text-heading)",
    lineHeight: 1.5,
    marginBottom: "0.2rem",
  } satisfies CSSProperties,

  phraseEnglish: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    lineHeight: 1.4,
    marginBottom: "0.15rem",
  } satisfies CSSProperties,

  phraseUsage: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.3em",
    fontSize: "0.78rem",
    color: ACCENT,
    fontWeight: 500,
  } satisfies CSSProperties,

  copyBtn: {
    flexShrink: 0,
    padding: "0.35rem",
    fontSize: "0.9rem",
    background: "transparent",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    color: "var(--text-muted)",
    transition: "all 0.15s ease",
    lineHeight: 1,
  } satisfies CSSProperties,

  emptyState: {
    textAlign: "center" as const,
    padding: "3rem 1rem",
    color: "var(--text-muted)",
    fontSize: "0.95rem",
  } satisfies CSSProperties,

  sectionLabel: {
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    color: "var(--text-muted)",
    marginBottom: "0.75rem",
    marginTop: "0.25rem",
  } satisfies CSSProperties,
};

/* ── Phrase Card ── */

function PhraseCard({ phrase }: { phrase: PhraseTemplate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(phrase.german).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }, [phrase.german]);

  return (
    <div style={s.phraseCard}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={s.phraseGerman}>{phrase.german}</div>
        <div style={s.phraseEnglish}>{phrase.english}</div>
        <span style={s.phraseUsage}>💡 {phrase.usage}</span>
      </div>
      <button
        style={s.copyBtn}
        onClick={handleCopy}
        title="Copy German text"
        aria-label="Copy German text"
      >
        {copied ? "✓" : "📋"}
      </button>
    </div>
  );
}

/* ── Accordion ── */

function CategoryAccordion({
  category,
  defaultOpen,
  searchQuery,
}: {
  category: PhraseCategory;
  defaultOpen: boolean;
  searchQuery: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const filteredPhrases = useMemo(() => {
    if (!searchQuery) return category.phrases;
    const q = searchQuery.toLowerCase();
    return category.phrases.filter(
      (p) =>
        p.german.toLowerCase().includes(q) ||
        p.english.toLowerCase().includes(q) ||
        p.usage.toLowerCase().includes(q),
    );
  }, [category.phrases, searchQuery]);

  if (filteredPhrases.length === 0) return null;

  return (
    <div style={s.accordion}>
      <div
        style={s.accordionHeader(open)}
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen((v) => !v);
        }}
      >
        <span style={s.accordionTitle}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
          <span style={s.accordionCount}>
            ({filteredPhrases.length})
          </span>
        </span>
        <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open && (
        <div style={s.accordionBody}>
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              marginBottom: "0.6rem",
              fontStyle: "italic",
            }}
          >
            {category.germanName}
          </div>
          {filteredPhrases.map((phrase) => (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Page ── */

const PhrasesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Count for the badge
  const totalPhraseCount = useMemo(() => {
    const gc = generalPhrases.reduce((s, c) => s + c.phrases.length, 0);
    const tc = themePhrases.reduce(
      (s, tp) => s + tp.categories.reduce((s2, c) => s2 + c.phrases.length, 0),
      0,
    );
    return gc + tc;
  }, []);

  // Theme-specific categories
  const themeCategories = useMemo(() => {
    if (!selectedTheme) return [];
    const tp = themePhrases.find((t) => t.themeId === selectedTheme);
    return tp ? tp.categories : [];
  }, [selectedTheme]);

  // Check if any results exist for current search
  const hasGeneralResults = useMemo(() => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return generalPhrases.some((cat) =>
      cat.phrases.some(
        (p) =>
          p.german.toLowerCase().includes(q) ||
          p.english.toLowerCase().includes(q) ||
          p.usage.toLowerCase().includes(q),
      ),
    );
  }, [searchQuery]);

  const hasThemeResults = useMemo(() => {
    if (!searchQuery) return themeCategories.length > 0;
    const q = searchQuery.toLowerCase();
    return themeCategories.some((cat) =>
      cat.phrases.some(
        (p) =>
          p.german.toLowerCase().includes(q) ||
          p.english.toLowerCase().includes(q) ||
          p.usage.toLowerCase().includes(q),
      ),
    );
  }, [searchQuery, themeCategories]);

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <BackButton />
        <h1 style={s.title}>📝 Phrase Book</h1>
        <span style={s.badge}>{totalPhraseCount} phrases</span>
      </div>

      {/* Search */}
      <div style={s.searchWrap}>
        <span style={s.searchIcon}>🔍</span>
        <input
          type="text"
          style={s.searchBox}
          placeholder="Search phrases in German or English..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div style={s.tabs}>
        <button
          style={s.tab(activeTab === "general")}
          onClick={() => setActiveTab("general")}
        >
          General Phrases
        </button>
        <button
          style={s.tab(activeTab === "byTheme")}
          onClick={() => setActiveTab("byTheme")}
        >
          By Theme
        </button>
      </div>

      {/* General Phrases Tab */}
      {activeTab === "general" && (
        <div>
          <p style={s.sectionLabel}>Usable across all themes and exam tasks</p>
          {hasGeneralResults ? (
            generalPhrases.map((cat) => (
              <CategoryAccordion
                key={cat.id}
                category={cat}
                defaultOpen={false}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            <div style={s.emptyState}>
              No phrases match your search.
            </div>
          )}
        </div>
      )}

      {/* By Theme Tab */}
      {activeTab === "byTheme" && (
        <div>
          {/* Theme chips */}
          <div style={s.themeChips}>
            {themes.map((theme) => (
              <button
                key={theme.id}
                style={s.themeChip(selectedTheme === theme.id, theme.color)}
                onClick={() =>
                  setSelectedTheme(
                    selectedTheme === theme.id ? null : theme.id,
                  )
                }
              >
                {theme.icon} {theme.name}
              </button>
            ))}
          </div>

          {!selectedTheme ? (
            <div style={s.emptyState}>
              Select a theme above to see topic-specific phrases.
            </div>
          ) : hasThemeResults ? (
            themeCategories.map((cat) => (
              <CategoryAccordion
                key={cat.id}
                category={cat}
                defaultOpen={true}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            <div style={s.emptyState}>
              No phrases match your search in this theme.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhrasesPage;
