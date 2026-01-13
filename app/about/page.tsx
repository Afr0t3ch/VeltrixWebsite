export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">About Veltrix Digital</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Empowering businesses through innovative digital solutions
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission */}
        <div className="glass-dark rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Veltrix Digital, our mission is to empower businesses of all sizes with cutting-edge digital solutions. 
            We believe that every business deserves a strong online presence, and we&apos;re here to make that happen through 
            expert web development, strategic SEO, and innovative digital marketing.
          </p>
        </div>

        {/* Vision */}
        <div className="glass-dark rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We envision a future where businesses can seamlessly harness the power of digital technology to reach their 
            full potential. Through continuous innovation and a commitment to excellence, we strive to be the leading 
            digital agency that businesses trust for their growth and transformation.
          </p>
        </div>

        {/* Values */}
        <div className="glass-dark rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-veltrix-green mb-2">Innovation</h3>
              <p className="text-gray-400">
                We stay ahead of the curve with the latest technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-veltrix-green mb-2">Excellence</h3>
              <p className="text-gray-400">
                We deliver high-quality work that exceeds expectations every time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-veltrix-green mb-2">Automation</h3>
              <p className="text-gray-400">
                We leverage automation to increase efficiency and deliver faster results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-veltrix-green mb-2">Partnership</h3>
              <p className="text-gray-400">
                We work closely with our clients as trusted partners in their success.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-dark rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Why Choose Veltrix Digital?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-veltrix-green text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Expert Team</h3>
                <p className="text-gray-400">
                  Our team consists of experienced developers, designers, and digital marketing specialists.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-veltrix-green text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Proven Results</h3>
                <p className="text-gray-400">
                  We have a track record of delivering successful projects that drive real business growth.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-veltrix-green text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Cutting-Edge Technology</h3>
                <p className="text-gray-400">
                  We use the latest tools and technologies to build fast, scalable, and secure solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-veltrix-green text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Dedicated Support</h3>
                <p className="text-gray-400">
                  We provide ongoing support and maintenance to ensure your digital assets perform optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
