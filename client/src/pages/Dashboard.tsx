import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vocabulary } from '../data/vocabulary';
import { grammarExercises } from '../data/grammar';
import { writingPrompts } from '../data/writing';
import { speakingPrompts } from '../data/speaking';
import { readingTexts } from '../data/reading';
import { listeningExercises } from '../data/listening';
import { getTotalPhraseCount } from '../data/templates';
import type { ModuleInfo } from '../types';
import ProgressBar from '../components/ProgressBar';
import ThemeFilter from '../components/ThemeFilter';

const modules: ModuleInfo[] = [
  {
    id: 'vocabulary',
    name: 'Vocabulary',
    icon: '📇',
    color: '#7c83ff',
    path: '/vocabulary',
    description: 'Flashcards & word practice',
    totalItems: vocabulary.length,
  },
  {
    id: 'writing',
    name: 'Writing',
    icon: '✍️',
    color: '#ff6b6b',
    path: '/writing',
    description: 'Emails, messages & forms',
    totalItems: writingPrompts.length,
  },
  {
    id: 'speaking',
    name: 'Speaking',
    icon: '🗣️',
    color: '#51cf66',
    path: '/speaking',
    description: 'Dialogues & pronunciation',
    totalItems: speakingPrompts.length,
  },
  {
    id: 'grammar',
    name: 'Grammar',
    icon: '📝',
    color: '#ffc107',
    path: '/grammar',
    description: 'Rules & exercises',
    totalItems: grammarExercises.length,
  },
  {
    id: 'reading',
    name: 'Reading',
    icon: '📖',
    color: '#00bcd4',
    path: '/reading',
    description: 'Texts & comprehension',
    totalItems: readingTexts.length,
  },
  {
    id: 'listening',
    name: 'Listening',
    icon: '🎧',
    color: '#e91e63',
    path: '/listening',
    description: 'Audio exercises',
    totalItems: listeningExercises.length,
  },
  {
    id: 'phrases',
    name: 'Phrase Book',
    icon: '📝',
    color: '#ab47bc',
    path: '/phrases',
    description: 'Reusable templates & phrases',
    totalItems: getTotalPhraseCount(),
  },
];

const totalItems = modules.reduce((sum, m) => sum + m.totalItems, 0);
const overallProgress = 0; // placeholder until progress tracking is added

const itemLabel = (count: number, id: string): string => {
  const labels: Record<string, string> = {
    vocabulary: 'cards',
    writing: 'prompts',
    speaking: 'prompts',
    grammar: 'exercises',
    reading: 'texts',
    listening: 'exercises',
    phrases: 'phrases',
  };
  return `${count} ${labels[id] ?? 'items'}`;
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <div className="main-content">
      {/* Header */}
      <header className="page-header" style={{ textAlign: 'center' }}>
        <h1>🇩🇪 GermanStudy</h1>
        <p>
          Goethe A2 Exam Preparation{' '}
          <span className="badge" style={{ background: 'var(--accent-primary)' }}>
            A2
          </span>
        </p>
      </header>

      {/* Overall progress */}
      <section style={{ margin: '24px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
            color: 'var(--text-muted)',
            fontSize: 14,
          }}
        >
          <span>Overall Progress</span>
          <span>
            {totalItems} items across {modules.length} modules
          </span>
        </div>
        <ProgressBar value={overallProgress} showLabel height={10} />
      </section>

      {/* Module cards */}
      <section className="grid-3" style={{ margin: '32px 0' }}>
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="card"
            onClick={() => navigate(mod.path)}
            style={{
              cursor: 'pointer',
              borderTop: `3px solid ${mod.color}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 28 }}>{mod.icon}</span>
              <div>
                <h3 style={{ margin: 0, color: 'var(--text-heading)' }}>
                  {mod.name}
                </h3>
                <span
                  style={{ fontSize: 13, color: 'var(--text-muted)' }}
                >
                  {mod.description}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 6,
                fontSize: 13,
                color: 'var(--text-muted)',
              }}
            >
              <span>{itemLabel(mod.totalItems, mod.id)}</span>
              <span>0%</span>
            </div>

            <ProgressBar value={0} color={mod.color} />
          </div>
        ))}
      </section>

      {/* Theme filter */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: 'var(--text-heading)', marginBottom: 12 }}>
          A2 Themes
        </h3>
        <ThemeFilter
          selectedTheme={selectedTheme}
          onSelectTheme={setSelectedTheme}
        />
      </section>
    </div>
  );
};

export default Dashboard;
