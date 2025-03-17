import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hier zou normaal een API call komen
    // Voor nu simuleren we een succesvolle verzending
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.'
    });
    
    // Reset het formulier
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: ''
    });
  };

  return (
    <Layout title="Contact" description="Neem contact op met Terralemon. We helpen je graag verder met je digitale communicatie.">
      {/* Hero Banner */}
      <div className="main_banner position-relative d-flex align-items-center bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 mb-2">Contact</h1>
              <h2 className="fs-3 fw-light mb-5">We horen graag van je.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Contactgegevens */}
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="pe-lg-5">
                <h2 className="fs-1 mb-4">Gegevens</h2>
                <address className="mb-4">
                  <strong>Terralemon B.V.</strong><br />
                  Oudezijds Achterburgwal 141B<br />
                  1012 DG Amsterdam<br /><br />
                  <a href="tel:+31206248300" className="text-dark">+31 20 62 48 300</a><br />
                  <a href="mailto:fresh@terralemon.nl" className="text-dark">fresh@terralemon.nl</a>
                </address>
                
                <p>
                  KVK: 34294218<br />
                  BTW: NL819079418B01
                </p>
                
                <h3 className="fs-4 mt-5 mb-3">Social</h3>
                <div className="d-flex">
                  <a href="https://www.facebook.com/terralemon" className="me-3" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/terralemon" className="me-3" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/terralemon" className="me-3" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/terralemon/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 1.452c2.155 0 2.409.01 3.258.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.388-.05 3.232c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.85.038-1.103.047-3.262.047s-2.414-.01-3.262-.05c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8">
              <h2 className="fs-1 mb-4">Stuur een bericht</h2>
              
              {formStatus.submitted && (
                <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">Naam *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">E-mail *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="phone" className="form-label">Telefoonnummer</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label">Bedrijf</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Bericht *</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Versturen</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container-fluid px-0">
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0530658422437!2d4.894636877112183!3d52.36978734887917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b94ea4cc97%3A0xc51564a972dec9e!2sOudezijds%20Achterburgwal%20141B%2C%201012%20DG%20Amsterdam!5e0!3m2!1sen!2snl!4v1679930261757!5m2!1sen!2snl" 
            width="100%" 
            height="450" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Terralemon locatie"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
} 