# Quick Installation Guide - Anima Theme

## Step-by-Step Installation

### 1. Download Theme
```bash
git clone https://github.com/abdullahshioncse/jurnal.git
cd jurnal
```

Or download as ZIP and extract.

### 2. Copy Files to OpenCart

Copy the theme directory to your OpenCart installation:

```bash
# If your OpenCart is in /var/www/html/opencart
cp -r catalog/view/theme/journal3/* /var/www/html/opencart/catalog/view/theme/journal3/
```

Or manually:
- Copy: `catalog/view/theme/journal3/`
- To: `[OpenCart-Root]/catalog/view/theme/journal3/`

### 3. Add Required Images

Navigate to: `catalog/view/theme/journal3/image/anima/`

**Required Icon Files (SVG format):**

Download from Iconly Sharp or similar icon sets:

- `iconly-sharp-search.svg` → Search icon
- `iconly-sharp-profile.svg` → User profile icon
- `iconly-sharp-heart.svg` → Wishlist icon
- `iconly-sharp-bag.svg` → Shopping cart icon
- `iconly-sharp-call.svg` → Phone icon
- `iconly-sharp-show.svg` → Eye/view icon
- `iconly-sharp-paper.svg` → Document/returns icon
- `iconly-sharp-delivery.svg` → Delivery truck icon
- `iconly-sharp-shield-done.svg` → Shield/security icon

**Payment Logos:**

Download official logos:

- `visa.svg` → Visa logo
- `mastercard.svg` → Mastercard logo
- `applepay.svg` → Apple Pay logo

**Alternative Icon Sources:**
- https://iconly.io/
- https://feathericons.com/
- https://heroicons.com/
- https://fontawesome.com/

### 4. Clear OpenCart Cache

**Method 1: Admin Panel**
1. Log into OpenCart admin
2. Click the blue cog wheel icon (top right)
3. Select "Clear Cache"

**Method 2: File System**
```bash
rm -rf [OpenCart-Root]/system/storage/cache/*
rm -rf [OpenCart-Root]/image/cache/*
```

### 5. Verify Installation

Visit your store's frontend. You should see:

✅ Info bar at top (Easy Returns, Free Delivery, 100% Authentic)
✅ Sale banner below info bar
✅ Updated header with icons
✅ Search overlay (click search icon)
✅ Updated footer with newsletter
✅ Hero banner on homepage
✅ Product carousels with navigation arrows

### 6. Customize (Optional)

**Change Colors:**

Edit: `catalog/view/theme/journal3/stylesheet/anima/globals.css`

```css
:root {
  --color-primary: #000000;    /* Your brand color */
  --color-accent: #ff6b6b;     /* Accent color */
}
```

**Change Font:**

Edit: `catalog/view/theme/journal3/stylesheet/anima/anima-core.css`

```css
/* Change the import URL */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');
```

Then edit: `globals.css`

```css
:root {
  --font-family-primary: 'YourFont', sans-serif;
}
```

## Troubleshooting

### Images Not Showing
**Problem:** Icons or images don't display

**Solution:**
1. Check file names match exactly (case-sensitive)
2. Verify files exist in `image/anima/` directory
3. Clear image cache
4. Check file permissions (should be readable)

### Styles Not Applied
**Problem:** Theme looks broken or default

**Solution:**
1. Hard refresh browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear OpenCart cache
3. Check browser console for CSS loading errors
4. Verify file paths are correct

### JavaScript Not Working
**Problem:** Search overlay, carousels not working

**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify jQuery is loaded (OpenCart includes it)
4. Ensure `anima-custom.js` is loading
5. Check file path: `catalog/view/theme/journal3/javascript/anima-custom.js`

### Layout Broken on Mobile
**Problem:** Mobile view not responsive

**Solution:**
1. Check viewport meta tag in header (should be present)
2. Verify `anima-responsive.css` is loading
3. Test in browser's device emulation mode
4. Clear cache and hard refresh

### RTL Not Working
**Problem:** Arabic/RTL layout not mirroring

**Solution:**
1. Set language direction in OpenCart admin
2. Verify `[dir="rtl"]` styles in CSS
3. Clear cache
4. Test with RTL language pack

## File Checklist

After installation, verify these files exist:

**Templates:**
- ✅ `catalog/view/theme/journal3/template/common/header.twig`
- ✅ `catalog/view/theme/journal3/template/common/footer.twig`
- ✅ `catalog/view/theme/journal3/template/common/home.twig`
- ✅ `catalog/view/theme/journal3/template/product/product_card.twig`
- ✅ `catalog/view/theme/journal3/template/product/category.twig`
- ✅ `catalog/view/theme/journal3/template/product/product.twig`

**Stylesheets:**
- ✅ `catalog/view/theme/journal3/stylesheet/anima/globals.css`
- ✅ `catalog/view/theme/journal3/stylesheet/anima/styleguide.css`
- ✅ `catalog/view/theme/journal3/stylesheet/anima/anima-core.css`
- ✅ `catalog/view/theme/journal3/stylesheet/anima/anima-components.css`
- ✅ `catalog/view/theme/journal3/stylesheet/anima/anima-responsive.css`

**JavaScript:**
- ✅ `catalog/view/theme/journal3/javascript/anima-custom.js`

**Images:**
- ✅ All icon SVG files in `catalog/view/theme/journal3/image/anima/`
- ✅ Payment logo files

## Quick Test

After installation, test these features:

1. **Search** - Click search icon, overlay should appear
2. **Navigation** - Hover over menu items
3. **Product Cards** - Hover shows quick view button
4. **Add to Cart** - Click should work via AJAX
5. **Wishlist** - Click heart icon
6. **Mobile Menu** - Resize browser, check mobile layout
7. **Responsive** - Test on mobile device or emulator
8. **RTL** - If using Arabic, check text direction

## Need Help?

1. Read the full documentation: `catalog/view/theme/journal3/README.md`
2. Check image requirements: `catalog/view/theme/journal3/image/anima/README.md`
3. Review main README: `README.md`
4. Open an issue on GitHub
5. Check browser console for errors

## Success!

If everything works, you should have:
- ✅ Modern, clean design
- ✅ Responsive layout
- ✅ Working search, cart, wishlist
- ✅ Product carousels
- ✅ Image galleries
- ✅ RTL support (if needed)

Congratulations! Your Anima theme is now installed. 🎉

## Next Steps

1. Add your products
2. Customize colors to match your brand
3. Add your logo
4. Configure payment methods
5. Set up shipping options
6. Test checkout process
7. Launch your store!
