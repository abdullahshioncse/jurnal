<?php echo $header; ?>

<div class="custom-sale-banner">حصل على خصم 20٪ قبل نهاية الشهر — تسوق الآن!</div>

<div class="container" style="margin-top:20px; direction:rtl;">
  <div class="row">
    <?php if ($products) { ?>
      <?php foreach ($products as $product) { ?>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="custom-product-card">
            <div class="image" style="background-image:url('<?php echo $product['thumb']; ?>'); background-size:cover; height:220px;"></div>
            <div class="info">
              <div class="product-name"><?php echo $product['name']; ?></div>
              <div class="product-price">
                <?php if ($product['special']) { ?>
                  <span style="text-decoration:line-through;opacity:.6;"><?php echo $product['price']; ?></span>
                  <span style="margin-right:8px;"><?php echo $product['special']; ?></span>
                <?php } else { echo $product['price']; } ?>
              </div>
              <button type="button" onclick="cart.add('<?php echo $product['product_id']; ?>');" class="add-to-cart-btn">أضف إلى السلة</button>
            </div>
          </div>
        </div>
      <?php } ?>
    <?php } else { ?>
      <div class="col-12">لا توجد منتجات لعرضها</div>
    <?php } ?>
  </div>
</div>

<?php echo $footer; ?>