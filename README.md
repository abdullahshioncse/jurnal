# Journal3 Anima Theme

A complete, production-ready Anima theme integration for OpenCart Journal3 with modern design, RTL Arabic support, and full responsive layout.

## 🚀 Quick Start

This repository contains a complete theme implementation ready to use with OpenCart Journal3.

### Prerequisites

- OpenCart 3.x or higher
- Journal3 theme installed
- PHP 7.2 or higher
- Modern web browser

### Installation

1. **Clone or Download** this repository
   ```bash
   git clone https://github.com/abdullahshioncse/jurnal.git
   ```

2. **Copy Theme Files** to your OpenCart installation
   ```
   Copy: catalog/view/theme/journal3/
   To:   [your-opencart]/catalog/view/theme/journal3/
   ```

3. **Add Image Assets**
   - Navigate to `catalog/view/theme/journal3/image/anima/`
   - Follow instructions in README.md to add required icons and images
   - Required: SVG icons for navigation, payment logos

4. **Clear OpenCart Cache**
   - Admin Panel → Dashboard → Clear Cache (cog icon)
   - Clear both System and Image cache

5. **View Your Site**
   - The theme will automatically be applied through Journal3
   - All templates override default OpenCart/Journal3 templates

## 📁 What's Included

### Templates (Twig)
- ✅ **Header** - Info bar, sale banner, navigation, search overlay
- ✅ **Footer** - Newsletter, payment icons, 3-column menu, copyright
- ✅ **Homepage** - Hero banner, featured products, new arrivals
- ✅ **Product Card** - Reusable component with wishlist, badges
- ✅ **Category Page** - Breadcrumbs, filters, product grid, pagination
- ✅ **Product Detail** - Gallery, options, quantity, tabs, related products

### Stylesheets (CSS)
- ✅ **globals.css** - CSS variables, colors, spacing, utilities
- ✅ **styleguide.css** - Typography, buttons, forms, design tokens
- ✅ **anima-core.css** - Header, footer, navigation, hero banner
- ✅ **anima-components.css** - Products, breadcrumbs, filters, gallery
- ✅ **anima-responsive.css** - Mobile/tablet breakpoints, touch optimization

### JavaScript
- ✅ **anima-custom.js** - Search overlay, carousels, gallery, AJAX handlers

### Documentation
- ✅ Complete installation guide
- ✅ Customization instructions
- ✅ Image asset requirements
- ✅ Troubleshooting tips

## ✨ Features

### Design
- 🎨 Modern, clean aesthetic with Poppins font
- 📱 Fully responsive (desktop, tablet, mobile)
- 🌍 RTL support for Arabic languages
- ♿ Accessible with ARIA labels
- 🎯 Touch-optimized for mobile devices

### Functionality
- 🛒 AJAX add to cart (no page reload)
- ❤️ Wishlist integration
- 🔍 Search overlay with keyboard support
- 📊 Product filtering and sorting
- 🖼️ Image gallery with thumbnails
- 📦 Product options (size, color, etc.)
- ⭐ Rating and review system
- 🎠 Product carousels with pagination

### Code Quality
- ✅ No array-to-string conversion errors
- ✅ All variables properly checked (`is defined`, `is iterable`, `|default()`)
- ✅ Clean, commented code
- ✅ Modular CSS architecture
- ✅ Cross-browser compatible
- ✅ No PHP warnings or Twig errors

## 📖 Documentation

Detailed documentation is available in:
- [`catalog/view/theme/journal3/README.md`](catalog/view/theme/journal3/README.md) - Complete theme documentation
- [`catalog/view/theme/journal3/image/anima/README.md`](catalog/view/theme/journal3/image/anima/README.md) - Image asset requirements

## 🎨 Customization

### Change Colors

Edit `catalog/view/theme/journal3/stylesheet/anima/globals.css`:

```css
:root {
  --color-primary: #000000;      /* Change to your brand color */
  --color-accent: #ff6b6b;       /* Change accent color */
}
```

### Change Fonts

1. Edit `anima-core.css` to import your preferred Google Font
2. Update `--font-family-primary` in `globals.css`

### Modify Layout

Adjust spacing variables in `globals.css`:
```css
:root {
  --spacing-lg: 24px;  /* Increase/decrease as needed */
  --spacing-xl: 32px;
}
```

## 🖼️ Required Images

The theme requires the following images in `catalog/view/theme/journal3/image/anima/`:

**Icons (SVG):**
- iconly-sharp-search.svg
- iconly-sharp-profile.svg
- iconly-sharp-heart.svg
- iconly-sharp-bag.svg
- iconly-sharp-call.svg
- iconly-sharp-show.svg
- iconly-sharp-paper.svg
- iconly-sharp-delivery.svg
- iconly-sharp-shield-done.svg

**Payment Logos (SVG/PNG):**
- visa.svg
- mastercard.svg
- applepay.svg

**Optional:**
- placeholder-product.jpg (500x500px)
- hero-banner.jpg (1920x600px)

See the [Image README](catalog/view/theme/journal3/image/anima/README.md) for alternatives and specifications.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 🔧 Troubleshooting

### Theme not showing?
1. Clear OpenCart cache (Admin → Dashboard → Clear Cache)
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Verify Journal3 theme is active

### Images not displaying?
1. Check files exist in `image/anima/` directory
2. Verify file names match exactly (case-sensitive)
3. Clear image cache in OpenCart admin

### JavaScript not working?
1. Check browser console for errors
2. Ensure jQuery is loaded (required for OpenCart)
3. Verify `anima-custom.js` path is correct

See the [full troubleshooting guide](catalog/view/theme/journal3/README.md#troubleshooting) for more help.

## 📦 Repository Structure

```
jurnal/
├── catalog/view/theme/journal3/    # Main theme directory
│   ├── template/
│   │   ├── common/                 # Header, footer, home templates
│   │   └── product/                # Product card, category, detail
│   ├── stylesheet/anima/           # All CSS files
│   ├── javascript/                 # Theme JavaScript
│   ├── image/anima/                # Icons and images
│   └── README.md                   # Theme documentation
├── template/                       # Original templates (for reference)
├── stylesheet/                     # Original stylesheets
└── js/                            # Original JavaScript
```

## 🤝 Contributing

This is a theme integration project. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with OpenCart Journal3
5. Submit a pull request

## 📄 License

This theme integration is provided as-is for use with OpenCart Journal3. Ensure you have appropriate licenses for:
- OpenCart (GNU General Public License)
- Journal3 theme (commercial license required)
- Any fonts, icons, or images you use

## 🙏 Credits

- **Design System**: Anima
- **Font**: Poppins by Google Fonts
- **Icons**: Iconly Sharp (or compatible alternatives)
- **Framework**: OpenCart Journal3

## 📞 Support

For issues or questions:
1. Check the [theme documentation](catalog/view/theme/journal3/README.md)
2. Review [image requirements](catalog/view/theme/journal3/image/anima/README.md)
3. Open an issue on GitHub
4. Contact the repository maintainer

## 🎯 Next Steps

After installation:
1. ✅ Copy all theme files to OpenCart
2. ✅ Add required image assets
3. ✅ Clear cache
4. ✅ Customize colors to match your brand
5. ✅ Add your products and test all features
6. ✅ Test on mobile devices
7. ✅ Enable RTL if needed for Arabic support

Enjoy your new Anima theme! 🎉
