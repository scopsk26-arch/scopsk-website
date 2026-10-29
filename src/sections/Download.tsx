import {StoreButtons} from '@/components/StoreButtons';

export function Download() {
  return (
    <section
      id="download"
      className="container-page py-8 sm:py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-sage-900 bg-sage-900 px-5 py-8 text-center shadow-pop sm:rounded-[2rem] sm:px-12 sm:py-12 dark:border-brand-orange">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,87,34,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,235,59,0.2),transparent_40%)]" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
            Get the app
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:mt-3 sm:text-4xl">
            Download ScopsK
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-sage-200 sm:mt-3">
            Available for iOS and Android. Use the same account for restaurant
            or supplier workspaces after verification.
          </p>
          <div className="mt-5 flex justify-center sm:mt-8">
            <StoreButtons size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
