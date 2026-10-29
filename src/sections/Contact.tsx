import {FormEvent, useEffect, useState} from 'react';
import {CheckCircle2, Mail, MapPin, Phone, X} from 'lucide-react';
import {site} from '@/config/site';

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const empty: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(false), 3500);
    return () => window.clearTimeout(t);
  }, [toast]);

  const patch = (key: keyof FormState, value: string) => {
    setForm(f => ({...f, [key]: value}));
    setErrors(e => ({...e, [key]: undefined}));
  };

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!isEmail(form.email)) next.email = 'Enter a valid email.';
    if (!form.company.trim()) next.company = 'Company is required.';
    if (!form.message.trim()) next.message = 'Message is required.';
    else if (form.message.trim().length < 10) {
      next.message = 'Please write at least 10 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setForm(empty);
    setToast(true);
  };

  const field =
    'w-full rounded-2xl border border-sage-200 bg-white px-4 py-3 text-sm text-sage-900 outline-none transition placeholder:text-sage-400 focus:border-brand-orange focus:ring-2 focus:ring-terracotta-200 dark:border-sage-600 dark:bg-sage-900 dark:text-white dark:focus:ring-terracotta-800';

  return (
    <section id="contact" className="container-page py-10 sm:py-14 lg:py-20">
      <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            Contact
          </p>
          <h2 className="section-title mt-2">Talk to ScopsK</h2>
          <p className="section-sub">
            App Store reviewers and partners — reach us for support, demos, or
            account questions.
          </p>

          <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
            <li className="flex items-start gap-3 text-sm text-sage-700 dark:text-sage-200">
              <Mail className="mt-0.5 text-brand-orange" size={18} />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-sage-600 hover:text-brand-orange dark:text-sage-300">
                  {site.contactEmail}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-sage-700 dark:text-sage-200">
              <Phone className="mt-0.5 text-brand-orange" size={18} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sage-600 dark:text-sage-300">{site.phone}</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-sage-700 dark:text-sage-200">
              <MapPin className="mt-0.5 text-brand-orange" size={18} />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-sage-600 dark:text-sage-300">
                  {site.addressLine}
                </p>
                <p className="mt-1 text-sage-500 dark:text-sage-400">
                  {site.supportHours}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="card-surface p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-sage-500">
                Name *
              </span>
              <input
                className={field}
                value={form.name}
                onChange={e => patch('name', e.target.value)}
                autoComplete="name"
                placeholder="Your name"
              />
              {errors.name ? (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.name}
                </span>
              ) : null}
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-sage-500">
                Email *
              </span>
              <input
                className={field}
                type="email"
                value={form.email}
                onChange={e => patch('email', e.target.value)}
                autoComplete="email"
                placeholder="you@business.ae"
              />
              {errors.email ? (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.email}
                </span>
              ) : null}
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-sage-500">
                Company *
              </span>
              <input
                className={field}
                value={form.company}
                onChange={e => patch('company', e.target.value)}
                autoComplete="organization"
                placeholder="Restaurant or supplier name"
              />
              {errors.company ? (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.company}
                </span>
              ) : null}
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-sage-500">
                Phone
              </span>
              <input
                className={field}
                value={form.phone}
                onChange={e => patch('phone', e.target.value)}
                autoComplete="tel"
                placeholder="+971 …"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-sage-500">
                Message *
              </span>
              <textarea
                className={`${field} min-h-[120px] resize-y`}
                value={form.message}
                onChange={e => patch('message', e.target.value)}
                placeholder="How can we help?"
              />
              {errors.message ? (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.message}
                </span>
              ) : null}
            </label>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
            Send message
          </button>
        </form>
      </div>

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-20 z-[100] flex w-[min(92vw,22rem)] -translate-x-1/2 items-center gap-3 rounded-2xl border border-sage-200 bg-white px-4 py-3 shadow-card dark:border-sage-600 dark:bg-sage-800 sm:top-24">
          <CheckCircle2
            size={18}
            className="shrink-0 text-green-600 dark:text-green-400"
          />
          <p className="flex-1 text-sm font-semibold text-sage-900 dark:text-white">
            Thank you for contacting us
          </p>
          <button
            type="button"
            onClick={() => setToast(false)}
            className="grid h-7 w-7 place-items-center rounded-full text-sage-500 hover:bg-sage-50 dark:hover:bg-sage-700"
            aria-label="Dismiss">
            <X size={14} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
