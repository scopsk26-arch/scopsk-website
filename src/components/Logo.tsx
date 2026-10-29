import {Link} from 'react-router-dom';
import {useTheme} from '@/context/ThemeContext';

/**
 * light-mode PNG = dark brown mark → light backgrounds
 * dark-mode PNG = cream mark → dark backgrounds
 */
export function Logo({
  className = 'h-10 w-auto',
  to = '/',
}: {
  className?: string;
  to?: string;
}) {
  const {theme} = useTheme();
  const src =
    theme === 'dark'
      ? '/favicons/scopsk-logo-dark-mode.png'
      : '/favicons/scopsk-logo-light-mode.png';

  return (
    <Link to={to} className="inline-flex items-center" aria-label="ScopsK home">
      <img src={src} alt="ScopsK" className={className} />
    </Link>
  );
}
