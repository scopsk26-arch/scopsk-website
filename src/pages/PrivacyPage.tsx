import {site} from '@/config/site';
import {LegalH2, LegalLayout} from '@/components/LegalLayout';

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="29 October 2026">
      <p>
        This Privacy Policy describes how {site.legalName} (“ScopsK”, “we”,
        “us”) collects, uses, and shares information when you use the ScopsK
        mobile applications and related websites (the “Services”). This page is
        provided to support App Store and Play Store review and transparency
        requirements.
      </p>

      <LegalH2>1. Information we collect</LegalH2>
      <p>We may collect:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Account details such as name, email, phone number, and business
          profile information.
        </li>
        <li>
          KYC / verification documents you upload (trade licence, VAT, and
          related files).
        </li>
        <li>
          Transaction and order data (RFQs, quotations, purchase orders,
          invoices, payments, deliveries).
        </li>
        <li>
          Device and usage data needed to operate, secure, and improve the
          Services.
        </li>
      </ul>

      <LegalH2>2. How we use information</LegalH2>
      <p>We use information to:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Provide marketplace features for restaurants and suppliers.</li>
        <li>Verify businesses and prevent fraud or abuse.</li>
        <li>Process payments and fulfil orders.</li>
        <li>Send service notices, support replies, and product updates.</li>
        <li>Comply with legal obligations in the UAE and other applicable law.</li>
      </ul>

      <LegalH2>3. Sharing</LegalH2>
      <p>
        We share information with counterparties as needed to complete
        procurement workflows (for example, order and delivery details between a
        restaurant and a supplier). We may use trusted processors for hosting,
        analytics, communications, and payments. We do not sell personal
        information.
      </p>

      <LegalH2>4. Retention & security</LegalH2>
      <p>
        We retain information for as long as needed to operate the Services,
        meet legal requirements, and resolve disputes. We apply administrative
        and technical safeguards appropriate to the sensitivity of the data.
      </p>

      <LegalH2>5. Your choices</LegalH2>
      <p>
        You may request access, correction, or deletion of your account data by
        contacting {site.supportEmail}. Account deletion guidance is also
        available on our{' '}
        <a className="font-semibold text-brand-orange" href="/account-deletion">
          Account deletion
        </a>{' '}
        page.
      </p>

      <LegalH2>6. Contact</LegalH2>
      <p>
        Privacy questions: {site.supportEmail}
        <br />
        {site.addressLine}
      </p>
    </LegalLayout>
  );
}
