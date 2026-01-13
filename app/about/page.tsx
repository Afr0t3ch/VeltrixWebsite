export const metadata = {
  title: "About Us | Veltrix Digital",
  description: "Learn about Veltrix Digital - Your partner in digital transformation"
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-veltrix-red">Veltrix Digital</span>
          </h1>
          <p className="text-xl text-gray-400">
            Powering digital possibilities through innovation and automation
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-veltrix-green">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Veltrix Digital, we&apos;re on a mission to empower businesses through cutting-edge digital solutions. 
              We believe that every business deserves access to premium web design, effective marketing, and powerful 
              automation tools that drive real growth.
            </p>
          </section>

          <section className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-veltrix-yellow">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where businesses of all sizes can leverage enterprise-level digital infrastructure 
              to compete globally. Through innovation, automation, and strategic thinking, we&apos;re building the future 
              of digital business operations.
            </p>
          </section>

          <section className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-veltrix-green">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">🚀 Innovation First</h3>
                <p className="text-gray-400">
                  We use the latest technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">⚡ Automation Focus</h3>
                <p className="text-gray-400">
                  Save time and money with our intelligent automation solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📊 Data-Driven</h3>
                <p className="text-gray-400">
                  Every decision backed by analytics and measurable results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🎯 Results Focused</h3>
                <p className="text-gray-400">
                  We measure success by your growth and ROI.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-veltrix-yellow">Our Approach</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We combine strategic thinking with technical excellence to deliver solutions that not only look 
              great but drive measurable business results. From initial consultation to ongoing support, we&apos;re 
              your partner in digital success.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-veltrix-green mr-2">✓</span>
                <span>Comprehensive discovery and strategy phase</span>
              </li>
              <li className="flex items-start">
                <span className="text-veltrix-green mr-2">✓</span>
                <span>Agile development with regular client feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-veltrix-green mr-2">✓</span>
                <span>Rigorous testing and quality assurance</span>
              </li>
              <li className="flex items-start">
                <span className="text-veltrix-green mr-2">✓</span>
                <span>Ongoing support and optimization</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8">Let&apos;s discuss how we can help your business grow.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-veltrix-green text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
