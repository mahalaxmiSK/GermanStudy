interface ProgressBarProps {
  value: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = 'var(--accent-primary)',
  height = 6,
  showLabel = false,
}) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="progress-bar" style={{ height }}>
      <div
        className="progress-bar__fill"
        style={{ width: `${clamped}%`, background: color }}
      />
      {showLabel && (
        <span
          style={{
            position: 'absolute',
            right: 8,
            fontSize: 11,
            color: 'var(--text-muted)',
            lineHeight: `${height}px`,
          }}
        >
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
