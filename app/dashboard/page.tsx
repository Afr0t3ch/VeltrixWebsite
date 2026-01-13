import SocialControlCenter from "@/components/SocialControlCenter";

export const metadata = {
  title: "Dashboard | Veltrix Digital",
  description: "Client dashboard for managing websites, SEO, ads and automations"
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-veltrix-green">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage websites, SEO, ads & automations
          </p>
        </div>

        <div className="grid gap-8">
          {/* Social Media Control Center */}
          <SocialControlCenter />

          {/* Dashboard Features (Coming Soon) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-400 mb-4">Track your website performance and marketing metrics</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>

            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold mb-2">SEO Dashboard</h3>
              <p className="text-gray-400 mb-4">Monitor rankings, backlinks, and keyword performance</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>

            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Ad Campaigns</h3>
              <p className="text-gray-400 mb-4">Manage your Google Ads and social media campaigns</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>

            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Website Manager</h3>
              <p className="text-gray-400 mb-4">Update content, images, and manage your website</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>

            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Automations</h3>
              <p className="text-gray-400 mb-4">Manage your workflow automations and integrations</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>

            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Billing</h3>
              <p className="text-gray-400 mb-4">View invoices, payment history, and manage subscriptions</p>
              <div className="text-sm text-veltrix-yellow">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
