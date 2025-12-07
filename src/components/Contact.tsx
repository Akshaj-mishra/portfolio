import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { personalData } from '../assets/personal';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const { emailJSServiceId, emailJSTemplateId, emailJSPublicKey, contactEmail } = personalData;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!emailJSServiceId || !emailJSTemplateId || !emailJSPublicKey) {
      toast.error('EmailJS configuration is missing.');
      console.error('Missing EmailJS credentials in personalData file.');
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
          to_email: contactEmail, // Ensure your EmailJS template uses {{to_email}} or simply hardcode your email in the dashboard
        },
        emailJSPublicKey
      );

      setIsSuccess(true);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('FAILED...', error); // Check browser console for specific error details
      toast.error('Failed to send message. Please check your internet or configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: contactEmail,
      link: `mailto:${contactEmail}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'location',
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '7987826637', // Ensure this is a string
      link: 'tel:7987826637',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods (Left Side) */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl transition-transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl text-center border border-green-200 dark:border-green-900"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-green-500 rounded-full mb-6">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                        required
                        placeholder="Hello! I'd like to discuss..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/30"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;