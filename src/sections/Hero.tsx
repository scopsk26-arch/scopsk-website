import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {Logo} from '@/components/Logo';
import {StoreButtons} from '@/components/StoreButtons';
import {site} from '@/config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,87,34,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(255,235,59,0.12),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(255,87,34,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(255,235,59,0.08),_transparent_50%)]" />

      <div className="container-page relative grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-20">
        <motion.div
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.45}}>
          <div className="mb-6">
            <Logo className="h-14 w-auto sm:h-16" to="/" />
          </div>
          <p className="mb-3 inline-flex items-center rounded-full border border-terracotta-200 bg-terracotta-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-terracotta-700 dark:border-terracotta-700 dark:bg-terracotta-900/40 dark:text-terracotta-200">
            B2B procurement marketplace
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-sage-900 sm:text-5xl lg:text-[3.4rem] dark:text-white">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sage-600 sm:text-lg dark:text-sage-300">
            Connect restaurants and suppliers with smart RFQs, ranked quotes,
            in-app payments, and live delivery — built for kitchens that move
            fast.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
            <StoreButtons size="lg" />
            <a
              href="#contact"
              className="btn-secondary w-fit">
              Request a demo
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.12}}
          className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-terracotta-400/30 via-brand-yellow/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-sage-900 bg-sage-900 p-5 shadow-pop dark:border-brand-orange">
            <div className="rounded-2xl bg-white p-4 dark:bg-sage-800">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-sage-900 dark:text-white">
                    Good evening
                  </p>
                  <p className="text-xs text-sage-500 dark:text-sage-300">
                    Ready to order something delicious?
                  </p>
                </div>
                <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-[10px] font-extrabold text-sage-900">
                  LIVE
                </span>
              </div>
              <div className="space-y-3">
                {[
                  {t: 'Raise RFQ', s: 'Smart catalogue · 45s avg'},
                  {t: 'Compare top 3 quotes', s: 'Price · rating · on-time'},
                  {t: 'Pay in-app', s: 'Card · transfer · credit'},
                ].map(row => (
                  <div
                    key={row.t}
                    className="flex items-center justify-between rounded-2xl border border-sage-100 bg-sage-50 px-4 py-3 dark:border-sage-600 dark:bg-sage-900">
                    <div>
                      <p className="text-sm font-bold text-sage-900 dark:text-white">
                        {row.t}
                      </p>
                      <p className="text-xs text-sage-500 dark:text-sage-400">
                        {row.s}
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-gradient-to-r from-terracotta-500 to-terracotta-700 px-4 py-3 text-white">
                <p className="text-xs font-semibold opacity-90">This week</p>
                <p className="font-display text-xl font-extrabold">
                  18% avg saving
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
