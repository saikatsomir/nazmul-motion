export const PrivacyPolicy = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg,rgba(10, 6, 18, 1) 2%, rgba(25, 6, 51, 1) 43%, rgba(19, 3, 46, 1) 60%, rgba(10, 6, 18, 1) 100%)',
      }}
      className="relative min-h-screen py-16 px-4 md:px-20 lg:px-40 bg-[#0a0612] pt-52 pb-20 text-white overflow-hidden"
    >
      {/* Gradient Blurs */}
      {/* <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4107a4] opacity-20  filter blur-[100px] pointer-events-none"></div> */}
      {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4107a4] opacity-20  filter blur-[100px] pointer-events-none"></div> */}
      {/* <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full filter blur-3xl pointer-events-none"></div> */}

      <h1 className="relative text-4xl font-bold mb-8 text-center md:text-left z-10">
        Privacy Policy
      </h1>

      <p className="relative mb-6 z-10">
        <strong>Effective Date:</strong> November 17, 2025
      </p>

      <p className="relative mb-6 z-10">
        At <strong>Nazmul Motions</strong>, we value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains what information we collect, how we use it, and your rights
        regarding your information.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Information We Collect
      </h2>
      <ul className="relative list-disc list-inside mb-6 space-y-2 z-10">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and any other information you provide when contacting us or
          using our services.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browser type, IP address,
          device information, and website usage data to improve your experience.
        </li>
      </ul>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        How We Use Your Information
      </h2>
      <ul className="relative list-disc list-inside mb-6 space-y-2 z-10">
        <li>To provide and improve our services.</li>
        <li>To respond to your inquiries and provide customer support.</li>
        <li>
          To send updates, promotional materials, or other information related
          to our services (only if you have opted in).
        </li>
        <li>
          To monitor and analyze website usage to improve user experience.
        </li>
      </ul>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Sharing Your Information
      </h2>
      <p className="relative mb-6 z-10">
        We{' '}
        <strong>do not sell, trade, or rent your personal information</strong>{' '}
        to others. We may share your information in the following situations:
      </p>
      <ul className="relative list-disc list-inside mb-6 space-y-2 z-10">
        <li>
          With trusted service providers who help us operate our website and
          services.
        </li>
        <li>When required by law or legal processes.</li>
        <li>
          In connection with business transfers, such as a merger or
          acquisition.
        </li>
      </ul>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Cookies and Tracking
      </h2>
      <p className="relative mb-6 z-10">
        Our website may use cookies and similar technologies to enhance your
        browsing experience. You can control cookies through your browser
        settings, but some features of the site may not function properly
        without them.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Your Rights
      </h2>
      <ul className="relative list-disc list-inside mb-6 space-y-2 z-10">
        <li>Access and receive a copy of your personal information.</li>
        <li>Request correction or deletion of your personal information.</li>
        <li>Opt out of receiving promotional emails from us.</li>
      </ul>
      <p className="relative mb-6 z-10">
        To exercise your rights, please contact us at{' '}
        <strong>nazmulmotionbd@gmail.com</strong>.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Security
      </h2>
      <p className="relative mb-6 z-10">
        We take reasonable measures to protect your information from
        unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Third-Party Links
      </h2>
      <p className="relative mb-6 z-10">
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these external
        sites.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Changes to This Policy
      </h2>
      <p className="relative mb-6 z-10">
        We may update this Privacy Policy from time to time. The{' '}
        <strong>effective date</strong> will be updated whenever changes are
        made. We encourage you to review this policy periodically.
      </p>

      <h2 className="relative text-2xl font-semibold mt-8 mb-4 z-10">
        Contact Us
      </h2>
      <p className="relative z-10">
        If you have questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <p className="relative mt-2 mb-1 z-10">
        <strong>Email:</strong> nazmulmotionbd@gmail.com
      </p>
      <p className="relative z-10">
        <strong>Website:</strong> www.nazmulmotion.com
      </p>
    </div>
  );
};
