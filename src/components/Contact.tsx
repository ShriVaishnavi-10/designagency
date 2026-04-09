'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Simulate server process
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <ScrollReveal width="100%" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 bg-glass-bg p-10 lg:p-20 rounded-[24px] border border-border-accent shadow-luxury">
            <div className="flex flex-col">
              <ScrollReveal direction="right" delay={0.2}>
                <h2 className="title-primary">
                  Let's create something <span className="italic-serif">extraordinary.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <p className="text-[1.1rem] text-muted leading-[1.8] my-8 lg:my-12 max-w-[450px] font-light">
                  We partner with visionary brands to craft digital experiences that leave a lasting impression. Reach out to discuss your next endeavor.
                </p>
              </ScrollReveal>
              <div className="flex flex-col gap-8 mt-auto">
                <div>
                  <span className="block font-jakarta text-[0.8rem] uppercase tracking-wider text-muted mb-2 font-medium">Inquiries</span>
                  <a href="mailto:hello@aura.com" className="font-playfair text-2xl text-foreground transition-all hover:text-accent border-b border-transparent hover:border-accent pb-1 inline-block">hello@aura.com</a>
                </div>
                <div>
                  <span className="block font-jakarta text-[0.8rem] uppercase tracking-wider text-muted mb-2 font-medium">Phone</span>
                  <a href="tel:+917896596336" className="font-playfair text-2xl text-foreground transition-all hover:text-accent">+91 78965 96336</a>
                </div>
              </div>
            </div>
            
            <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              {status === 'success' && (
                <div className="flex items-center p-6 bg-accent/5 border border-accent/20 rounded-[12px] mb-2 animate-fade-up">
                  <div>
                    <h4 className="font-playfair text-accent text-[1.4rem] mb-1 font-medium italic">Inquiry Sent</h4>
                    <p className="text-foreground text-[0.95rem] font-light opacity-80">Thank you for reaching out. Our team will review your project details and respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *" 
                    className={`w-full bg-transparent border-b py-4 font-jakarta text-base text-foreground outline-none transition-all focus:border-accent placeholder:text-muted/60 placeholder:font-light ${errors.name ? 'border-red-500' : 'border-border-accent'}`} 
                  />
                  {errors.name && <span className="text-red-500 text-[0.75rem] mt-1.5 absolute bottom-[-22px] left-0 font-medium">{errors.name}</span>}
                </div>
                <div className="relative w-full">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *" 
                    className={`w-full bg-transparent border-b py-4 font-jakarta text-base text-foreground outline-none transition-all focus:border-accent placeholder:text-muted/60 placeholder:font-light ${errors.email ? 'border-red-500' : 'border-border-accent'}`} 
                  />
                  {errors.email && <span className="text-red-500 text-[0.75rem] mt-1.5 absolute bottom-[-22px] left-0 font-medium">{errors.email}</span>}
                </div>
              </div>
              <div className="w-full">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (Optional)" 
                    className="w-full bg-transparent border-b border-border-accent py-4 font-jakarta text-base text-foreground outline-none transition-all focus:border-accent placeholder:text-muted/60 placeholder:font-light" 
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative w-full">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project *" 
                    className={`w-full bg-transparent border-b py-4 font-jakarta text-base text-foreground outline-none resize-none transition-all focus:border-accent placeholder:text-muted/60 placeholder:font-light ${errors.message ? 'border-red-500' : 'border-border-accent'}`} 
                    rows={4}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[0.75rem] mt-1.5 absolute bottom-[-22px] left-0 font-medium">{errors.message}</span>}
                </div>
              </div>
              <button 
                type="submit" 
                className="btn-primary self-start mt-6 min-w-[200px]"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
