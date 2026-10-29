import {ChefHat, Truck} from 'lucide-react';

export function Audiences() {
  return (
    <section id="audiences" className="container-page py-10 sm:py-14 lg:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
          Who it is for
        </p>
        <h2 className="section-title mt-2">One platform, two workspaces</h2>
        <p className="section-sub">
          Restaurant buyers and supplier sellers share the marketplace — with
          role-specific tools.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border-2 border-sage-900 bg-gradient-to-br from-terracotta-500 to-terracotta-700 p-8 text-white shadow-pop">
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
            <ChefHat size={24} />
          </div>
          <h3 className="font-display text-2xl font-extrabold">
            For restaurants
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            Buy supplies, compare quotes, and pay suppliers — without leaving
            the app. Keep purchasing, invoices, and delivery status in one
            place.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-brand-yellow">
            <li>· Smart RFQs from catalogue</li>
            <li>· Ranked top quotes</li>
            <li>· Wallet, credit & invoices</li>
          </ul>
        </article>

        <article className="overflow-hidden rounded-3xl border-2 border-sage-900 bg-gradient-to-br from-sage-700 to-sage-900 p-8 text-white shadow-pop">
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
            <Truck size={24} />
          </div>
          <h3 className="font-display text-2xl font-extrabold">
            For suppliers
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            Receive purchase requests that match your catalogue and coverage,
            quote fast, deliver, and get paid — commission handled on platform.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-brand-yellow">
            <li>· Matched buyer demand</li>
            <li>· One-tap quoting</li>
            <li>· Fast settlement</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
