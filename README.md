# Veltrix Digital - Next.js Web Application

A modern, premium digital agency website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern glassmorphism design with custom brand colors
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js App Router
- 🎯 SEO optimized
- 📊 Social Media Control Center - post to multiple platforms at once
- 💼 Client dashboard
- 📧 Contact form with lead capture
- 🎭 Smooth animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Afr0t3ch/VeltrixWebsite.git
cd VeltrixWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional - for Supabase integration):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
veltrix-digital/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── portfolio/           # Portfolio page
│   ├── contact/             # Contact page
│   ├── dashboard/           # Client dashboard
│   └── api/                 # API routes
│       ├── lead/            # Lead capture API
│       └── social/          # Social media posting API
├── components/              # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── FloatingCTA.tsx
│   ├── GradientBackground.tsx
│   └── SocialControlCenter.tsx
├── lib/                     # Utility functions
│   ├── supabase.ts         # Supabase client
│   └── social.ts           # Social media helpers
├── styles/                  # Global styles
│   └── globals.css
└── public/                  # Static assets

## Key Features

### Social Media Control Center

The Social Media Control Center allows you to:
- Create one post and publish it to multiple platforms
- Supported platforms: Facebook, Instagram, LinkedIn, Twitter/X, TikTok, Google Business
- Schedule posts for later
- Upload media (images/videos)
- Add hashtags
- View analytics

### Pages

- **Home**: Hero section with animated text, services overview, and CTA
- **Services**: Detailed service offerings with features
- **Portfolio**: Project showcase with technologies used
- **About**: Company mission, vision, and values
- **Contact**: Contact form with lead capture
- **Dashboard**: Client dashboard with Social Media Control Center

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (optional)
- **Deployment**: Vercel (recommended)

## Brand Colors

- **Green**: #00E676 - Primary accent
- **Yellow**: #FFD600 - Secondary accent
- **Red**: #E53935 - Tertiary accent
- **Dark**: #0B0F14 - Background

## License

© 2025 Veltrix Digital. All rights reserved.

## Contact

- Email: info@Veltrix.co.za
- Phone: +27 87 153 5573 / +27 83 238 9005
- Website: [Coming soon]
