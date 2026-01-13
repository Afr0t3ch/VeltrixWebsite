"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to grow your business? Contact us today for a free consultation
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="glass-dark rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-veltrix-green mb-2">Email</h3>
                <p className="text-gray-400">info@Veltrix.co.za</p>
              </div>
              <div>
                <h3 className="font-semibold text-veltrix-green mb-2">Phone</h3>
                <p className="text-gray-400">+27 87 153 5573</p>
                <p className="text-gray-400">+27 83 238 9005</p>
              </div>
              <div>
                <h3 className="font-semibold text-veltrix-green mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-400">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Follow Us</h2>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                → Facebook
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                → Twitter
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                → Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/veltrix-digital-08655b365/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                → LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-dark rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors"
              >
                <option value="">Select a service</option>
                <option value="website">Website Design</option>
                <option value="seo">SEO</option>
                <option value="ads">Google Ads</option>
                <option value="automation">Automation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-veltrix-green transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-4 bg-gradient-to-r from-veltrix-green to-veltrix-yellow text-veltrix-dark rounded-lg font-bold text-lg hover:shadow-glow transition-all disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-veltrix-green text-center">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
