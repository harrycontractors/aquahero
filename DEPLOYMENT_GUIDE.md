# 🚀 AquaHero Plumbing - Quick Deployment Guide

**Get your website live in 15 minutes!**

---

## ✅ **Pre-Deployment Checklist**

Before uploading, verify these items:

- [ ] All contact information is correct
  - Phone: 9127 3131
  - Email: Aquahero247@gmail.com
  - Address: 131 Rangoon Road, Singapore 218409
  - WhatsApp: 91273131
- [ ] Logo files are in `images/` folder
- [ ] Domain is ready: www.aquahero-plumbing.sg
- [ ] Web hosting account is active

---

## 📦 **Step 1: Download Logo Files** (5 minutes)

Your logos have already been created! Download them:

1. **Square Icon** (for favicon):
   - Download: https://www.genspark.ai/api/files/s/1B0mHPVu
   - Save as: `images/aquahero-icon.png`

2. **Full Logo**:
   - Download: https://www.genspark.ai/api/files/s/6qkVztk0
   - Save as: `images/logo-full.jpg`

3. **Header Logo**:
   - Download: https://www.genspark.ai/api/files/s/86zqzyqv
   - Save as: `images/logo-header.jpg`

---

## 🌐 **Step 2: Upload to Web Hosting** (5 minutes)

### **Option A: Using cPanel File Manager**

1. Log into your cPanel
2. Click "File Manager"
3. Navigate to `public_html/` directory
4. Click "Upload" button
5. Select all website files
6. Wait for upload to complete

### **Option B: Using FTP (FileZilla)**

1. Open FileZilla
2. Connect to your hosting:
   - Host: ftp.yourdomain.com
   - Username: [your FTP username]
   - Password: [your FTP password]
   - Port: 21
3. Navigate to `public_html/` folder
4. Drag and drop all files from local to remote

### **File Structure on Server:**

```
/public_html/
├── index.html
├── sitemap.xml
├── robots.txt
├── README.md
├── DEPLOYMENT_GUIDE.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── aquahero-icon.png
    ├── logo-full.jpg
    ├── logo-header.jpg
    └── README.md
```

---

## ⚙️ **Step 3: Configure Forms** (5 minutes)

Choose one of these form services:

### **Option A: Formspree (Recommended - Free Tier Available)**

1. Go to https://formspree.io
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint (e.g., `https://formspree.io/f/xyzabc123`)
5. Update both forms in `index.html`:

**Contact Form** (around line 900):
```html
<!-- Change this: -->
<form id="contact-form" class="contact-form">

<!-- To this: -->
<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Booking Form** (around line 1100):
```html
<!-- Change this: -->
<form id="booking-form" class="booking-form">

<!-- To this: -->
<form id="booking-form" class="booking-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### **Option B: Formsubmit (Even Easier - No Signup)**

Simply update form actions to:
```html
<form action="https://formsubmit.co/Aquahero247@gmail.com" method="POST">
```

---

## 🔍 **Step 4: Verify Everything Works** (3 minutes)

Visit your website and test:

### **Navigation**
- [ ] All menu links work
- [ ] Smooth scrolling works
- [ ] Mobile menu opens/closes

### **Contact Methods**
- [ ] Phone numbers dial correctly (`tel:+6591273131`)
- [ ] WhatsApp opens (`https://wa.me/6591273131`)
- [ ] Email link works (`mailto:Aquahero247@gmail.com`)

### **Forms**
- [ ] Contact form submits
- [ ] Booking modal opens
- [ ] Form validation works
- [ ] You receive email notifications

### **Mobile Testing**
- [ ] Visit on phone
- [ ] Check all buttons work
- [ ] Test mobile menu
- [ ] Verify click-to-call works

---

## 🎨 **Step 5: Add Social Media Links** (2 minutes)

Once you create your social media profiles:

1. Open `index.html`
2. Find all instances of social media links (search for `#`)
3. Replace with your actual URLs:

```html
<!-- Find this: -->
<a href="#" class="social-link facebook">

<!-- Replace with: -->
<a href="https://facebook.com/aquaheroplumbing" class="social-link facebook">

<!-- And for Instagram: -->
<a href="https://instagram.com/aquaheroplumbing" class="social-link instagram">
```

**Update in these sections:**
- Contact section (around line 950)
- Footer (around line 1050)

---

## 📊 **Step 6: Setup Google Services** (10 minutes)

### **A. Google Analytics**

1. Go to https://analytics.google.com
2. Create account and property
3. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
4. Add tracking code to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **B. Google Search Console**

1. Go to https://search.google.com/search-console
2. Add your property (www.aquahero-plumbing.sg)
3. Verify ownership (choose HTML tag method)
4. Submit your sitemap: `https://www.aquahero-plumbing.sg/sitemap.xml`

### **C. Google My Business**

1. Go to https://www.google.com/business
2. Create or claim your business listing
3. Add all information:
   - Business name: AquaHero Plumbing
   - Address: 131 Rangoon Road, Singapore 218409
   - Phone: 9127 3131
   - Website: www.aquahero-plumbing.sg
   - Hours: 24 hours
   - Category: Plumber
4. Upload your logo
5. Add photos of your work
6. Request customer reviews

---

## 🔒 **Step 7: Security & Performance** (5 minutes)

### **A. Enable HTTPS (SSL Certificate)**

Most hosting providers offer free SSL:

1. Log into cPanel
2. Find "SSL/TLS Status" or "Let's Encrypt"
3. Enable SSL for your domain
4. Force HTTPS redirect (add to `.htaccess`):

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### **B. Enable GZIP Compression**

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### **C. Browser Caching**

Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 🎉 **Step 8: Launch & Promote!**

### **Announce Your Launch**

1. **Email Marketing**
   - Send to existing customers
   - "We've got a new website!"
   - Special launch discount?

2. **Social Media**
   - Post on Facebook, Instagram
   - Share your new logo
   - Use hashtags: #PlumbingSingapore #AquaHero

3. **Google My Business Post**
   - Announce new website
   - Share special offer

4. **Local Directories**
   - Update listings
   - Add new website URL

### **First Week Actions**

- [ ] Monitor form submissions
- [ ] Check phone call volume
- [ ] Respond to WhatsApp messages
- [ ] Reply to customer inquiries
- [ ] Ask happy customers for reviews
- [ ] Share before/after photos on social media

---

## 📱 **Marketing Tips**

### **Get Your First 10 Reviews**

1. Call your best customers
2. Ask for honest review
3. Send them direct Google review link
4. Offer small incentive (discount on next service)
5. Make it easy (guide them through process)

### **Social Media Content Ideas**

**Week 1-4 Posts:**
- Introduction: "Meet AquaHero Plumbing!"
- Team photos: "Your water heroes"
- Before/After: Successful repairs
- Tips: "How to prevent pipe bursts"
- Customer testimonial highlights
- Emergency service reminder
- Special offer promotion
- Behind-the-scenes work photos

### **Local SEO Actions**

1. **Citations** - List business on:
   - Yelp Singapore
   - Yellow Pages Singapore
   - HungryGoWhere (Business)
   - Carousell (Services)
   - Local directories

2. **Keywords** - Target these:
   - Plumber Singapore
   - Emergency plumber [area]
   - 24/7 plumbing service
   - Drain cleaning Singapore
   - Water heater repair

---

## 🆘 **Troubleshooting**

### **Problem: Website not loading**

**Check:**
- [ ] Files uploaded to correct directory (`public_html/`)
- [ ] `index.html` is in root directory
- [ ] Domain DNS pointing to server (can take 24-48 hours)
- [ ] Server is running (check hosting control panel)

**Solution:**
- Clear browser cache
- Try different browser
- Check with hosting support

### **Problem: Forms not working**

**Check:**
- [ ] Form action URL configured
- [ ] JavaScript loading (`main.js`)
- [ ] Browser console for errors
- [ ] Email delivery (check spam folder)

**Solution:**
- Test with simple form first
- Verify Formspree/Formsubmit setup
- Check server PHP settings
- Contact form service support

### **Problem: Phone links not working on mobile**

**Check:**
- [ ] Format: `tel:+6591273131` (with +65)
- [ ] No typos in phone number
- [ ] Testing on actual device (not desktop)

**Solution:**
- Verify phone number format
- Test on different mobile devices
- Check for JavaScript errors

### **Problem: Images not showing**

**Check:**
- [ ] Images uploaded to `/images/` folder
- [ ] File names match exactly (case-sensitive)
- [ ] File permissions set to 644
- [ ] Image URLs correct in HTML

**Solution:**
- Re-upload images
- Verify file paths
- Check browser developer tools

### **Problem: Mobile menu not working**

**Check:**
- [ ] JavaScript file loaded
- [ ] No JavaScript errors in console
- [ ] CSS file loaded correctly

**Solution:**
- Clear browser cache
- Check `main.js` is uploaded
- Verify file paths

---

## 📞 **Post-Launch Support**

### **Monitor These Metrics**

**Daily (First Week):**
- Website uptime
- Form submissions
- Phone calls received
- Error reports

**Weekly:**
- Google Analytics traffic
- Search rankings
- Customer feedback
- Page load speed

**Monthly:**
- Total leads generated
- Conversion rate
- Popular pages
- SEO performance

### **Monthly Maintenance Tasks**

- [ ] Update content (prices, services)
- [ ] Add new customer testimonials
- [ ] Check all links work
- [ ] Review Google Analytics
- [ ] Backup website files
- [ ] Update blog/news (if added)
- [ ] Respond to all reviews

---

## ✅ **Success Checklist**

Your website is successfully deployed when:

- [ ] Website loads at www.aquahero-plumbing.sg
- [ ] All pages accessible
- [ ] Logo displays correctly
- [ ] Phone numbers work (click-to-call)
- [ ] WhatsApp opens correctly
- [ ] Contact forms submit successfully
- [ ] Mobile menu works
- [ ] All CTAs functional
- [ ] HTTPS/SSL active (padlock in browser)
- [ ] Google Analytics tracking
- [ ] Google Search Console verified
- [ ] Google My Business updated
- [ ] Social media links work
- [ ] No broken links or images
- [ ] Fast loading (<3 seconds)
- [ ] Mobile-friendly (test on phone)

---

## 🎊 **Congratulations!**

Your AquaHero Plumbing website is now live! 🦸💧

**Next Steps:**
1. Share your new website with customers
2. Start collecting reviews
3. Post regularly on social media
4. Monitor leads and inquiries
5. Keep content fresh and updated

**Your water emergency heroes are ready to save the day!**

---

**Need help?** Check `README.md` for detailed documentation.

**Emergency support needed?** Contact your web developer or hosting provider.