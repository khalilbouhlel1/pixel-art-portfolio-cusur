'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-matter-primary to-dark-matter-accent text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-color mb-4">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-secondary-color max-w-2xl mx-auto">
            Have a project in mind? Let’s collaborate and create something amazing together.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-dark-matter-accent p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-secondary-color text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-matter-primary border border-secondary-color rounded focus:outline-none focus:ring-2 focus:ring-accent-color"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-secondary-color text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-matter-primary border border-secondary-color rounded focus:outline-none focus:ring-2 focus:ring-accent-color"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-secondary-color text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-matter-primary border border-secondary-color rounded focus:outline-none focus:ring-2 focus:ring-accent-color"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full px-6 py-3 font-bold rounded ${
                status === 'sending'
                  ? 'bg-secondary-color cursor-not-allowed'
                  : 'bg-accent-color hover:bg-secondary-color'
              } text-dark-matter-primary transition-all`}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-center text-accent-color">
              Thank you! I’ll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-center text-red-500">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
