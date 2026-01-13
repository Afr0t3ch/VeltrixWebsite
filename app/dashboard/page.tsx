import SocialControlCenter from "@/components/SocialControlCenter";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Client Dashboard</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Manage your digital presence from one central location
        </p>
      </div>

      <SocialControlCenter />
    </div>
  );
}
