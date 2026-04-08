import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = '← Back' }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button className="btn" onClick={() => navigate(-1)}>
      {label}
    </button>
  );
}
