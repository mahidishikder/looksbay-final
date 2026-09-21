import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Looksbay digital template sales and Squarespace website development services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These Terms of Service govern purchases of Looksbay Squarespace 7.1 templates and custom Squarespace web design work for clients worldwide."
      lastUpdated="September 2026"
    >
      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">1. Scope of services</h2>
        <p>
          Looksbay sells premium Squarespace 7.1 digital website templates and provides custom Squarespace web
          development and design services for businesses, founders, and creatives worldwide. Our services may include
          website design, template customization, development, optimization, content setup, integrations, and related
          consulting support.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">2. Template ownership and intellectual property</h2>
        <p>
          All template content, structure, design files, imagery, code, written copy, and other intellectual property
          included in Looksbay digital products are owned by Looksbay unless otherwise expressly stated. Customers are
          granted a license to use purchased templates for their own website projects in accordance with the purchase
          terms provided at the time of sale. Template files may not be redistributed, resold, or used as the basis
          for competing template products without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">3. Service delivery</h2>
        <p>
          For custom Squarespace development services, project scope, milestones, communication expectations, timelines,
          and pricing are defined in the agreed project contract or proposal. Looksbay will complete work in good faith
          according to the agreed specifications and will communicate any material changes that may affect scope, price,
          or delivery schedule.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">4. Business information</h2>
        <p>
          Looksbay operates globally as a sole trader based in Bangladesh. Services and digital product sales are
          provided internationally, and customers agree that any order or project engagement is governed by the laws of
          Bangladesh, unless otherwise required by the applicable jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">5. Client responsibilities</h2>
        <p>
          Clients are responsible for providing accurate information, timely approvals, required content, branding assets,
          account access, and any third-party platform permissions necessary for project completion. Delays caused by
          missing information, late feedback, or unavailable access may affect project timing and associated fees.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">6. Payment and order acceptance</h2>
        <p>
          Orders and service agreements are accepted when payment is received or when a written contract is signed and
          approved. Looksbay may decline or cancel any order or project for reasons including, but not limited to,
          incomplete information, suspected fraud, or disagreement with service scope or payment terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">7. Limitation of liability</h2>
        <p>
          Looksbay provides services and templates in good faith and aims to deliver high-quality work. However, we do not
          guarantee specific commercial outcomes, rankings, or performance results from a website, template, or marketing
          initiative. Our total liability for any claim is limited to the fees actually paid for the relevant product or
          service, unless otherwise required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-black tracking-tight text-[#0F0F0F]">8. Contact</h2>
        <p>
          For any questions about these Terms of Service, template licensing, or project contracts, please contact
          Looksbay at contact@looksbay.com.
        </p>
      </section>
    </LegalPage>
  );
}
