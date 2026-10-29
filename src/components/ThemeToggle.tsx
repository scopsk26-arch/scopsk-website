import {Moon, Sun} from 'lucide-react';
import {useTheme} from '@/context/ThemeContext';

export function ThemeToggle() {
  const {theme, toggle} = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid h-8 w-8 place-items-center rounded-full border border-sage-200 bg-white text-sage-700 shadow-sm transition hover:bg-sage-50 dark:border-sage-600 dark:bg-sage-800 dark:text-brand-yellow dark:hover:bg-sage-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
