import type { Metadata } from "next";
import LegalLayout, { LegalTitle } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Homey",
  description: "The legal agreement governing your use of Homey.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-stone-800 mt-14 mb-5 pb-2 border-b border-stone-200/60">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-stone-700 mt-8 mb-3">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-stone-600 leading-relaxed mb-4">{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 text-stone-600 mb-4">{children}</ul>
);

const OL = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal pl-6 space-y-2 text-stone-600 mb-4">{children}</ol>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-stone-800 font-semibold">{children}</strong>
);

const MailLink = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="text-stone-800 underline underline-offset-2 hover:text-stone-600 transition-colors"
  >
    {email}
  </a>
);

const LegalCaps = ({ children }: { children: React.ReactNode }) => (
  <div className="uppercase text-xs tracking-wider text-stone-600 leading-relaxed space-y-3 my-6 rounded-xl bg-white/30 backdrop-blur-sm border border-stone-200/60 p-5">
    {children}
  </div>
);

export default function TermsPage() {
  return (
    <LegalLayout>
      <LegalTitle plain="Terms of" accent="Service" />
      <p className="text-lg text-stone-500 mb-2">
        <Strong>Homey — Student Housing Discovery</Strong>
      </p>
      <p className="text-sm text-stone-500 italic mb-10">
        <Strong>Last Updated:</Strong> March 3, 2026 &nbsp;|&nbsp; <Strong>Effective Date:</Strong> March 3, 2026
      </p>

      {/* Intro */}
      <div className="glass-card border-l-4 border-l-stone-800 p-6 mb-10">
        <P>
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you,&quot;
          &quot;your,&quot; or &quot;User&quot;) and Homey (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
          &quot;Company&quot;) governing your access to and use of the Homey mobile application (&quot;App&quot;) and
          all related services (collectively, the &quot;Service&quot;).
        </P>
        <p className="text-base text-stone-700 leading-relaxed">
          <Strong>
            By creating an account, accessing, or using our Service, you agree to be bound by these Terms. If you do not
            agree to these Terms, you may not access or use the Service.
          </Strong>
        </p>
      </div>

      <H2>1. Eligibility</H2>

      <H3>1.1 Age Requirement</H3>
      <div className="rounded-xl bg-stone-100 border border-stone-300 p-5 my-4 text-stone-800">
        <p className="leading-relaxed">
          You must be at least <Strong>18 years of age</Strong> to use the Service. By using the Service, you represent
          and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
        </p>
      </div>

      <H3>1.2 Account Requirements</H3>
      <P>
        To access certain features, you must create an account using Sign in with Google or Sign in with Apple. You
        agree to:
      </P>
      <UL>
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Promptly update your information if it changes</li>
        <li>Accept responsibility for all activities under your account</li>
        <li>Notify us immediately of any unauthorized access</li>
      </UL>

      <H3>1.3 One Account Per Person</H3>
      <P>
        You may only maintain one account. Creating multiple accounts may result in termination of all accounts.
      </P>

      <H2>2. The Service</H2>

      <H3>2.1 Description</H3>
      <P>
        Homey is a mobile platform that connects renters with rental property listings near university campuses,
        specifically targeting students, graduate students, interns, and working professionals near university campuses
        across the United States.
      </P>
      <UL>
        <li>
          <Strong>For Renters:</Strong> Browse, search, filter, and save rental property listings; create renter
          profiles; send inquiries to landlords
        </li>
        <li>
          <Strong>For Landlords:</Strong> Create and manage property listings; receive and respond to renter inquiries;
          view renter profiles
        </li>
      </UL>

      <H3>2.2 Platform Only</H3>
      <div className="rounded-xl bg-amber-50/60 border border-amber-200/50 p-5 my-6 flex gap-3">
        <svg
          className="w-5 h-5 text-stone-700 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p className="text-stone-700 leading-relaxed">
          <Strong>Important:</Strong> Homey is a platform that facilitates connections between renters and landlords.
          We are NOT a party to any rental agreement, lease, or transaction between users.
        </p>
      </div>
      <P>We do not:</P>
      <UL>
        <li>Own, manage, or control any properties listed on the Service</li>
        <li>Verify the accuracy of property listings</li>
        <li>Guarantee the availability, condition, or legality of any property</li>
        <li>Verify the identity, background, or qualifications of users</li>
        <li>Provide legal, financial, or real estate advice</li>
        <li>Act as a real estate agent, broker, or property manager</li>
      </UL>

      <H3>2.3 No Guarantee</H3>
      <P>We do not guarantee that you will find suitable housing or tenants through the Service.</P>

      <H2>3. User Conduct</H2>

      <H3>3.1 Acceptable Use</H3>
      <P>
        You agree to use the Service only for lawful purposes. You agree <Strong>NOT</Strong> to:
      </P>

      <P>
        <Strong>General Prohibitions</Strong>
      </P>
      <UL>
        <li>Violate any applicable law, regulation, or third-party rights</li>
        <li>Use the Service for any fraudulent or deceptive purpose</li>
        <li>Impersonate any person or entity</li>
        <li>Interfere with or disrupt the Service</li>
        <li>Attempt to gain unauthorized access to any part of the Service</li>
        <li>Use automated means (bots, scrapers) to access the Service</li>
        <li>Collect or harvest user information without consent</li>
      </UL>

      <P>
        <Strong>Content Prohibitions</Strong>
      </P>
      <UL>
        <li>Post false, inaccurate, or misleading information</li>
        <li>Post discriminatory content based on protected characteristics</li>
        <li>Post content that is defamatory, obscene, or offensive</li>
        <li>Post content that infringes intellectual property rights</li>
        <li>Post spam, advertisements, or promotional materials</li>
      </UL>

      <P>
        <Strong>Listing-Specific Prohibitions</Strong>
      </P>
      <UL>
        <li>Post listings for properties you do not own or have authority to rent</li>
        <li>Post listings with false or misleading prices, photos, or descriptions</li>
        <li>Post listings for illegal rental arrangements</li>
      </UL>

      <H3>3.2 Fair Housing Compliance</H3>
      <div className="rounded-xl bg-stone-100 border border-stone-300 p-5 my-6">
        <p className="text-stone-800 leading-relaxed">
          <Strong>Fair Housing Act Compliance Required:</Strong> All users must comply with applicable fair housing
          laws. Landlords may not discriminate in housing based on race, color, religion, national origin, sex,
          familial status, or disability. Violations may result in immediate termination and reporting to appropriate
          authorities.
        </p>
      </div>

      <H3>3.3 Reporting Violations</H3>
      <P>
        If you encounter content or behavior that violates these Terms, please report it to{" "}
        <MailLink email="joinhomeyapp@gmail.com" />.
      </P>

      <H2>4. User Content</H2>

      <H3>4.1 Your Content</H3>
      <P>
        &quot;User Content&quot; means any content you submit through the Service, including profile information,
        property listings, photos, videos, and messages.
      </P>

      <H3>4.2 Ownership</H3>
      <P>
        You retain ownership of your User Content. By submitting User Content, you grant Homey a worldwide,
        non-exclusive, royalty-free license to use, reproduce, modify, distribute, and display your User Content in
        connection with operating the Service.
      </P>

      <H3>4.3 Representations</H3>
      <P>By submitting User Content, you represent and warrant that:</P>
      <UL>
        <li>You own or have the necessary rights to submit the content</li>
        <li>The content does not infringe any third-party rights</li>
        <li>The content is accurate and not misleading</li>
        <li>The content complies with these Terms and applicable laws</li>
      </UL>

      <H3>4.4 Content Moderation</H3>
      <P>
        We reserve the right to review, remove, or modify User Content that violates these Terms, and to suspend or
        terminate accounts for violations.
      </P>
      <P>
        <Strong>
          Homey maintains a zero-tolerance policy regarding objectionable content or abusive users. We will act on
          reports within 24 hours by removing the content and/or ejecting the user who provided the content.
        </Strong>
      </P>

      <H2>5. Property Listings</H2>

      <H3>5.1 External Listings</H3>
      <P>
        Some property listings are aggregated from third-party sources. We do not verify, endorse, or guarantee the
        accuracy of these listings.
      </P>

      <H3>5.2 Your Responsibility</H3>
      <P>Before entering into any rental agreement, you should:</P>
      <UL>
        <li>Visit the property in person</li>
        <li>Verify the landlord&apos;s identity and authority</li>
        <li>Review the lease agreement carefully</li>
        <li>Conduct your own due diligence</li>
        <li>Consult with a legal professional if needed</li>
      </UL>

      <H2>6. Transactions Between Users</H2>

      <H3>6.1 Independent Transactions</H3>
      <P>
        Any transactions, agreements, or communications between users (including rental agreements, deposits, and
        payments) are solely between those users. <Strong>Homey is not a party to these transactions.</Strong>
      </P>

      <H3>6.2 Disputes</H3>
      <P>
        We are not responsible for resolving disputes between users. If you have a dispute with another user, first try
        to resolve it directly.
      </P>

      <H3>6.3 No Liability</H3>
      <P>
        We are not liable for any damages arising from transactions between users, including property damage, personal
        injury, financial losses, or fraud.
      </P>

      <H2>7. Intellectual Property</H2>

      <H3>7.1 Our Intellectual Property</H3>
      <P>
        The Service, including its design, features, functionality, and content (excluding User Content), are owned by
        Homey or our licensors.
      </P>

      <H3>7.2 Limited License</H3>
      <P>
        We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for
        personal, non-commercial purposes.
      </P>

      <H3>7.3 Restrictions</H3>
      <P>
        You may not copy, modify, distribute, reverse engineer, or create derivative works based on the Service.
      </P>

      <H2>8. Disclaimers</H2>
      <LegalCaps>
        <p>
          <Strong>8.1 &quot;AS IS&quot; Basis</Strong>
        </p>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
          express or implied, including but not limited to warranties of merchantability, fitness for a particular
          purpose, non-infringement, accuracy or completeness of content, or availability.
        </p>
        <p>
          <Strong>8.2 No Warranty on Listings</Strong>
        </p>
        <p>
          We do not warrant the accuracy, completeness, legality, or availability of any property listing. We do not
          verify properties, landlords, or renters.
        </p>
        <p>
          <Strong>8.3 No Professional Advice</Strong>
        </p>
        <p>
          The Service does not provide legal, financial, or real estate advice. Consult appropriate professionals
          before making housing decisions.
        </p>
      </LegalCaps>

      <H2>9. Limitation of Liability</H2>
      <LegalCaps>
        <p>
          <Strong>9.1 Exclusion of Damages</Strong>
        </p>
        <p>
          To the maximum extent permitted by law, Homey shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits, data, use, goodwill, or other intangible losses.
        </p>
        <p>
          <Strong>9.2 Cap on Liability</Strong>
        </p>
        <p>
          Our total liability for any claims shall not exceed the greater of: (a) the amount you paid to us in the 12
          months preceding the claim, or (b) one hundred dollars ($100).
        </p>
      </LegalCaps>

      <H2>10. Indemnification</H2>
      <P>You agree to indemnify and hold harmless Homey from any claims, damages, losses, or expenses arising from:</P>
      <UL>
        <li>Your use of the Service</li>
        <li>Your User Content</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any third-party rights or applicable law</li>
        <li>Any dispute between you and another user</li>
      </UL>

      <H2>11. Account Termination</H2>

      <H3>11.1 Termination by You</H3>
      <P>You may delete your account at any time:</P>
      <OL>
        <li>Go to Profile &gt; Preferences</li>
        <li>Tap &quot;Delete Account&quot;</li>
        <li>Confirm deletion</li>
      </OL>
      <P>Account deletion is permanent and cannot be undone.</P>

      <H3>11.2 Termination by Us</H3>
      <P>
        We may suspend or terminate your account at any time for violations of these Terms, fraudulent activity,
        conduct harmful to others, or other reasons at our discretion.
      </P>

      <H2>12. Dispute Resolution</H2>

      <H3>12.1 Informal Resolution</H3>
      <P>
        Before filing any legal action, you agree to contact us at <MailLink email="joinhomeyapp@gmail.com" /> and
        attempt to resolve the dispute informally for at least 30 days.
      </P>

      <H3>12.2 Governing Law</H3>
      <P>
        These Terms shall be governed by the laws of the <Strong>State of Illinois</Strong>, without regard to conflict
        of law provisions.
      </P>

      <H3>12.3 Jurisdiction</H3>
      <P>
        You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located in{" "}
        <Strong>Cook County, Illinois</Strong>.
      </P>

      <H3>12.4 Class Action Waiver</H3>
      <LegalCaps>
        <p>
          You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a
          class, consolidated, or representative action.
        </p>
      </LegalCaps>

      <H2>13. General Provisions</H2>
      <UL>
        <li>
          <Strong>Entire Agreement:</Strong> These Terms and our Privacy Policy constitute the entire agreement between
          you and Homey
        </li>
        <li>
          <Strong>Severability:</Strong> If any provision is unenforceable, the remaining provisions continue in effect
        </li>
        <li>
          <Strong>Waiver:</Strong> Our failure to enforce any provision is not a waiver
        </li>
        <li>
          <Strong>Assignment:</Strong> You may not assign these Terms without our consent
        </li>
      </UL>

      <H2>14. Additional Terms for Landlords</H2>
      <P>If you post property listings, you additionally agree to:</P>
      <UL>
        <li>Have legal authority to list each property</li>
        <li>Provide accurate and complete listing information</li>
        <li>Promptly update or remove listings when no longer available</li>
        <li>Comply with all applicable fair housing laws</li>
      </UL>

      <H2>15. Additional Terms for Renters</H2>
      <P>If you use the Service as a renter, you acknowledge:</P>
      <UL>
        <li>You are responsible for independently verifying all listing information</li>
        <li>We do not guarantee you will find suitable housing</li>
        <li>Any rental agreements are directly between you and the landlord</li>
      </UL>

      <H2>16. Contact Information</H2>
      <div className="glass-card p-6 mt-6 mb-4">
        <p className="text-base text-stone-700">
          <Strong>Email:</Strong> <MailLink email="joinhomeyapp@gmail.com" />
        </p>
      </div>

      <H2>17. Apple App Store Terms</H2>
      <P>
        You acknowledge that these Terms are between you and Homey only, and not with Apple. Apple has no obligation to
        furnish any maintenance or support services for the App. In the event of any failure of the App to conform to
        any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App to
        you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever
        with respect to the App. Apple is not responsible for addressing any claims by you or any third party relating
        to the App or your possession and/or use of the App.
      </P>

      <div className="mt-16 pt-8 border-t border-stone-200/60 text-center text-sm text-stone-400 space-y-1">
        <p>&copy; 2026 Homey. All rights reserved.</p>
        <p>These Terms of Service are effective as of March 3, 2026.</p>
        <p className="italic">
          By using the Homey Service, you acknowledge that you have read, understood, and agree to be bound by these
          Terms of Service.
        </p>
      </div>
    </LegalLayout>
  );
}
