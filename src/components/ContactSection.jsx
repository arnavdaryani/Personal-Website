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

  // Success message display
  if (isSubmitted) {
    return (
      <section id="contact" className="min-h-screen w-full bg-background flex items-center justify-center p-8 lg:p-16 xl:p-24">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen w-full bg-background flex items-center justify-center p-8 lg:p-16 xl:p-24">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-center">
            {error}
          </div>
        )}

        {/* Contact Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="first"
              value={formData.first}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              disabled={isSubmitting}
              className="w-full px-8 py-6 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              disabled={isSubmitting}
              className="w-full px-8 py-6 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message Field */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            rows={12}
            disabled={isSubmitting}
            className="w-full px-8 py-6 bg-card border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-16 py-6 bg-card border border-border rounded-2xl text-foreground font-semibold hover:bg-muted focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Optional: Add some spacing at bottom */}
        <div className="h-32"></div>
      </div>
    </section>
  );
};