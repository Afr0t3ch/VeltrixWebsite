import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GradientBackground from "@/components/GradientBackground";

export const metadata = {
  title: "Veltrix Digital | Premium Digital Growth Agency",
  description: "Web, SEO, Ads, Automation & Digital Growth Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <GradientBackground />
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
