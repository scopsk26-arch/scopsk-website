import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X} from 'lucide-react';
import {Logo} from './Logo';
import {ThemeToggle} from './ThemeToggle';
import {StoreButtons} from './StoreButtons';

const NAV = [
  {label: 'Features', href: '/#features'},
  {label: 'How it works', href: '/#how'},
  {label: 'Restaurants', href: '/#audiences'},
  {label: 'Suppliers', href: '/#audiences'},
  {label: 'Contact', href: '/#contact'},
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const home = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 border-b border-sage-100/80 bg-brand-paper/90 backdrop-blur-md dark:border-sage-800 dark:bg-sage-900/90">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo className="h-9 w-auto sm:h-10" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map(item => (
            <a
              key={item.label}
              href={home ? item.href.replace(/^\//, '') : item.href}
              className="text-sm font-semibold text-sage-600 transition hover:text-brand-orange dark:text-sage-300 dark:hover:text-brand-orange">
              {item.label}
            </a>
          ))}
          <Link
            to="/privacy"
            className="text-sm font-semibold text-sage-600 transition hover:text-brand-orange dark:text-sage-300">
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <StoreButtons size="md" />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-sage-200 bg-white lg:hidden dark:border-sage-600 dark:bg-sage-800"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-sage-100 bg-brand-paper px-4 py-4 lg:hidden dark:border-sage-800 dark:bg-sage-900">
          <div className="flex flex-col gap-3">
            {NAV.map(item => (
              <a
                key={item.label}
                href={home ? item.href.replace(/^\//, '') : item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-sage-800 hover:bg-sage-50 dark:text-sage-100 dark:hover:bg-sage-800">
                {item.label}
              </a>
            ))}
            <Link
              to="/privacy"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-sage-800 hover:bg-sage-50 dark:text-sage-100 dark:hover:bg-sage-800">
              Privacy
            </Link>
            <Link
              to="/terms"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-sage-800 hover:bg-sage-50 dark:text-sage-100 dark:hover:bg-sage-800">
              Terms
            </Link>
            <StoreButtons className="pt-2" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
