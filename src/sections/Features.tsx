import {
  ClipboardList,
  Scale,
  BadgeDollarSign,
  Truck,
  ShieldCheck,
} from 'lucide-react';

const FEATURES = [
  {
    icon: ClipboardList,
    title: 'Smart catalogue & RFQs',
    body: 'Raise a purchase request from a guided catalogue in under a minute and match the right suppliers.',
  },
  {
    icon: Scale,
    title: 'Top quotes, ranked',
    body: 'See the best supplier quotes first — ranked on price, rating, and on-time delivery record.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Pay suppliers in-app',
    body: 'Settle by card, bank transfer, or credit terms. Every order stays tracked from quote to delivery.',
  },
  {
    icon: Truck,
    title: 'Delivery & tracking',
    body: 'Follow fulfilment live so kitchens know what is arriving and when.',
  },
  {
    icon: ShieldCheck,
    title: 'KYC-verified businesses',
    body: 'Organizations are reviewed with business documents so both sides trade with confidence.',
  },
];

export function Features() {
  return (
    <section id="features" className="container-page py-10 sm:py-14 lg:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
          Features
        </p>
        <h2 className="section-title mt-2">Built for kitchen-speed buying</h2>
        <p className="section-sub">
          Enterprise-grade procurement without the spreadsheet chaos — for
          restaurants and suppliers across the UAE.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {FEATURES.map(f => {
          const Icon = f.icon;
          return (
            <article key={f.title} className="card-surface p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-terracotta-50 text-brand-orange dark:bg-terracotta-900/40">
                <Icon size={20} strokeWidth={2.25} />
              </div>
              <h3 className="font-display text-lg font-bold text-sage-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-600 dark:text-sage-300">
                {f.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
