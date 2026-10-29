import {site} from '@/config/site';
import {LegalH2, LegalLayout} from '@/components/LegalLayout';

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="29 October 2026">
      <p>
        These Terms of Service (“Terms”) govern access to and use of the ScopsK
        platform operated by {site.legalName}. By creating an account or using
        the Services, you agree to these Terms.
      </p>

      <LegalH2>1. The Services</LegalH2>
      <p>
        ScopsK provides a B2B marketplace that helps restaurants request quotes
        and purchase supplies, and helps suppliers respond, fulfil, and get
        paid. Features may include catalogues, RFQs, quotations, purchase
        orders, payments, deliveries, messaging, and KYC verification.
      </p>

      <LegalH2>2. Eligibility & accounts</LegalH2>
      <p>
        You must be authorised to act for a business. You are responsible for
        accurate registration details, safeguarding credentials, and activity
        under your account. We may require document verification before
        unlocking ordering or selling features.
      </p>

      <LegalH2>3. Marketplace conduct</LegalH2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Provide truthful product, pricing, and delivery information.</li>
        <li>Honour awarded quotes and purchase orders in good faith.</li>
        <li>Do not misuse the platform for fraud, spam, or unlawful goods.</li>
        <li>
          Comply with applicable food safety, tax, and commercial regulations.
        </li>
      </ul>

      <LegalH2>4. Fees & payments</LegalH2>
      <p>
        Platform commission and payment fees may apply as disclosed in-app.
        Settlement timelines depend on payment method and verification status.
        Chargebacks or disputes may affect account privileges.
      </p>

      <LegalH2>5. Content & licences</LegalH2>
      <p>
        You retain ownership of content you upload. You grant ScopsK a licence
        to host and display that content as needed to operate the Services. Do
        not upload content you lack rights to share.
      </p>

      <LegalH2>6. Disclaimers</LegalH2>
      <p>
        The Services are provided on an “as available” basis. ScopsK is not a
        party to the underlying supply contract between restaurant and supplier
        except where expressly stated for payment facilitation.
      </p>

      <LegalH2>7. Limitation of liability</LegalH2>
      <p>
        To the fullest extent permitted by law, ScopsK is not liable for
        indirect or consequential damages arising from use of the Services.
        Aggregate liability is limited to fees paid to ScopsK in the three
        months preceding the claim.
      </p>

      <LegalH2>8. Termination</LegalH2>
      <p>
        You may stop using the Services at any time. We may suspend or terminate
        accounts that violate these Terms or create risk to other users.
      </p>

      <LegalH2>9. Contact</LegalH2>
      <p>
        {site.supportEmail}
        <br />
        {site.addressLine}
      </p>
    </LegalLayout>
  );
}
