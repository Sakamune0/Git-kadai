// タブメニュー
$('.menu-btn').click(function(){
  var index = $('.menu-btn').index(this);
  $('.tab-content').removeClass('active');
  $('.tab-content').eq(index).addClass('active');
  $('.menu-btn').removeClass('active');
  $(this).addClass('active');
});