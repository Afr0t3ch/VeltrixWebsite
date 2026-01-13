"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage("Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Website Design",
          message: ""
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get a <span className="text-veltrix-green">Quote</span>
          </h1>
          <p className="text-xl text-gray-400">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-veltrix-green transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-veltrix-green transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-veltrix-green transition"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-veltrix-green transition"
              >
                <option>Website Design</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Automation</option>
                <option>Digital Marketing</option>
                <option>Custom Application</option>
                <option>Business Strategy</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-veltrix-green transition"
                placeholder="Tell us about your project, goals, timeline, and budget..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-veltrix-green text-black font-semibold rounded-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.includes("Thank you") ? "bg-veltrix-green/20 border border-veltrix-green text-veltrix-green" : "bg-veltrix-red/20 border border-veltrix-red text-veltrix-red"}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">info@veltrixdigital.com</p>
          </div>
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-400 text-sm">Available 9am-5pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
