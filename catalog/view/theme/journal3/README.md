# Anima Theme for OpenCart Journal3

A complete, production-ready theme integration for OpenCart Journal3 with modern design, RTL support, and full responsiveness.

## Features

✅ **Complete Theme Integration**
- Professional header with info bar and sale banner
- Multi-column footer with newsletter subscription
- Hero banner section
- Featured products carousel
- Category pages with filters and sorting
- Product detail pages with image gallery
- Reusable product card component

✅ **RTL (Right-to-Left) Support**
- Full Arabic language support
- Proper text direction handling
- Mirrored layouts for RTL languages

✅ **Responsive Design**
- Desktop (1024px+)
- Tablet (768px-1024px)
- Mobile (320px-767px)
- Touch-optimized for mobile devices

✅ **OpenCart Compatible**
- Works with OpenCart Journal3
- Maintains all OpenCart functionality
- AJAX cart, wishlist, and compare
- Product filters and search
- No PHP warnings or Twig errors

✅ **Modern Design**
- Poppins font family
- Clean, minimal aesthetic
- Smooth animations and transitions
- Accessible and user-friendly

## Directory Structure

```
catalog/view/theme/journal3/
├── template/
│   ├── common/
│   │   ├── header.twig       # Complete header with navigation
│   │   ├── footer.twig       # Footer with newsletter
│   │   └── home.twig         # Homepage template
│   └── product/
│       ├── product_card.twig # Reusable product card
│       ├── category.twig     # Category listing page
│       └── product.twig      # Product detail page
├── stylesheet/anima/
│   ├── globals.css           # CSS variables and base styles
│   ├── styleguide.css        # Typography and design system
│   ├── anima-core.css        # Core theme styles
│   ├── anima-components.css  # Component styles
│   └── anima-responsive.css  # Responsive breakpoints
├── javascript/
│   └── anima-custom.js       # Theme JavaScript
└── image/anima/
    └── README.md             # Image assets documentation
```

## Installation

### Step 1: Upload Theme Files

1. Upload the entire `catalog/view/theme/journal3/` directory to your OpenCart installation
2. Ensure all files maintain their directory structure

### Step 2: Add Image Assets

1. Navigate to `catalog/view/theme/journal3/image/anima/`
2. Read the README.md file for a list of required images
3. Download or create the following assets:
   - Icon SVG files (search, cart, wishlist, etc.)
   - Payment logos (Visa, Mastercard, Apple Pay)
   - Placeholder images (optional)
4. Place all image files in the `image/anima/` directory

### Step 3: Configure OpenCart

1. Log in to your OpenCart admin panel
2. Go to Extensions > Extensions > Themes
3. Select "Journal3" theme
4. The Anima theme templates will automatically override default templates

### Step 4: Clear Cache

1. Go to Dashboard > Clear Cache (cog icon in top right)
2. Clear both System Cache and Image Cache
3. Refresh your store's frontend

## Customization

### Colors

Edit `catalog/view/theme/journal3/stylesheet/anima/globals.css`:

```css
:root {
  --color-primary: #000000;      /* Primary color (black) */
  --color-secondary: #ffffff;    /* Secondary color (white) */
  --color-accent: #ff6b6b;       /* Accent color (red) */
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-border: #e5e5e5;
}
```

### Fonts

The theme uses Google Fonts (Poppins). To change the font:

1. Edit `catalog/view/theme/journal3/stylesheet/anima/anima-core.css`
2. Update the `@import` statement at the top
3. Update `--font-family-primary` in `globals.css`

### Layout

Modify spacing by editing variables in `globals.css`:

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

## Template Variables

### Header Template

The header template expects the following variables from OpenCart:

- `title` - Page title
- `base` - Base URL
- `logo` - Logo image URL
- `home` - Homepage URL
- `cart` - Cart URL
- `wishlist` - Wishlist URL
- `account` - Account URL
- `cart_total` - Number of items in cart
- `journal3_header_menu` - Journal3 header menu HTML

### Product Card Template

Pass products with these properties:

```twig
{% include 'catalog/view/theme/journal3/template/product/product_card.twig' with {
  'product': {
    'product_id': '123',
    'name': 'Product Name',
    'href': 'product-url',
    'thumb': 'image-url',
    'price': '$99.99',
    'special': '$79.99',  # Optional
    'model': 'PRD-123',
    'rating': 4,
    'reviews': '15'
  }
} %}
```

## JavaScript Functionality

The theme includes the following JavaScript features:

### Search Overlay
- Click search icon to open overlay
- Press ESC or click background to close
- Auto-focus on search input

### Product Carousels
- Automatic pagination
- Responsive item count
- Touch-friendly navigation

### Image Gallery
- Click thumbnails to change main image
- Active thumbnail highlighting

### Mobile Menu
- Hamburger menu on mobile devices
- Click outside to close

### AJAX Features
- Add to cart without page reload
- Add to wishlist
- Add to compare
- Quick view (extensible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Accessibility

- Semantic HTML5 markup
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast mode support
- Reduced motion support
- Touch-friendly tap targets (44px minimum)

## RTL Support

The theme includes comprehensive RTL support for Arabic and other RTL languages:

1. Direction automatically detected from OpenCart settings
2. Layouts mirror correctly (navigation, cart badge, etc.)
3. Text alignment adjusts automatically
4. Carousel navigation reverses for RTL

## Performance Optimization

### CSS
- Modular CSS architecture
- CSS variables for easy customization
- Minimal selector specificity
- Optimized for fast rendering

### JavaScript
- Vanilla JavaScript (no jQuery dependency for theme code)
- Event delegation where possible
- Debounced resize handlers
- Minimal DOM manipulation

### Images
- Use SVG for icons (scalable, small file size)
- Lazy loading support ready
- Responsive images with srcset
- WebP format recommended

## Troubleshooting

### Images Not Showing

1. Check that image files exist in `catalog/view/theme/journal3/image/anima/`
2. Verify file names match exactly (case-sensitive)
3. Clear image cache in OpenCart admin

### Styles Not Applying

1. Clear browser cache (Ctrl+F5)
2. Clear OpenCart cache
3. Check that CSS files are loading (browser dev tools)
4. Verify file paths are correct

### JavaScript Not Working

1. Check browser console for errors
2. Ensure jQuery is loaded (required for AJAX)
3. Verify `anima-custom.js` is loading
4. Check that DOM is fully loaded before scripts run

### Layout Issues

1. Check for conflicting CSS from other extensions
2. Verify Journal3 theme is properly installed
3. Test in browser incognito mode
4. Check responsive breakpoints match your needs

## Support

For issues specific to this theme integration:

1. Check the README files in each directory
2. Review template variable checks (all use `is defined`, `is iterable`, `|default()`)
3. Verify OpenCart and Journal3 are up to date
4. Check browser console for JavaScript errors

## Credits

- **Font**: Poppins by Google Fonts
- **Icons**: Iconly Sharp icon set (or compatible alternatives)
- **Design**: Based on Anima design system

## License

This theme integration is provided as-is for use with OpenCart Journal3. Ensure you have appropriate licenses for all fonts, icons, and images used.

## Changelog

### Version 1.0.0 (Initial Release)
- Complete header with info bar and sale banner
- Full footer with newsletter subscription
- Homepage with hero banner and product carousels
- Category page with filters and sorting
- Product detail page with gallery and tabs
- Reusable product card component
- Comprehensive CSS with responsive design
- JavaScript for interactive features
- RTL support for Arabic
- Full documentation
