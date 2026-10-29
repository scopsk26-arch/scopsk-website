import {Apple, Play} from 'lucide-react';
import {site} from '@/config/site';

function storeHref(url: string) {
  return url.trim() ? url : '#download';
}

export function StoreButtons({
  size = 'md',
  className = '',
}: {
  size?: 'md' | 'lg';
  className?: string;
}) {
  const pad =
    size === 'lg' ? 'px-3.5 py-2.5 text-xs' : 'px-2.5 py-1.5 text-[11px]';
  const icon = size === 'lg' ? 18 : 14;
  const label = size === 'lg' ? 'text-[9px]' : 'text-[8px]';
  const title = size === 'lg' ? 'text-[13px]' : 'text-[11px]';

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a
        href={storeHref(site.appStoreUrl)}
        className={`inline-flex items-center gap-1.5 rounded-xl bg-sage-900 text-white shadow-[2px_2px_0_0_#ff5722] transition hover:bg-black dark:bg-white dark:text-sage-900 dark:hover:bg-sage-100 ${pad}`}
        aria-label="Download on the App Store">
        <Apple size={icon} strokeWidth={2} />
        <span className="text-left leading-tight">
          <span className={`block font-medium opacity-80 ${label}`}>
            Download on the
          </span>
          <span
            className={`block font-display font-bold tracking-tight ${title}`}>
            App Store
          </span>
        </span>
      </a>
      <a
        href={storeHref(site.playStoreUrl)}
        className={`inline-flex items-center gap-1.5 rounded-xl border border-sage-900 bg-white text-sage-900 transition hover:bg-sage-50 dark:border-sage-100 dark:bg-sage-800 dark:text-white dark:hover:bg-sage-700 ${pad}`}
        aria-label="Get it on Google Play">
        <Play size={icon - 2} fill="currentColor" />
        <span className="text-left leading-tight">
          <span className={`block font-medium opacity-80 ${label}`}>
            Get it on
          </span>
          <span
            className={`block font-display font-bold tracking-tight ${title}`}>
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
