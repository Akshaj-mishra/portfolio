import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { personalData } from '../assets/personal';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { emailJSServiceId, emailJSTemplateId, emailJSPublicKey } = personalData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!emailJSServiceId || !emailJSTemplateId || !emailJSPublicKey) {
      toast.error('EmailJS configuration missing. Please update personal.jsx.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        emailJSServiceId,
        emailJSTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalData.contactEmail,
        },
        emailJSPublicKey
      );
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-light-accent dark:text-dark-accent">Contact</span> Me
      </motion.h2>

      <motion.div
        className="max-w-xl mx-auto bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-xl border border-light-card dark:border-dark-card"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-light-text dark:text-dark-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-light-text dark:text-dark-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-light-text dark:text-dark-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-6 bg-light-accent dark:bg-dark-accent text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" /> Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
