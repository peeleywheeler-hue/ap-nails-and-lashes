# AP Nails & Lashes - Professional Website

A modern, responsive website for AP Nails and Lashes mobile beauty services in North Devon. Built with clean HTML, professional CSS styling, and interactive JavaScript functionality.

## 🎨 Design Features

### Colour Palette (7 Shades of Grey)
- **Dark Grey** (#2c2c2c) - Primary text and headers
- **Medium Grey** (#5a5a5a) - Secondary text
- **Base Grey** (#7d7d7d) - Body text
- **Light Grey** (#b3b3b3) - Subtle elements
- **Soft Grey** (#e8e8e8) - Background accents
- **Off-White** (#f5f5f5) - Section backgrounds
- **White** (#ffffff) - Main background
- **Accent** (#9b8b7e) - Buttons and highlights

### Typography (3 Fonts Maximum)
1. **Playfair Display** - Elegant serif for headings
2. **Poppins** - Modern sans-serif for body text
3. **Montserrat** - Clean sans-serif for secondary elements

## 📱 Website Sections

### 1. **Navigation Header**
- Sticky header with smooth scroll
- Mobile hamburger menu (responsive)
- Logo with professional styling
- Quick navigation to all sections

### 2. **Hero Section**
- Eye-catching headline
- Compelling tagline
- Call-to-action button linking to contact form
- Gradient background with professional feel

### 3. **About Me**
- Your professional story
- 3 service highlights with icons
- Personal touch with professional tone
- Responsive grid layout

### 4. **Gallery**
- 6-item grid gallery for your work examples
- Placeholder images ready to replace
- Hover overlay effects with service descriptions
- Fully responsive (3 columns → 1 column on mobile)

### 5. **Reviews**
- 3 client testimonial cards
- 5-star rating display
- Professional review styling
- Link to your Google Business Reviews
- Hover animations

### 6. **Contact**
- Your contact information
- Professional contact form with validation
- Required fields: Full Name, Email, Phone, Address
- Optional message field
- Form validation for email and phone
- Success message confirmation

### 7. **Footer**
- Business information
- Copyright notice
- Professional styling

## 🚀 Getting Started

### 1. **Basic Setup**
```bash
# The website consists of 3 files:
- index.html     (Structure)
- styles.css     (Styling)
- script.js      (Interactivity)

# Simply save all files in the same directory
# Open index.html in any web browser
```

### 2. **Update Your Information**
In `index.html`, replace these placeholder values:

**Email Address:**
```html
<a href="mailto:contact@apnailsandlashes.co.uk">contact@apnailsandlashes.co.uk</a>
```

**Phone Number:**
```html
<a href="tel:+441234567890">+44 (0) 123 456 7890</a>
```

**Location:**
```html
<p><strong>Location:</strong> Mobile Service - North Devon</p>
```

### 3. **Add Your Gallery Photos**
Replace placeholder image URLs with your actual photos:

```html
<!-- Find these lines in the gallery section -->
<img src="https://via.placeholder.com/300x300?text=Nail+Design+1" alt="Nail Design 1">

<!-- Replace with your image URLs -->
<img src="your-image-url-here" alt="Nail Design 1">
```

Or use relative paths if you store images locally:
```html
<img src="images/nail-design-1.jpg" alt="Nail Design 1">
```

### 4. **Link Your Google Reviews**
In the Reviews section, update the Google Reviews link:

```html
<a href="https://www.google.com/maps" target="_blank" class="reviews-button">
```

Replace with your actual Google Business Profile URL:
```html
<a href="https://www.google.com/maps/place/YOUR_BUSINESS_NAME" target="_blank" class="reviews-button">
```

## 📧 Setting Up Form Submission

The contact form is ready for integration with an email service. Here are your options:

### **Option 1: FormSubmit.co (Recommended - Easiest)**
1. Go to [formsubmit.co](https://formsubmit.co)
2. Update the form action in `index.html`:
```html
<form class="contact-form" id="contactForm" action="https://formsubmit.co/your-email@example.com" method="POST">
```
3. Replace `your-email@example.com` with your actual email
4. That's it! Forms will be emailed to you automatically

### **Option 2: Formspree (Alternative)**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### **Option 3: Your Own Backend**
If you have server-side capabilities, point the form to your backend endpoint that handles email sending.

## 📦 Hosting Your Website

### **Option 1: GitHub Pages (Free)**
1. Create a GitHub repository named `ap-nails-and-lashes`
2. Push the three files (index.html, styles.css, script.js) to the repository
3. Go to Settings → Pages → Select "Deploy from branch"
4. Your site will be available at: `https://yourusername.github.io/ap-nails-and-lashes`

### **Option 2: Netlify (Free & Easy)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder with the 3 files
3. Get a free URL instantly
4. Optional: Connect your own domain

### **Option 3: Traditional Web Host**
- Upload files via FTP to any web hosting provider
- Update your domain settings to point to your hosting

## 🎯 Features Included

✅ **Fully Responsive Design**
- Mobile-first approach
- Works perfectly on all devices (phones, tablets, desktops)
- Hamburger menu for mobile navigation

✅ **Professional Animations**
- Smooth scrolling
- Hover effects on buttons and cards
- Gallery image zoom on hover
- Review cards lift on hover

✅ **Form Validation**
- Required field checking
- Email format validation
- Phone number validation
- User-friendly error messages

✅ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

✅ **Performance**
- Lightweight CSS (no frameworks)
- Minimal JavaScript
- Fast loading times
- SEO-friendly structure

## 🔧 Customization Guide

### Change Accent Colour
Edit the `:root` section in `styles.css`:
```css
:root {
    --accent: #9b8b7e;  /* Change this hex code */
}
```

### Modify Font Sizes
Find the relevant sections in `styles.css` and adjust:
```css
.hero-content h1 {
    font-size: 4rem;  /* Adjust this value */
}
```

### Add More Gallery Items
Copy and paste this in the gallery grid:
```html
<div class="gallery-item">
    <img src="your-image-url" alt="Description">
    <div class="overlay">
        <p>Service Name</p>
    </div>
</div>
```

### Add More Reviews
Copy and paste this in the reviews container:
```html
<div class="review-card">
    <div class="stars">★★★★★</div>
    <p class="review-text">"Your review text here..."</p>
    <p class="review-author">- Client Name</p>
</div>
```

## 📱 Mobile Optimization

The website automatically adapts to different screen sizes:

- **Desktop** (1024px+) - Full multi-column layouts
- **Tablet** (768px - 1023px) - 2-column to 1-column transitions
- **Mobile** (below 768px) - Single column, hamburger menu
- **Small Mobile** (480px and below) - Optimized text sizes and spacing

## 🔒 Privacy & Security

- No external tracking or analytics by default
- Contact form submission method is your choice (secure with FormSubmit.co)
- All data is under your control

## 📞 Support Notes

- Use descriptive image filenames: `nail-ombre-1.jpg` not `img1.jpg`
- Keep image file sizes under 500KB for fast loading
- Update contact information regularly for customer inquiries
- Test the contact form after setting it up
- Check the console (F12) for any JavaScript errors if something isn't working

## 🎓 File Structure

```
ap-nails-and-lashes/
├── index.html          (Main HTML file)
├── styles.css          (All styling)
├── script.js           (Interactivity & form handling)
├── README.md           (This file)
└── images/             (Optional - for your gallery photos)
    ├── nail-1.jpg
    ├── nail-2.jpg
    ├── lash-1.jpg
    └── ...
```

## 💡 Pro Tips

1. **Use high-quality photos** - Your gallery is the first thing clients judge
2. **Update reviews regularly** - Fresh testimonials build trust
3. **Keep contact info current** - Clients need to reach you
4. **Test on mobile** - Most people browse on phones
5. **Use clear before/after** - If possible, show transformation shots
6. **Respond quickly** - Set up notifications for form submissions
7. **Add a booking button** - Link directly to your booking system if you have one

## 📄 License

This website template is ready for personal use. Feel free to customize and deploy!

---

**Made with ❤️ for AP Nails and Lashes - North Devon Mobile Beauty Services**

*Last Updated: 2026-04-24*