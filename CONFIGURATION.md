# Configuration Guide

## Quick Setup Checklist

### 1. Environment Variables (.env.local)

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@brixontech.com
WHATSAPP_NUMBER=91XXXXXXXXXX
```

### 2. WhatsApp Number Updates

Update your WhatsApp number in these files:

**File: app/components/Hero.tsx**
- Line: `window.open(\`https://wa.me/91XXXXXXXXXX?text=${message}\`, '_blank');`

**File: app/components/Cta.tsx**
- Line: `window.open(\`https://wa.me/91XXXXXXXXXX?text=${message}\`, '_blank');`

**File: .env.local**
- Line: `WHATSAPP_NUMBER=91XXXXXXXXXX`

### 3. Email Configuration

**For Gmail:**
1. Go to Google Account Settings
2. Security > 2-Step Verification (enable it)
3. Security > App passwords
4. Create new app password for "Mail"
5. Copy the 16-character password
6. Use it as `EMAIL_PASS` in `.env.local`

**For Other Email Providers:**
Update the transporter configuration in `app/api/submit-project/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### 4. Company Information Updates

**Footer (app/components/Footer.tsx):**
- Company description
- Social media links
- Contact information

**Layout (app/layout.tsx):**
- SEO metadata
- Site title and description

### 5. Policy Pages

Update these pages with your actual policies:
- `app/privacy-policy/page.tsx`
- `app/refund-policy/page.tsx`
- `app/terms-conditions/page.tsx`

### 6. Images

Ensure these images exist in `/public/images/`:
- logo.png
- background.jpg
- arrow2.png
- card1.jpg, card2.jpg, card3.jpg, card4.jpg
- heroSupport.png
- pc1.jpg, pc2.jpg, pc3.jpg
- rocket.png
- tick.png
- footer/logo-white.png
- footer/linkedin.png, instagram.png, whatsapp.png
- clients/ (all client logos)

## Testing

### Test Email Functionality:
1. Fill out the project form
2. Check client email for confirmation
3. Check admin email for project details

### Test WhatsApp Integration:
1. Click "Book a Call" button
2. Verify WhatsApp opens with pre-loaded message
3. Confirm correct number is displayed

### Test Responsive Design:
1. Open in Chrome DevTools
2. Test mobile (375px, 414px)
3. Test tablet (768px, 1024px)
4. Test desktop (1280px, 1920px)

## Production Deployment

Before deploying:
- [ ] Update all placeholder content
- [ ] Add real images
- [ ] Configure environment variables on hosting platform
- [ ] Test email functionality
- [ ] Test WhatsApp integration
- [ ] Verify all links work
- [ ] Check responsive design on real devices
- [ ] Run `npm run build` to check for errors
- [ ] Test all policy pages
- [ ] Verify SEO metadata

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Nodemailer: https://nodemailer.com/
