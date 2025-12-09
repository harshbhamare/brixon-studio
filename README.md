# Brixon Tech - Digital Solutions Website

A modern, responsive website for Brixon Tech showcasing UI/UX design, web development, and digital solutions services.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO-optimized with proper metadata
- ✅ Project submission modal with email notifications
- ✅ WhatsApp integration for instant communication
- ✅ Professional animations using Framer Motion
- ✅ Privacy Policy, Refund Policy, and Terms & Conditions pages
- ✅ Interactive FAQ section
- ✅ Portfolio showcase
- ✅ Pricing plans
- ✅ Mobile-friendly navigation

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- Nodemailer (email functionality)
- React Hot Toast (notifications)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@brixontech.com
WHATSAPP_NUMBER=91XXXXXXXXXX
```

#### Gmail App Password Setup:
1. Enable 2-Step Verification in your Google Account
2. Go to Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password as `EMAIL_PASS`

### 3. Update WhatsApp Number

Replace `91XXXXXXXXXX` with your actual WhatsApp number in:
- `app/components/Hero.tsx`
- `app/components/Cta.tsx`
- `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── api/                 # API routes
│   ├── privacy-policy/      # Policy pages
│   ├── refund-policy/
│   ├── terms-conditions/
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
└── .env.local              # Environment variables
```

## Key Components

- **Hero**: Landing section with CTA buttons
- **ProjectModal**: Form for project submissions
- **Services**: Service offerings showcase
- **Portfolio**: Project gallery
- **Pricing**: Pricing plans
- **FAQ**: Frequently asked questions
- **Footer**: Site footer with links

## Email Functionality

The project submission form sends:
1. Confirmation email to the client
2. Notification email to admin with project details

## Customization

- Update company information in Footer component
- Modify pricing plans in Pricing component
- Add/remove FAQ items in Faq component
- Update policy pages content as needed

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or any other hosting platform that supports Next.js.

## License

© 2025 Brixon Tech. All rights reserved.
