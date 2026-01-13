# Veltrix Digital - Premium Digital Growth Agency

A modern, high-performance web application built with Next.js 14, React, TypeScript, and Tailwind CSS. This is a production-ready platform for a premium digital agency with SaaS capabilities.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Glassmorphism UI**: Beautiful, modern design with gradient backgrounds
- **Social Media Control Center**: Unified platform to publish to multiple social networks
- **Client Dashboard**: SaaS-ready dashboard for client management
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Performance First**: Server components, edge-ready APIs, lazy loading

## 📁 Project Structure

```
veltrix-digital/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page with Hero
│   ├── services/page.tsx    # Services page
│   ├── portfolio/page.tsx   # Portfolio/case studies
│   ├── about/page.tsx       # About us
│   ├── contact/page.tsx     # Contact/quote form
│   ├── dashboard/page.tsx   # Client dashboard
│   └── api/
│       ├── lead/route.ts    # Lead generation API
│       └── social/route.ts  # Social media publishing API
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── GradientBackground.tsx
│   ├── FloatingCTA.tsx
│   ├── SocialControlCenter.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── social.ts           # Social media integrations
└── styles/
    └── globals.css         # Global styles
```

## 🎨 Design System

### Brand Colors
- **Veltrix Red**: `#E53935`
- **Veltrix Green**: `#00E676`
- **Veltrix Yellow**: `#FFD600`
- **Veltrix Dark**: `#0B0F14`

### Components
- Glassmorphism effects with backdrop blur
- Gradient text and backgrounds
- Hover animations with Framer Motion
- Shadow glow effects

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
The easiest way to deploy is using [Vercel](https://vercel.com):
```bash
vercel
```

## 🔧 Configuration

### Social Media APIs
To enable the Social Media Control Center, configure the following APIs:
- Facebook Graph API
- Instagram Content Publishing API
- LinkedIn API
- X (Twitter) API
- TikTok API
- Google Business Profile API

Add your API keys to `.env.local`

### Database (Supabase)
1. Create a [Supabase](https://supabase.com) project
2. Add your URL and anon key to `.env.local`
3. Create tables for leads, posts, etc.

## 📄 Pages

### Home (/)
- Animated hero section
- Featured services
- Call-to-action blocks

### Services (/services)
- Website Design & Development
- Hosting & Domains
- SEO Optimization
- Digital Marketing
- Google Ads Management
- Google My Business
- Custom Applications
- Business Strategy

### Portfolio (/portfolio)
- Case studies grid
- Project descriptions
- Technologies used

### About (/about)
- Mission & Vision
- Why Choose Us
- Our Approach

### Contact (/contact)
- Quote request form
- Service selection
- Contact information

### Dashboard (/dashboard)
- Social Media Control Center
- Analytics (Coming Soon)
- SEO Dashboard (Coming Soon)
- Ad Campaigns (Coming Soon)
- Website Manager (Coming Soon)
- Automations (Coming Soon)
- Billing (Coming Soon)

## 🎯 Key Features

### Social Media Control Center
Write once, publish everywhere:
- Facebook
- Instagram
- LinkedIn
- X (Twitter)
- TikTok
- Google Business Profile

Features:
- Single post creation
- Hashtag management
- Media upload (images/videos)
- Scheduling (coming soon)
- Analytics per platform (coming soon)

### Lead Generation
- Contact form with CRM integration
- Email notifications
- Database storage
- Service-specific inquiries

## 🚀 Performance

- Server-side rendering
- Static generation where possible
- Edge-ready API routes
- Optimized images
- Code splitting
- Lazy loading

## 📱 Mobile Responsive

Fully responsive design that works beautifully on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security

- Environment variables for sensitive data
- API rate limiting (recommended)
- Input validation
- CSRF protection
- Secure headers

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Advanced analytics dashboard
- [ ] Payment integration
- [ ] Email marketing automation
- [ ] A/B testing
- [ ] Multi-language support
- [ ] Blog/CMS integration

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the development team.

## 📄 License

Copyright © 2024 Veltrix Digital. All rights reserved.

## 🆘 Support

For support, email info@veltrixdigital.com or visit our contact page.

---

Built with ❤️ by Veltrix Digital
