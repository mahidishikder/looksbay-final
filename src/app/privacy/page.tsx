import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Looksbay template sales and custom Squarespace web development services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how Looksbay handles information collected through template purchases, service inquiries, project work, and customer support."
      lastUpdated="September 2026"
    >
      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">1. Information we collect</h2>
        <p>
          Looksbay may collect customer email addresses, billing names, order details, project-related information, and any
          additional information shared through contact forms, project inquiries, or service communications. This information
          is collected only to process template purchases, deliver services, and provide customer support.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">2. How we use personal information</h2>
        <p>
          We use customer data to complete order processing, deliver digital products or custom web development work,
          prepare invoices, provide support, communicate project progress, and maintain records related to service
          delivery. We do not use customer information for unrelated marketing purposes unless we have explicit consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">3. Payment processing</h2>
        <p>
          Payments for template purchases and custom services are securely handled by third-party payment processors,
          including Paddle and Lemon Squeezy. Looksbay does not store credit card numbers or other sensitive financial
          data on our servers. Any financial information is processed directly by these trusted payment providers in
          accordance with their own privacy and security policies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">4. Data sharing</h2>
        <p>
          We may share information with trusted service providers only where necessary to complete order processing,
          provide website work, manage customer support, or fulfill legal obligations. We do not sell customer data.
          Information may also be disclosed if required by law, a court order, or a regulatory authority.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">5. Security</h2>
        <p>
          Looksbay uses reasonable administrative, technical, and organizational measures to protect personal data in our
          possession. However, no electronic transmission or storage system is completely secure, and we cannot guarantee
          absolute security against all potential threats.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">6. Retention</h2>
        <p>
          We retain information only for as long as necessary to fulfill the purposes described in this policy, manage
          customer support, satisfy legal or accounting obligations, and protect against disputes or claims.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">7. Your rights</h2>
        <p>
          If you would like to access, correct, update, or delete information we hold about you, or if you have questions
          about this Privacy Policy, please contact us at contact@looksbay.com. We will respond in accordance with
          applicable privacy laws and reasonable business practices.
        </p>
      </section>
    </LegalPage>
  );
}
