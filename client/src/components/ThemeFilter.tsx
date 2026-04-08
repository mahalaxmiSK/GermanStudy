import { themes } from '../data/themes';

interface ThemeFilterProps {
  selectedTheme: string | null;
  onSelectTheme: (theme: string | null) => void;
}

const ThemeFilter: React.FC<ThemeFilterProps> = ({
  selectedTheme,
  onSelectTheme,
}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <button
        className={`theme-chip ${selectedTheme === null ? 'active' : ''}`}
        onClick={() => onSelectTheme(null)}
      >
        All
      </button>
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={`theme-chip ${selectedTheme === theme.id ? 'active' : ''}`}
          onClick={() =>
            onSelectTheme(selectedTheme === theme.id ? null : theme.id)
          }
        >
          {theme.icon} {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeFilter;
