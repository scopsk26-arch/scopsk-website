import {Link} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-page py-14">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-sage-600 hover:text-brand-orange dark:text-sage-300">
        <ArrowLeft size={16} />
        Back to home
      </Link>
      <h1 className="font-display text-3xl font-extrabold text-sage-900 sm:text-4xl dark:text-white">
        {title}
      </h1>
      <p className="mt-2 text-sm text-sage-500 dark:text-sage-400">
        Last updated: {updated}
      </p>
      <div className="prose-legal mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-sage-700 dark:text-sage-200">
        {children}
      </div>
    </div>
  );
}

export function LegalH2({children}: {children: React.ReactNode}) {
  return (
    <h2 className="font-display text-xl font-bold text-sage-900 dark:text-white">
      {children}
    </h2>
  );
}
