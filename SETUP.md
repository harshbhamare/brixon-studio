# Brixon Tech Website - Setup Guide

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@brixontech.com
WHATSAPP_NUMBER=91XXXXXXXXXX
```

### Gmail Setup for Email Functionality

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this as `EMAIL_PASS` in your `.env.local`

### WhatsApp Number

Replace `91XXXXXXXXXX` with your actual WhatsApp number (include country code without +)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Features Implemented

✅ Responsive design for all screen sizes
✅ SEO-friendly metadata and structure
✅ Project submission modal with form
✅ Email notifications (client + admin)
✅ WhatsApp integration with pre-loaded message
✅ Privacy Policy page
✅ Refund Policy page
✅ Terms & Conditions page
✅ Professional animations using Framer Motion
✅ Mobile-responsive navigation
✅ Toast notifications for user feedback

## Important Notes

- Update the WhatsApp number in Hero.tsx and Cta.tsx
- Replace placeholder email addresses with your actual business emails
- Test email functionality before going live
- All policy pages can be customized as per your requirements
