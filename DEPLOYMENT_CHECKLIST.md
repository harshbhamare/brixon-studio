# Deployment Checklist

## Pre-Deployment

### 1. Environment Variables
- [ ] Create `.env.local` file
- [ ] Add `EMAIL_USER` (your Gmail address)
- [ ] Add `EMAIL_PASS` (Gmail app password)
- [ ] Add `ADMIN_EMAIL` (where project submissions go)
- [ ] Add `WHATSAPP_NUMBER` (with country code, no +)

### 2. Code Updates
- [ ] Update WhatsApp number in `app/components/Hero.tsx`
- [ ] Update WhatsApp number in `app/components/Cta.tsx`
- [ ] Update company info in `app/components/Footer.tsx`
- [ ] Update social media links in Footer
- [ ] Review and customize policy pages content
- [ ] Update client logos in Process component

### 3. Images
Verify all images exist in `/public/images/`:
- [ ] logo.png
- [ ] background.jpg
- [ ] arrow2.png
- [ ] card1.jpg, card2.jpg, card3.jpg, card4.jpg
- [ ] heroSupport.png
- [ ] pc1.jpg, pc2.jpg, pc3.jpg
- [ ] rocket.png
- [ ] tick.png
- [ ] footer/logo-white.png
- [ ] footer/linkedin.png, instagram.png, whatsapp.png
- [ ] clients/ (all client logos)

### 4. Testing
- [ ] Test project submission form
- [ ] Verify client receives confirmation email
- [ ] Verify admin receives project details email
- [ ] Test WhatsApp "Book a Call" button
- [ ] Test all navigation links
- [ ] Test policy page links in footer
- [ ] Test mobile navigation menu
- [ ] Test form validation
- [ ] Test responsive design on multiple devices

### 5. Build
- [ ] Run `npm run build` successfully
- [ ] Fix any build errors or warnings
- [ ] Test production build locally with `npm start`

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add Environment Variables in Vercel Dashboard**
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local`
   - Make sure to add them for Production, Preview, and Development

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Other Platforms

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site Settings

#### AWS Amplify
1. Connect repository
2. Build settings: Auto-detected
3. Add environment variables
4. Deploy

#### Custom Server
1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 or similar for process management
4. Set up reverse proxy (Nginx/Apache)
5. Configure SSL certificate

## Post-Deployment

### 1. Verification
- [ ] Visit deployed URL
- [ ] Test all functionality
- [ ] Submit a test project
- [ ] Check email delivery
- [ ] Test WhatsApp integration
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership
- [ ] Set up Google Analytics (optional)
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card validator

### 3. Performance
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Optimize images if needed
- [ ] Enable caching
- [ ] Set up CDN if needed

### 4. Monitoring
- [ ] Set up error tracking (Sentry, optional)
- [ ] Monitor email delivery
- [ ] Check form submissions
- [ ] Monitor site uptime

### 5. Security
- [ ] Ensure HTTPS is enabled
- [ ] Verify environment variables are secure
- [ ] Check for exposed sensitive data
- [ ] Set up security headers

## Maintenance

### Regular Tasks
- [ ] Monitor email functionality
- [ ] Check form submissions
- [ ] Update content as needed
- [ ] Review and respond to inquiries
- [ ] Update dependencies monthly
- [ ] Backup data regularly

### Updates
- [ ] Keep Next.js updated
- [ ] Update dependencies for security patches
- [ ] Review and update policy pages annually
- [ ] Update portfolio with new projects
- [ ] Refresh testimonials/client logos

## Troubleshooting

### Email Not Working
1. Verify Gmail app password is correct
2. Check 2-Step Verification is enabled
3. Review API route logs
4. Test with different email provider if needed

### WhatsApp Not Opening
1. Verify number format (no + or spaces)
2. Check country code is included
3. Test on different devices

### Build Errors
1. Clear `.next` folder
2. Delete `node_modules` and reinstall
3. Check for TypeScript errors
4. Review console logs

### Responsive Issues
1. Test in Chrome DevTools
2. Check CSS media queries
3. Verify viewport meta tag
4. Test on real devices

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Framer Motion: https://www.framer.com/motion/
- Nodemailer: https://nodemailer.com/

## Emergency Contacts

- Developer: [Your contact]
- Hosting Support: [Platform support]
- Domain Registrar: [Registrar support]
