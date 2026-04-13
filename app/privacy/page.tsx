import type { Metadata } from "next";
import LegalLayout, { LegalTitle } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Homey",
  description: "How Homey collects, uses, and protects your personal information.",
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

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <LegalTitle plain="Privacy" accent="Policy" />
      <p className="text-lg text-stone-500 mb-2">
        <Strong>Homey — Student Housing Discovery</Strong>
      </p>
      <p className="text-sm text-stone-500 italic mb-10">
        <Strong>Last Updated:</Strong> March 3, 2026 &nbsp;|&nbsp; <Strong>Effective Date:</Strong> March 3, 2026
      </p>

      {/* Intro */}
      <div className="glass-card border-l-4 border-l-stone-800 p-6 mb-10">
        <P>
          Welcome to Homey (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your
          privacy and ensuring you understand how we collect, use, and safeguard your personal information when you use
          the Homey mobile application (&quot;App&quot;) and related services (collectively, the &quot;Service&quot;).
        </P>
        <p className="text-base text-stone-600 leading-relaxed">
          By using our Service, you agree to the collection and use of information in accordance with this Privacy
          Policy.
        </p>
      </div>

      <H2>1. Information We Collect</H2>

      <H3>1.1 Information You Provide to Us</H3>
      <P>
        <Strong>Account Information</Strong>
        <br />
        When you create an account, we collect:
      </P>
      <UL>
        <li>Email address (provided by Google or Apple during sign-in)</li>
        <li>Full name (provided by Google or Apple during sign-in)</li>
        <li>Profile photo (optional, uploaded by you or provided by your sign-in provider)</li>
      </UL>
      <p className="text-base text-stone-500 italic leading-relaxed mb-4">
        All account information (email, name, and profile data) is linked to your specific user identity to provide a
        personalized experience and facilitate landlord-renter communication.
      </p>

      <P>
        <Strong>Profile Information</Strong>
        <br />
        When you complete your profile, we may collect:
      </P>
      <UL>
        <li>Primary pursuit (student, graduate student, intern, employed, or other)</li>
        <li>Bio or personal description (optional)</li>
        <li>Renter tile information (optional profile visible to landlords)</li>
      </UL>

      <P>
        <Strong>Landlord Information</Strong>
        <br />
        If you register as a landlord, we additionally collect:
      </P>
      <UL>
        <li>Phone number</li>
        <li>Company name (optional)</li>
        <li>Business bio (optional)</li>
      </UL>

      <P>
        <Strong>User-Generated Content</Strong>
        <br />
        When you use our Service, we collect:
      </P>
      <UL>
        <li>Property listings you create (photos, descriptions, pricing, availability)</li>
        <li>Sublease listings (photos, videos, descriptions)</li>
        <li>Inquiry messages sent to landlords</li>
        <li>Saved properties and units</li>
      </UL>

      <H3>1.2 Information Collected Automatically</H3>
      <P>
        <Strong>Usage Data</Strong>
      </P>
      <UL>
        <li>Properties you view, save, and interact with</li>
        <li>Swipe actions (like, pass, dismiss)</li>
        <li>Filter preferences (price range, bedrooms, bathrooms, location preferences)</li>
        <li>Last active timestamp</li>
      </UL>

      <P>
        <Strong>Location Preferences</Strong>
        <br />
        We collect your campus selection preference to:
      </P>
      <UL>
        <li>Show properties near your selected university campus</li>
        <li>Sort properties by distance to your preferred campus</li>
      </UL>
      <P>
        We do NOT access your device&apos;s GPS or track your physical location. Distances are calculated from fixed
        campus coordinates to property addresses.
      </P>

      <H3>1.3 Information from Third Parties</H3>
      <P>
        <Strong>Authentication Providers</Strong>
        <br />
        When you sign in with Google or Apple, we receive:
      </P>
      <UL>
        <li>Your email address</li>
        <li>Your name</li>
        <li>Profile photo URL (if available from provider)</li>
        <li>A unique identifier from the provider</li>
      </UL>
      <P>We do NOT receive or store your Google or Apple account password.</P>

      <H2>2. How We Use Your Information</H2>

      <H3>2.1 Provide and Improve Our Service</H3>
      <UL>
        <li>Display rental property listings relevant to your preferences</li>
        <li>Enable you to save and organize properties you&apos;re interested in</li>
        <li>Calculate distances from selected campus to properties</li>
        <li>Connect renters with landlords through inquiries</li>
        <li>Enable landlords to view renter profiles and respond to inquiries</li>
        <li>Improve app functionality and user experience</li>
      </UL>

      <H3>2.2 Communication</H3>
      <UL>
        <li>Respond to your inquiries and support requests</li>
      </UL>

      <H3>2.3 Safety and Security</H3>
      <UL>
        <li>Protect against fraudulent or unauthorized activity</li>
        <li>Enforce our Terms of Service</li>
        <li>Comply with legal obligations</li>
      </UL>

      <H2>3. How We Share Your Information</H2>

      <H3>3.1 With Other Users</H3>
      <UL>
        <li>
          <Strong>Renter Profiles:</Strong> If you create a renter profile, landlords can view your profile information
          when you send an inquiry
        </li>
        <li>
          <Strong>Landlord Profiles:</Strong> Landlord contact information is displayed on their property listings
        </li>
        <li>
          <Strong>Property Listings:</Strong> Landlord-created listings are visible to all users
        </li>
      </UL>

      <H3>3.2 Service Providers</H3>
      <P>We share information with third-party service providers who help us operate our Service:</P>

      <div className="glass-card p-0 overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-stone-100/60 text-stone-700 uppercase text-xs tracking-wider">
              <th className="px-4 py-3 text-left border-b border-stone-200/60">Provider</th>
              <th className="px-4 py-3 text-left border-b border-stone-200/60">Purpose</th>
              <th className="px-4 py-3 text-left border-b border-stone-200/60">Data Shared</th>
            </tr>
          </thead>
          <tbody className="text-stone-600">
            {[
              ["Railway", "Cloud hosting and database", "All app data (encrypted)"],
              ["Railway Object Storage", "Photo and media storage", "Uploaded images and videos"],
              ["Google", "Authentication", "Email, name (OAuth flow only)"],
              ["Apple", "Authentication", "Email, name (OAuth flow only)"],
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/30 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 border-b border-stone-200/60">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>3.3 What We Do NOT Do</H3>
      <div className="rounded-xl bg-amber-50/60 border border-amber-200/50 p-5 my-6">
        <ul className="list-disc pl-6 space-y-2 text-stone-700">
          <li>We do NOT sell your personal information to third parties</li>
          <li>We do NOT share your information with data brokers</li>
          <li>We do NOT use your information for targeted advertising</li>
          <li>We do NOT track you across other apps or websites</li>
        </ul>
      </div>

      <H2>4. Data Retention</H2>
      <P>
        <Strong>Active Accounts:</Strong> Data retained while your account is active
      </P>
      <P>
        <Strong>Deleted Accounts:</Strong> Personal information deleted within 30 days; backup copies may persist up to
        90 days
      </P>

      <H2>5. Your Rights and Choices</H2>

      <H3>5.1 Access Your Data</H3>
      <P>View your personal information at any time in the App through Profile settings.</P>

      <H3>5.2 Update Your Data</H3>
      <P>Edit your profile and preferences at any time in the App.</P>

      <H3>5.3 Delete Your Account</H3>
      <P>Delete your account at any time:</P>
      <OL>
        <li>Go to Profile &gt; Preferences</li>
        <li>Tap &quot;Delete Account&quot;</li>
        <li>Confirm deletion</li>
      </OL>
      <P>
        When you delete your account, all your personal data is permanently removed. This action cannot be undone.
      </P>

      <H2>6. Data Security</H2>
      <P>We implement appropriate security measures including:</P>
      <UL>
        <li>
          <Strong>Encryption in Transit:</Strong> All data uses HTTPS/TLS encryption
        </li>
        <li>
          <Strong>Secure Authentication:</Strong> JWT tokens with short expiration times
        </li>
        <li>
          <Strong>OAuth Authentication:</Strong> Secure third-party authentication via Google and Apple Sign-In
        </li>
        <li>
          <Strong>Access Controls:</Strong> Restricted database access
        </li>
        <li>
          <Strong>Rate Limiting:</Strong> API protection against abuse
        </li>
      </UL>

      <H2>7. Children&apos;s Privacy</H2>
      <P>
        Homey is not intended for children under 18 years of age. We do not knowingly collect personal information from
        children under 18.
      </P>

      <H2>8. California Privacy Rights (CCPA)</H2>
      <P>California residents have specific rights including:</P>
      <UL>
        <li>
          <Strong>Right to Know:</Strong> Request disclosure of collected information
        </li>
        <li>
          <Strong>Right to Delete:</Strong> Request deletion of personal information
        </li>
        <li>
          <Strong>Right to Non-Discrimination:</Strong> We will not discriminate for exercising rights
        </li>
      </UL>
      <P>
        <Strong>We do NOT sell personal information as defined under the CCPA.</Strong>
      </P>

      <H2>9. European Privacy Rights (GDPR)</H2>
      <P>
        EEA/UK residents have additional rights including access, rectification, erasure, restriction, portability, and
        objection. Contact us to exercise these rights.
      </P>

      <H2>10. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. We will update the &quot;Last Updated&quot; date and may
        notify you of significant changes through the App or via email.
      </P>

      <H2>11. Contact Us</H2>
      <div className="glass-card p-6 mt-6 mb-4">
        <p className="text-base text-stone-700">
          <Strong>Email:</Strong> <MailLink email="joinhomeyapp@gmail.com" />
        </p>
      </div>
      <P>We will respond to your request within 30 days.</P>

      <div className="mt-16 pt-8 border-t border-stone-200/60 text-center text-sm text-stone-400 space-y-1">
        <p>&copy; 2026 Homey. All rights reserved.</p>
        <p>This Privacy Policy is effective as of March 3, 2026.</p>
      </div>
    </LegalLayout>
  );
}
