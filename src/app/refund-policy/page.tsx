import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for Looksbay template sales and custom Squarespace services.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="This Refund Policy explains how Looksbay handles digital template purchases and custom web development services."
      lastUpdated="September 2026"
    >
      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">1. Digital template sales</h2>
        <p>
          Looksbay sells downloadable Squarespace 7.1 digital templates. Because these products are delivered instantly and
          are available for immediate use after purchase, all digital product sales are final and non-refundable once the
          product has been transferred to the customer. This includes purchases that are downloaded, accessed, or activated.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">2. Custom web development services</h2>
        <p>
          For custom website design and development services, refunds or cancellations are handled in accordance with the
          agreed project contract, proposal, or service agreement. If a project has not yet begun or has not yet entered the
          kick-off phase, cancellation terms may be applied as specified in the contract. Once project kick-off has begun,
          refund eligibility depends on the specific agreement between Looksbay and the client.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">3. Exceptions</h2>
        <p>
          The company may consider exceptional cases, such as duplicate purchases, failed delivery, or a clear transaction
          error, at its sole discretion. Any exception must be requested in writing through the support channel and will be
          reviewed on a case-by-case basis.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">4. Support and disputes</h2>
        <p>
          If you believe there is an issue with a template delivery or a service engagement, please contact us at
          contact@looksbay.com with your order details and a clear explanation. We will review the matter and respond as
          promptly as possible.
        </p>
      </section>
    </LegalPage>
  );
}
