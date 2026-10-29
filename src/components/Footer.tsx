import {Link} from 'react-router-dom';
import {site} from '@/config/site';
import {Logo} from './Logo';
import {StoreButtons} from './StoreButtons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-100 bg-sage-50 dark:border-sage-800 dark:bg-black">
      <div className="container-page grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:py-14">
        <div>
          <Logo className="h-11 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage-600 dark:text-sage-300">
            {site.tagline}. {site.description}
          </p>
          <div className="mt-6">
            <StoreButtons />
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-sage-900 dark:text-white">
            Product
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-sage-600 dark:text-sage-300">
            <li>
              <a href="/#features" className="hover:text-brand-orange">
                Features
              </a>
            </li>
            <li>
              <a href="/#how" className="hover:text-brand-orange">
                How it works
              </a>
            </li>
            <li>
              <a href="/#download" className="hover:text-brand-orange">
                Download
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-brand-orange">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-sage-900 dark:text-white">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-sage-600 dark:text-sage-300">
            <li>
              <Link to="/privacy" className="hover:text-brand-orange">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-brand-orange">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/account-deletion" className="hover:text-brand-orange">
                Account deletion
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.supportEmail}`}
                className="hover:text-brand-orange">
                {site.supportEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sage-100 dark:border-sage-800">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-sage-500 sm:flex-row sm:items-center sm:justify-between dark:text-sage-400">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.addressLine}</p>
        </div>
      </div>
    </footer>
  );
}
