const STEPS = [
  {
    n: '01',
    title: 'Create your business profile',
    body: 'Register as a restaurant or supplier, upload KYC documents, and get verified.',
  },
  {
    n: '02',
    title: 'Request or quote',
    body: 'Restaurants raise RFQs from the catalogue. Suppliers respond with competitive quotes.',
  },
  {
    n: '03',
    title: 'Compare and award',
    body: 'Review ranked quotes, pick the best fit, and confirm the purchase order.',
  },
  {
    n: '04',
    title: 'Pay and track delivery',
    body: 'Pay in-app and follow fulfilment until goods arrive at the kitchen door.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-sage-100 bg-sage-50 py-10 dark:border-sage-800 dark:bg-black/40 sm:py-14 lg:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            How it works
          </p>
          <h2 className="section-title mt-2">From request to delivery</h2>
          <p className="section-sub">
            Four clear steps — the same flow mirrored in the ScopsK mobile apps.
          </p>
        </div>

        <ol className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {STEPS.map(step => (
            <li key={step.n} className="card-surface relative p-6">
              <span className="font-display text-3xl font-extrabold text-brand-yellow drop-shadow-[1px_1px_0_#0a0a0a]">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-sage-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-600 dark:text-sage-300">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
