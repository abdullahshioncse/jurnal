# Anima Theme Integration for Journal3 OpenCart

Complete integration of the Anima theme design into Journal3 OpenCart theme.

## What's Included

### CSS Files
- **anima-main.css** - Merged and adapted stylesheet with all Anima styles
- **Original Anima CSS files** - desktop-1.css, desktop-2.css, desktop-3.css, desktop-4.css, globals.css, styleguide.css, iphone-13-u38-14-1.css

### Twig Templates

#### Common Templates
- **header.twig** - Complete header with:
  - RTL support (Arabic)
  - Info bar (delivery, returns, authenticity)
  - Sale banner
  - Header with logo, menu icons (profile, cart, wishlist, search)
  - Category navigation menu
  - Search overlay

- **footer.twig** - Complete footer with:
  - Newsletter subscription form
  - Payment icons (Visa, Mastercard, Apple Pay)
  - Three-column footer menu (Shop, Contact, Quick Links)
  - Copyright section

- **home.twig** - Homepage with:
  - Hero banner section
  - "You May Like" products section with carousel arrows
  - "New Arrivals" section with category tabs
  - Product grids

#### Product Templates
- **product_card.twig** - Reusable product card component with:
  - Product image
  - Wishlist button
  - Badge (New/Sale)
  - Product name and model
  - Price display (with special price support)
  - Add to cart button

- **category.twig** - Category page with:
  - Breadcrumb navigation
  - Category header with title and description
  - Filter and sort toolbar
  - Product grid
  - Pagination support

- **product.twig** - Product detail page with:
  - Breadcrumb navigation
  - Image gallery with thumbnails
  - Product information (name, model, price)
  - Stock status display
  - Product options (size, color, etc.)
  - Quantity selector
  - Add to cart and wishlist buttons
  - Product description
  - Related products section

## Features

### RTL Support
All templates are designed with RTL (Right-to-Left) support for Arabic language:
- Direction attribute set to 'rtl'
- Text alignment optimized for Arabic
- Layout adjusted for RTL reading

### Responsive Design
CSS includes responsive breakpoints for:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (<768px)
- Small mobile (<480px)

### OpenCart Integration
All templates maintain OpenCart/Journal3 compatibility:
- Uses OpenCart routing (index.php?route=...)
- Calls Journal3 JavaScript functions (cart.add(), wishlist.add())
- Supports dynamic product data
- Compatible with OpenCart variables and data structures

### Error-Free Code
All templates follow best practices:
- Use `|default()` filters for all variables
- Proper array checks with `is defined and is iterable`
- Safe iteration over arrays
- No "Array to string conversion" errors

## Installation

### 1. Copy Images
Images are NOT included in the repository. Copy all images from the Anima repository:

```bash
# Source: https://github.com/abdullahshioncse/anima/tree/main/img
# Destination: catalog/view/theme/journal3/image/anima/
```

See `catalog/view/theme/journal3/image/anima/README.md` for the complete list of required images.

### 2. Configure OpenCart
Update your OpenCart theme configuration to use the Anima templates:

#### Option A: Replace Default Templates
Back up existing templates, then use the Anima templates as your main templates.

#### Option B: Use as Alternative
Keep existing templates and selectively use Anima templates for specific pages.

### 3. Update CSS References
Ensure the CSS path in header.twig is correct for your installation:
```html
<link rel="stylesheet" href="catalog/view/theme/journal3/stylesheet/anima/anima-main.css" />
```

### 4. Configure Variables
Update template variables in your OpenCart controllers to match the expected data structure:

#### Header Variables
- `title` - Page title
- `description` - Meta description
- `keywords` - Meta keywords
- `styles` - Array of stylesheet objects: `[{href: '...', rel: 'stylesheet', media: 'screen'}]`
- `scripts` - Array of script URLs
- `analytics` - Array of analytics code snippets
- `logo` - Logo image URL
- `name` - Store name
- `home` - Homepage URL
- `categories` - Array of category objects: `[{name: '...', href: '...'}]`
- `account`, `cart`, `wishlist`, `search_action` - URLs for various actions
- `phone` - Store phone number

#### Footer Variables
- `footer_categories` - Array of category links
- `contact`, `privacy`, `returns`, `about`, `terms` - Information page URLs
- `newsletter_action` - Newsletter subscription URL
- `powered` - Copyright text

#### Home Variables
- `hero_title`, `hero_desc` - Hero banner text
- `shop_link`, `details_link` - Hero button URLs
- `featured_products` - Array of featured product objects
- `new_products` - Array of new product objects

#### Product Variables (for product_card.twig)
- `product.product_id` - Product ID
- `product.name` - Product name
- `product.model` - Product model
- `product.price` - Regular price
- `product.special` - Special/sale price
- `product.thumb` - Product image URL
- `product.href` - Product detail page URL
- `product.badge` - Custom badge text
- `product.new` - Boolean for new products

## Customization

### Changing Colors
Edit CSS variables in `anima-main.css`:
```css
:root {
  --anima-orange: #ff7c17;  /* Primary color */
  --anima-eerie-black: #1c1c1c;  /* Text color */
  /* ... other variables ... */
}
```

### Modifying Layout
Templates are well-commented and use semantic class names:
- `.anima-header` - Header section
- `.anima-footer` - Footer section
- `.anima-product-card` - Product card component
- `.anima-product-grid` - Product grid layout

### Adding New Sections
Follow the existing structure:
1. Add HTML in the appropriate .twig file
2. Use Anima CSS classes (`.anima-*`)
3. Add custom styles to `anima-main.css` if needed
4. Ensure RTL compatibility

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Images Not Showing
1. Check that images are copied to `catalog/view/theme/journal3/image/anima/`
2. Verify image paths in templates match your directory structure
3. Check file permissions

### CSS Not Loading
1. Verify CSS path in header.twig
2. Clear OpenCart cache
3. Check browser console for 404 errors

### Template Variables Not Working
1. Ensure controller is passing the correct data structure
2. Check variable names match between controller and template
3. Use `|default()` filters to provide fallback values

### RTL Issues
1. Verify `dir="rtl"` attribute is set on `<html>` tag
2. Check that Arabic fonts are loading
3. Ensure direction-specific CSS is not being overridden

## Support

For issues or questions about the Anima theme integration:
1. Check this README
2. Review the source Anima repository: https://github.com/abdullahshioncse/anima
3. Check OpenCart/Journal3 documentation

## Credits

- Original Anima Design: https://github.com/abdullahshioncse/anima
- Journal3 Theme: https://github.com/abdullahshioncse/jurnal
- OpenCart: https://www.opencart.com/

## License

This integration follows the same license as the source repositories.
