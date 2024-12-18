import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { X } from 'lucide-react';

const EmailForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (form.current) {
      emailjs
        .sendForm(
          "service_7tvs1ix",
          "template_266pjkl",
          form.current,
          "h8qiUhkot-wfqvH5iybv4"
        )
        .then(
          () => {
            setSubmitStatus('success');
            setEmail("");
            setMessage("");
          },
          () => {
            setSubmitStatus('error');
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} ref={form} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default EmailForm;

