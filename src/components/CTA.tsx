import { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { theme } from '../theme';
import type { ContactInfo, LeadPayload } from '../types/cms';

interface CTAProps {
  contactInfo: ContactInfo;
}

interface FormState {
  fullName:    string;
  companyName: string;
  email:       string;
  phone:       string;
  subject:     LeadPayload['subject'];
  message:     string;
}

const INITIAL_FORM: FormState = {
  fullName:    '',
  companyName: '',
  email:       '',
  phone:       '',
  subject:     '',
  message:     '',
};

export default function CTA({ contactInfo }: CTAProps) {
  const [formData, setFormData]     = useState<FormState>(INITIAL_FORM);
  const [isLoading, setIsLoading]   = useState(false);
  const [isSuccess, setIsSuccess]   = useState(false);
  const [errorMsg,  setErrorMsg]    = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setErrorMsg(null);
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const strapiUrl   = import.meta.env.VITE_STRAPI_PUBLIC_URL as string | undefined;
    const leadsToken  = import.meta.env.VITE_STRAPI_LEADS_TOKEN as string | undefined;

    if (!strapiUrl || !leadsToken) {
      // Dev-time guard: CMS not yet configured.
      setErrorMsg('Form submission is not configured yet. Please contact us directly via email.');
      setIsLoading(false);
      return;
    }

    try {
      const payload: { data: LeadPayload } = {
        data: {
          full_name:    formData.fullName,
          company_name: formData.companyName,
          email:        formData.email,
          phone:        formData.phone,
          subject:      formData.subject,
          message:      formData.message,
        },
      };

      const res = await fetch(`${strapiUrl}/api/leads`, {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${leadsToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const detail = json?.error?.message ?? `Server error (${res.status})`;
        throw new Error(detail);
      }

      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setErrorMsg(`Something went wrong: ${msg}. Please try again or email us directly.`);
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass =
    'w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all';

  return (
    <section id="contact" className="py-24 lg:py-[120px] bg-gray-900 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-widest text-sm uppercase mb-4" style={{ color: theme.colors.primary }}>
              Partner With Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading leading-tight">
              Looking to Source or Export <span style={{ color: theme.colors.primary }}>FMCG Products?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-body leading-relaxed">
              Our specialists are ready to discuss your requirements. From wholesale pricing to global compliance, we provide the expertise needed for seamless international commerce.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Global Headquarters</h4>
                  <p className="text-gray-400 mt-1">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 mt-1 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone style={{ color: theme.colors.primary }} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Call Representative</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-400 mt-1 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">

            {/* ── Success State ── */}
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <CheckCircle className="w-16 h-16" style={{ color: theme.colors.primary }} />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Thank you for reaching out. Our team will review your requirements and get back to you within 1–2 business days.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-sm font-medium underline underline-offset-4"
                  style={{ color: theme.colors.primary }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (

              /* ── Form State ── */
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                      style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company Name</label>
                    <input
                      required
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Global Trade Inc."
                      className={inputClass}
                      style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                      style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                  <div className="relative">
                    <select
                      required
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                    >
                      <option value="" disabled className="text-gray-500">Select an option</option>
                      <option value="sourcing">FMCG Sourcing Inquiry</option>
                      <option value="logistics">Logistics &amp; Supply Chain</option>
                      <option value="compliance">Compliance and Trade Advisory</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className={`${inputClass} resize-y`}
                    style={{ '--tw-ring-color': theme.colors.primary } as React.CSSProperties}
                  />
                </div>

                {/* Error message */}
                {errorMsg && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm leading-relaxed">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white font-bold text-lg py-4 rounded-lg transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: theme.colors.primary,
                    boxShadow: `0 0 20px ${theme.colors.primary}40`,
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
