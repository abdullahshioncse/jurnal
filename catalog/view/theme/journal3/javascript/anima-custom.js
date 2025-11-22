/**
 * Anima Theme - Custom JavaScript
 * Handles search overlay, carousels, gallery, and AJAX functionality
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initSearchOverlay();
    initCarousels();
    initImageGallery();
    initMobileMenu();
    initScrollToTop();
    initCategoryTabs();
    
  });

  /**
   * Search Overlay Toggle
   */
  function initSearchOverlay() {
    var searchTrigger = document.getElementById('search-trigger');
    var searchOverlay = document.getElementById('search-overlay');
    var searchClose = document.getElementById('search-close');
    
    if (searchTrigger && searchOverlay) {
      searchTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        searchOverlay.classList.add('active');
        // Focus on search input
        var searchInput = searchOverlay.querySelector('.search-input');
        if (searchInput) {
          setTimeout(function() {
            searchInput.focus();
          }, 100);
        }
      });
    }
    
    if (searchClose && searchOverlay) {
      searchClose.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
      });
    }
    
    // Close on overlay background click
    if (searchOverlay) {
      searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
          searchOverlay.classList.remove('active');
        }
      });
    }
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });
  }

  /**
   * Product Carousels
   */
  function initCarousels() {
    var carousels = document.querySelectorAll('.product-carousel');
    
    carousels.forEach(function(carousel) {
      var grid = carousel.querySelector('.product-grid');
      var prevBtn = document.querySelector('.prev-arrow[data-target="' + carousel.id + '"]');
      var nextBtn = document.querySelector('.next-arrow[data-target="' + carousel.id + '"]');
      var paginationContainer = carousel.querySelector('.carousel-pagination');
      
      if (!grid) return;
      
      var items = grid.querySelectorAll('.product-card');
      var itemsPerView = getItemsPerView();
      var currentIndex = 0;
      var totalPages = Math.ceil(items.length / itemsPerView);
      
      // Create pagination dots
      if (paginationContainer && totalPages > 1) {
        for (var i = 0; i < totalPages; i++) {
          var dot = document.createElement('span');
          dot.className = 'pagination-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('data-index', i);
          dot.addEventListener('click', function() {
            goToPage(parseInt(this.getAttribute('data-index')));
          });
          paginationContainer.appendChild(dot);
        }
      }
      
      function getItemsPerView() {
        var width = window.innerWidth;
        if (width < 768) return 2;
        if (width < 1024) return 3;
        return 4;
      }
      
      function updateCarousel() {
        var itemWidth = items[0] ? items[0].offsetWidth : 0;
        var gap = 32; // xl gap
        var scrollAmount = (itemWidth + gap) * itemsPerView * currentIndex;
        grid.style.transform = 'translateX(-' + scrollAmount + 'px)';
        grid.style.transition = 'transform 0.3s ease-in-out';
        
        // Update pagination
        var dots = paginationContainer ? paginationContainer.querySelectorAll('.pagination-dot') : [];
        dots.forEach(function(dot, index) {
          dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        if (prevBtn) {
          prevBtn.disabled = currentIndex === 0;
          prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        }
        if (nextBtn) {
          nextBtn.disabled = currentIndex >= totalPages - 1;
          nextBtn.style.opacity = currentIndex >= totalPages - 1 ? '0.5' : '1';
        }
      }
      
      function goToPage(index) {
        currentIndex = Math.max(0, Math.min(index, totalPages - 1));
        updateCarousel();
      }
      
      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          if (currentIndex > 0) {
            goToPage(currentIndex - 1);
          }
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          if (currentIndex < totalPages - 1) {
            goToPage(currentIndex + 1);
          }
        });
      }
      
      // Responsive handling
      var resizeTimer;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          itemsPerView = getItemsPerView();
          totalPages = Math.ceil(items.length / itemsPerView);
          currentIndex = 0;
          updateCarousel();
        }, 250);
      });
      
      // Initial update
      updateCarousel();
    });
  }

  /**
   * Image Gallery for Product Pages
   */
  function initImageGallery() {
    var thumbnails = document.querySelectorAll('.thumbnail-item');
    
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(function(thumb) {
          thumb.classList.remove('active');
        });
        // Add active class to clicked thumbnail
        this.classList.add('active');
      });
    });
  }

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    // Create mobile menu toggle if it doesn't exist
    var headerCenter = document.querySelector('.header-center');
    var navMenu = document.querySelector('.nav-menu');
    
    if (headerCenter && navMenu && window.innerWidth <= 767) {
      var toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-menu-toggle';
      toggleBtn.innerHTML = '☰';
      toggleBtn.setAttribute('aria-label', 'Toggle Menu');
      
      headerCenter.insertBefore(toggleBtn, navMenu);
      
      toggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!headerCenter.contains(e.target)) {
          navMenu.classList.remove('active');
        }
      });
    }
  }

  /**
   * Scroll to Top Button
   */
  function initScrollToTop() {
    var scrollBtn = document.querySelector('.scroll-top');
    
    if (scrollBtn) {
      // Show/hide button based on scroll position
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          scrollBtn.style.display = 'flex';
        } else {
          scrollBtn.style.display = 'none';
        }
      });
      
      // Scroll to top on click
      scrollBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Initial state
      scrollBtn.style.display = 'none';
    }
  }

  /**
   * Category Tabs Functionality
   */
  function initCategoryTabs() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        
        // Update active tab
        tabBtns.forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter products (if needed)
        // This would typically be handled by AJAX or server-side filtering
        console.log('Filter by category:', category);
      });
    });
  }

  /**
   * Quick View Functionality
   */
  window.quickView = function(productId) {
    console.log('Quick view for product:', productId);
    // Implement AJAX quick view modal here
    // This would typically load product details in a modal
  };

  /**
   * Wishlist Add Handler
   */
  if (typeof window.wishlist === 'undefined') {
    window.wishlist = {
      add: function(productId) {
        console.log('Add to wishlist:', productId);
        // AJAX call to add product to wishlist
        if (typeof $ !== 'undefined') {
          $.ajax({
            url: 'index.php?route=account/wishlist/add',
            type: 'post',
            data: 'product_id=' + productId,
            dataType: 'json',
            success: function(json) {
              if (json['success']) {
                alert(json['success']);
              }
              if (json['error']) {
                alert(json['error']);
              }
            }
          });
        }
      }
    };
  }

  /**
   * Compare Add Handler
   */
  if (typeof window.compare === 'undefined') {
    window.compare = {
      add: function(productId) {
        console.log('Add to compare:', productId);
        // AJAX call to add product to compare
        if (typeof $ !== 'undefined') {
          $.ajax({
            url: 'index.php?route=product/compare/add',
            type: 'post',
            data: 'product_id=' + productId,
            dataType: 'json',
            success: function(json) {
              if (json['success']) {
                alert(json['success']);
              }
            }
          });
        }
      }
    };
  }

  /**
   * Cart Add Handler
   */
  if (typeof window.cart === 'undefined') {
    window.cart = {
      add: function(productId, quantity) {
        quantity = quantity || 1;
        console.log('Add to cart:', productId, 'Qty:', quantity);
        
        // AJAX call to add product to cart
        if (typeof $ !== 'undefined') {
          $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: 'product_id=' + productId + '&quantity=' + quantity,
            dataType: 'json',
            beforeSend: function() {
              // Show loading indicator
            },
            success: function(json) {
              if (json['success']) {
                alert(json['success']);
                // Update cart total
                $('#cart').load('index.php?route=common/cart/info');
              }
              if (json['error']) {
                alert(json['error']);
              }
            },
            complete: function() {
              // Hide loading indicator
            }
          });
        }
      }
    };
  }

  /**
   * Product Tabs Navigation
   */
  var tabLinks = document.querySelectorAll('.nav-tabs a');
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      
      // Update active tab
      document.querySelectorAll('.nav-tabs li').forEach(function(li) {
        li.classList.remove('active');
      });
      this.parentElement.classList.add('active');
      
      // Show target pane
      document.querySelectorAll('.tab-pane').forEach(function(pane) {
        pane.classList.remove('active');
      });
      var targetPane = document.querySelector(target);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

})();
