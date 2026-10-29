import {site} from '@/config/site';
import {LegalH2, LegalLayout} from '@/components/LegalLayout';

export function AccountDeletionPage() {
  return (
    <LegalLayout title="Account deletion" updated="29 October 2026">
      <p>
        App Store and Play Store policies require a clear path to delete an
        account. Use the steps below for ScopsK.
      </p>

      <LegalH2>In the mobile app</LegalH2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Sign in to ScopsK.</li>
        <li>Open Account → Settings (or Danger zone / Delete account).</li>
        <li>Confirm deletion when prompted.</li>
      </ol>

      <LegalH2>By email</LegalH2>
      <p>
        Email{' '}
        <a
          className="font-semibold text-brand-orange"
          href={`mailto:${site.supportEmail}?subject=Account%20deletion%20request`}>
          {site.supportEmail}
        </a>{' '}
        from your registered address with subject “Account deletion request”
        and include your business name and registered phone if available.
      </p>

      <LegalH2>What we delete</LegalH2>
      <p>
        We delete or anonymise personal profile data associated with your user
        account. Certain transaction records may be retained where required for
        tax, fraud prevention, or legal compliance, as described in our Privacy
        Policy.
      </p>
    </LegalLayout>
  );
}
