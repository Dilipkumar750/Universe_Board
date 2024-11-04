
const TermsAndConditions = () => {
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

  const headingStyle = {
    fontSize: '20px',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  };

  const serialNumberStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
    color: '#333',
  };

  let counter = 1;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Terms and Conditions for Universal Educational Visuals</h1>
      <p style={sectionStyle}>
        Welcome to the website of Universal Educational Visuals. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms.
      </p>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Acceptance of Terms
        </h2>
        <p style={sectionStyle}>
          By using our website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Services
        </h2>
        <p style={sectionStyle}>
          Universal Educational Visuals provides [describe services, e.g., educational products, classroom visuals, etc.]. We reserve the right to modify or discontinue any part of our services at any time.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> User Responsibilities
        </h2>
        <p style={sectionStyle}>
          You agree to:
          <ul>
            <li>Provide accurate and complete information when placing an order.</li>
            <li>Keep your account information updated.</li>
            <li>Not engage in any unlawful or prohibited activities while using our website.</li>
          </ul>
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Intellectual Property
        </h2>
        <p style={sectionStyle}>
          All content, trademarks, and other intellectual property on our website are the property of Universal Educational Visuals or our licensors. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Limitation of Liability:
        </h2>
        <p style={sectionStyle}>
          To the fullest extent permitted by law, Universal Educational Visuals shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Indemnification:
        </h2>
        <p style={sectionStyle}>
          You agree to indemnify and hold harmless Universal Educational Visuals and its affiliates from any claims, losses, or damages, including legal fees, arising from your use of our website or breach of these Terms.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Changes to Terms:
        </h2>
        <p style={sectionStyle}>
          We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Your continued use of the website after any changes indicates your acceptance of the new Terms.
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Governing Law:
        </h2>
        <p style={sectionStyle}>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
        </p>
      </div>

      <div>
        <h2 style={headingStyle}>
          <span style={serialNumberStyle}>{counter++}.</span> Contact Information
        </h2>
        <p style={sectionStyle}>
          If you have any questions or concerns about these Terms, please contact us at:
          <br />
          <strong>Universal Educational Visuals</strong>
          <br />
          9/W, 1A, Akilandeswari Nagar,
          <br />
          Canara Bank Colony, Ammapatti Salai,
          <br />
          Thuraiyur, Dhan Lakshmi Nagar
          <br />
          Tiruchirappalli - 621010, Tamil Nadu.
          <br />
          Phone: +91 80489 55493
          <br />
          Email: info@universeeducationalvisuals.com
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
