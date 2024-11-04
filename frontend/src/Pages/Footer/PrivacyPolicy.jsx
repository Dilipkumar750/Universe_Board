
const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '60%',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '16px',
  };

  const sectionStyle = {
    marginBottom: '12px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Privacy Policy for Universal Educational Visuals</h2>

      <div style={sectionStyle}>
        Universal Educational Visuals respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you interact with us.
      </div>

      <div style={sectionStyle}>
        <strong>1. Information We Collect</strong>
        <p>
          We collect personal information that you provide, such as your name, contact details, and company information when you reach out to us or use our services. We may also collect technical data like IP addresses and usage patterns to improve our website and services.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>2. How We Use Your Information</strong>
        <p>
          We use the collected information to:
          <ul>
            <li>Process orders and provide our services</li>
            <li>Communicate with you regarding inquiries or service updates</li>
            <li>Improve and personalize our offerings</li>
            <li>Fulfill legal and regulatory obligations</li>
          </ul>
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>3. Sharing Your Information</strong>
        <p>
          Your information may be shared with trusted third parties, such as service providers, to help us deliver our services. We may also disclose your information when legally required.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>4. Data Security</strong>
        <p>
          We employ reasonable security measures to protect your information against unauthorized access, alteration, and misuse. However, please be aware that no method of electronic storage is 100% secure.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>5. Your Rights</strong>
        <p>
          You may have rights regarding your personal data, such as requesting access, correction, or deletion of your information. To exercise these rights, please contact us at:
          <br />
          <strong>Phone:</strong> +91 80489 55493
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
