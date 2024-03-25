import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="termsContainer">
        <br />
        <div className="terms-title">
          <h1>Privacy policy</h1>
        </div>
        <br />
        <br />
        <div className="terms-body">
          <p
            style={{
              color: "#008000",
              backgroundColor: "#fff2a8",
              fontWeight: "bold",
            }}
          >
            [NOTE TO MERCHANT:{" "}
            <span
              style={{
                color: "#008000",
                backgroundColor: "#fff2a8",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              This is a template Privacy Policy designed to cover your
              collection, use, and disclosure of personal information about
              visitors and customers of your Shopify-powered Site. Please review
              and customize the content so that it is tailored to your store and
              business practices regarding how you collect, use, and disclose
              personal data. For example, you may need to update the template
              content if: you are based in certain jurisdictions (particularly
              to reflect certain disclosures that are required under GDPR), you
              collect information from other sources like third parties or
              offline; you disclose information to additional service providers
              or business partners; or you add third-party cookies or other
              analytics tools.
              <u>
                Please also remember to delete all "Note to Merchant" drafting
                notes prior to publishing.]
              </u>
              <br />
              <br /> This template is not legal advice, and you are solely
              responsible for ensuring that you meet your obligations under
              applicable laws. As privacy laws are constantly evolving, you
              should regularly review your privacy notice to ensure that it is
              compliant with updated laws and regulation and that it accurately
              reflects current data handling practices. We recommend that you
              consult a lawyer as needed.{" "}
            </span>
          </p>
          <br />
          <br />

          <p>
            Last updated: <span style={{ color: "#008000" }}>[Date]</span>
            <br />
            <br />
            This Privacy Policy describes how COOL CLOTH (the{" "}
            <strong>"Site"</strong>, <strong>"we"</strong>,<strong>"us"</strong>
            , or <strong>"our"</strong>) collects, uses, and discloses your
            personal information when you visit, use our services, or make a
            purchase from coolcloth.in (the <strong>"Site"</strong>) or
            otherwise communicate with us (collectively, the
            <strong>"Services"</strong>). For purposes of this Privacy Policy,
            <strong>"you"</strong> and <strong>"your"</strong> means you as the user of the Services, whether you
            are a customer, website visitor, or another individual whose
            information we have collected pursuant to this Privacy Policy.
            <br />
            <br />
            Please read this Privacy Policy carefully. By using and accessing
            any of the Services, you agree to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            If you do not agree to this Privacy Policy, please do not use or
            access any of the Services.
          </p>
          <br />
          <br />
          <h3 style={{ fontWeight: "bold" }}>Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the "Last updated" date and take any other steps
            required by applicable law.
          </p>
          <br />
          <br />
          <h3 style={{ fontWeight: "bold" }}>Third Party Websites and Links</h3>
          <p>
            Our Site may provide links to websites or other online platforms
            operated by third parties. If you follow links to sites not
            affiliated or controlled by us, you should review their privacy and
            security policies and other terms and conditions. We do not
            guarantee and are not responsible for the privacy or security of
            such sites, including the accuracy, completeness, or reliability of
            information found on these sites. Information you provide on public
            or semi-public venues, including information you share on
            third-party social networking platforms may also be viewable by
            other users of the Services and/or users of those third-party
            platforms without limitation as to its use by us or by a third
            party. Our inclusion of such links does not, by itself, imply any
            endorsement of the content on such platforms or of their owners or
            operators, except as disclosed on the Services.
          </p>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
