# 🎨 BRYT Barbershop - Customization Guide

Quick reference for customizing your website to match your business needs.

---

## ⚡ Quick Customizations

### 1. Update WhatsApp Phone Number
**File:** `index.html`

Find and replace all instances of:
```
https://wa.me/1234567890?text=
```

With your actual number (include country code):
```
https://wa.me/233123456789?text=
```

**Locations to update:**
- Line 38: Navbar "Book Now"
- Line 51: Hero "Book Your Appointment"
- Line 52: Hero "Watch Our Story" button
- Line 149: Booking Banner
- Lines in Barber Cards (around 157-190): Each barber's message button

### 2. Update Business Information
**File:** `index.html` - Contact Section (around line 282-300)

```html
<div class="contact-item">
    <h3>📍 Location</h3>
    <p>YOUR ADDRESS HERE<br>YOUR CITY, STATE ZIP</p>
</div>

<div class="contact-item">
    <h3>⏰ Hours</h3>
    <p>Mon - Fri: YOUR HOURS<br>Sat: YOUR HOURS<br>Sun: YOUR HOURS</p>
</div>

<div class="contact-item">
    <h3>📱 Contact</h3>
    <p>Phone: YOUR PHONE<br><a href="https://wa.me/YOUR_NUMBER">WhatsApp: YOUR_PHONE</a></p>
</div>
```

### 3. Update Social Media Links
**File:** `index.html` - Footer Section (around line 318-322)

```html
<a href="https://instagram.com/YOUR_HANDLE" target="_blank" title="Instagram">📷</a>
<a href="https://facebook.com/YOUR_PAGE" target="_blank" title="Facebook">f</a>
<a href="https://tiktok.com/@YOUR_HANDLE" target="_blank" title="TikTok">🎵</a>
```

### 4. Change Color Scheme
**File:** `style.css` - Lines 8-15

```css
:root {
    --dark-bg: #0b0b0b;          /* Background color */
    --gold: #d4a24c;              /* Accent/highlight color */
    --gold-hover: #e8b870;        /* Hover state for accent */
    --text-light: #ffffff;        /* Main text color */
    --text-gray: #b0b0b0;         /* Secondary text color */
    --card-dark: #1a1a1a;         /* Card background */
    --light-bg: #f5f5f5;          /* Light section background */
}
```

**Example: Dark Blue & Silver Theme**
```css
--dark-bg: #0a0e27;              /* Navy blue */
--gold: #c0c0c0;                 /* Silver */
--gold-hover: #e8e8e8;           /* Light silver */
```

### 5. Add More Barbers
**File:** `index.html` - Barbers Section (around line 153-190)

Copy this template and add under `.barbers-grid`:

```html
<div class="barber-card">
    <img src="image folder/PROFILE/NewBarber.jfif" alt="Barber Name" class="barber-image">
    <h3 class="barber-name">Barber Name</h3>
    <a href="https://wa.me/1234567890?text=Hi%20Barber%20Name%2C%20I%27d%20like%20to%20book%20an%20appointment%20with%20you%20at%20BRYT%20Barbershop" class="btn-message" target="_blank">Message</a>
</div>
```

**Steps:**
1. Add barber image to `image folder/PROFILE/`
2. Copy the block above
3. Replace "NewBarber", "Barber Name" with actual name
4. Update WhatsApp link with your number and barber's name

### 6. Update Gallery Images
**File:** `index.html` - Gallery Section (around line 210-270)

The gallery already uses all images in `image folder/GALLERY/`. To add more:

```html
<div class="gallery-item" data-image="image folder/GALLERY/YOUR_IMAGE.jpg">
    <img src="image folder/GALLERY/YOUR_IMAGE.jpg" alt="Gallery Image">
    <div class="gallery-overlay">
        <span class="gallery-zoom">🔍</span>
    </div>
</div>
```

Add your high-quality barbershop images to `image folder/GALLERY/`

### 7. Update Hero Section Text
**File:** `index.html` - Lines 46-48

```html
<span class="gold-subtitle">YOUR TAGLINE HERE</span>
<h1 class="hero-title">YOUR HEADLINE HERE<br>SECOND LINE HERE</h1>
<p class="hero-description">Your description text here.</p>
```

### 8. Change Hero Image
**File:** `index.html` - Line 60

```html
<!-- Change from -->
<img src="image folder/barber-image/5.jpg" alt="Premium Barber Cut" class="hero-image">

<!-- To -->
<img src="image folder/barber-image/YOUR_IMAGE.jpg" alt="Your Description" class="hero-image">
```

### 9. Update About Section
**File:** `index.html` - Lines 276-280

```html
<h2 class="section-title-dark">Your Shop Name - About Us</h2>
<p class="about-text">Your first paragraph about your barbershop...</p>
<p class="about-text">Your second paragraph about your barbershop...</p>
```

### 10. Update Footer Copyright
Auto-updates with current year, but you can customize the text:

**File:** `index.html` - Line 330

```html
<p>&copy; 2024 YOUR BARBERSHOP NAME. All rights reserved. | Your tagline.</p>
```

---

## 🎯 Advanced Customizations

### Change Font Family
**File:** `style.css` - Line 20

```css
body {
    font-family: 'Your Font Name', sans-serif;
    /* Examples: 'Playfair Display', 'Montserrat', 'Poppins' */
}
```

Add Google Fonts in `index.html` head:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700;900&display=swap" rel="stylesheet">
```

### Add Animations
**File:** `style.css` - Add before `@media` queries:

```css
@keyframes customAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
}

.your-element {
    animation: customAnimation 1s ease-out;
}
```

### Modify Button Styles
**File:** `style.css` - Search for `.btn-primary`

```css
.btn-primary {
    background: var(--gold);
    color: var(--dark-bg);
    padding: 1rem 2rem;           /* Adjust size */
    border-radius: 30px;          /* Adjust roundness */
    font-weight: 700;             /* Adjust boldness */
}
```

### Change Responsive Breakpoints
**File:** `style.css` - Lines 667+ (Media Queries)

```css
@media (max-width: YOUR_SIZE px) {
    /* Your responsive rules */
}
```

Common breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: < 480px

---

## 📸 Image Guidelines

### Profile Images (Barbers)
- **Format:** JPG or PNG
- **Size:** 300x300px minimum
- **Aspect Ratio:** 1:1 (square)
- **Location:** `image folder/PROFILE/`

### Gallery Images
- **Format:** JPG or PNG
- **Size:** 600x400px minimum
- **Aspect Ratio:** 3:2 (landscape)
- **Location:** `image folder/GALLERY/`

### Hero Image
- **Format:** JPG or PNG
- **Size:** 1200x800px minimum
- **Aspect Ratio:** 3:2 (landscape)
- **Location:** `image folder/barber-image/`

### Logo/Icon
- **Format:** PNG (transparent) or JPG
- **Size:** 200x200px minimum
- **Location:** `image folder/SHOP-ICON/`

---

## 🧪 Testing Checklist

After customizations, test these:

- [ ] All links work (book buttons, navigation, social)
- [ ] Images load correctly
- [ ] Mobile menu opens/closes
- [ ] Gallery lightbox works
- [ ] WhatsApp links open correctly
- [ ] Text is readable on mobile
- [ ] No broken image links
- [ ] Hover effects work
- [ ] Page loads without errors
- [ ] Footer year is current

---

## 🔧 Troubleshooting

### Images Not Loading
1. Check folder path spelling (case-sensitive)
2. Ensure files exist in correct folder
3. Use forward slashes in paths: `image folder/PROFILE/photo.jpg`

### WhatsApp Links Not Working
1. Replace `1234567890` with actual number
2. Include country code (e.g., +233)
3. Test on device with WhatsApp installed

### Hamburger Menu Not Showing
1. Check that `.hamburger { display: flex; }` is only in `@media (max-width: 768px)`
2. Make sure `script.js` is loaded correctly
3. Check browser console for errors

### Colors Not Changing
1. Clear browser cache (Ctrl+Shift+Delete)
2. Make sure CSS edits are saved
3. Refresh page (Ctrl+F5)

---

## 📱 Mobile Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- Tablet (both)

Check:
- Responsive layout
- Touch targets (buttons 48px+ tall)
- Text size readability
- Image loading
- Menu functionality

---

## 🚀 Before Going Live

1. ✅ Update all WhatsApp numbers
2. ✅ Add real contact information
3. ✅ Replace all placeholder text
4. ✅ Add high-quality images
5. ✅ Test on mobile devices
6. ✅ Check all links work
7. ✅ Verify email/social links
8. ✅ Test contact form flows
9. ✅ Browser compatibility test
10. ✅ Performance check (page load speed)

---

## 📚 File Reference

| File | Purpose | Edit For |
|------|---------|----------|
| `index.html` | Content structure | Text, links, barbers, gallery |
| `style.css` | Styling & layout | Colors, fonts, animations |
| `script.js` | Interactivity | Custom features, tracking |
| `README.md` | Documentation | Version history |

---

## 💡 Tips

- Always backup before major changes
- Use browser DevTools (F12) to debug
- Test changes in incognito/private mode
- Keep original images organized
- Use descriptive image names
- Comment out CSS to debug issues
- Test WhatsApp links on mobile

---

## ❓ Common Questions

**Q: Can I use a different domain?**
A: Yes! Upload files to any hosting and point your domain.

**Q: Can I add a booking system?**
A: Yes! Integrate with services like Calendly, Acuity, or Bookings.

**Q: Can I add a contact form?**
A: Yes! Use FormSubmit, Netlify Forms, or your hosting provider's form service.

**Q: How do I add payment?**
A: Integrate with Stripe, PayPal, or Square for payments.

---

## 📞 Support

For advanced customizations, consider hiring a web developer.

**Good luck with your barbershop website! 💈✂️**

