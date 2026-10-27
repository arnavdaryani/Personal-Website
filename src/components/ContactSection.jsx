import { Send } from "lucide-react";
import { useState } from "react";

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    first: '',
    email: '',
    message: ''
  });

  // Your existing Formspree endpoint
  const FORMSPREE_URL = "https://formspree.io/f/xkgwoaow";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          first: formData.first,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ first: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again or contact me directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="content-section contact-section page-width">
      <div className="section-heading"><span className="section-index">03 / CONTACT</span><h2>Get in touch.</h2></div>
      <div className="contact-layout">
        <div className="contact-intro"><p>Have a project in mind<br />or a problem to solve?</p><a className="text-link" href="mailto:arnavdaryani@gmail.com">arnavdaryani@gmail.com ↗</a></div>
        {isSubmitted ? <div className="form-success" role="status"><h3>Message sent.</h3><p>Thanks for reaching out. I’ll get back to you as soon as possible.</p><button className="submit-button" onClick={() => setIsSubmitted(false)}>Send another message ↗</button></div> :
          <form onSubmit={handleSubmit}>
            <div className="form-row"><label>Name<input name="first" autoComplete="name" value={formData.first} onChange={handleInputChange} required disabled={isSubmitting} placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} required disabled={isSubmitting} placeholder="you@example.com" /></label></div>
            <label>Message<textarea name="message" value={formData.message} onChange={handleInputChange} required rows={4} disabled={isSubmitting} placeholder="What are you working on?" /></label>
            {error && <p role="alert" className="form-error">{error}</p>}
            <button className="submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"}<Send size={16} /></button>
          </form>}
      </div>
    </section>
  );
};
