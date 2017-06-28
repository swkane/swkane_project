var cart = 0;
$('.cart').html(cart);

$('.buy-now').click(function() {
  $(this).html('ADDED TO CART');
  setTimeout(function() {
    $('.buy-now').html('BUY NOW!')
    }, 1000);
  cart ++;
  $('.cart').html(cart);
});

$('.product-detail').click(function() {
  $('.tab1').show();
  $('.tab2').hide();
  $('.tab3').hide();

});

$('.size').click(function() {
  $('.tab1').hide();
  $('.tab2').show();
  $('.tab3').hide();

});

$('.reviews').click(function() {
  $('.tab1').hide();
  $('.tab2').hide();
  $('.tab3').show();

});




// another way to do i found online, but don't understand
  // var that = this;
  // var text = $(this).html();
  // $(this).html("ADDED TO CART");
  // setTimeout(function(){
  //       //fade back
  //       $(that).html(text);
  //   }, 1000);
