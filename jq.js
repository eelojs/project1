const btt=$('#back-to-top');
$(window).scroll(function(){
  console.log('top',$(window).scrollTop())
  if($(window).scrollTop() > 300){
    btt.addClass('visible');
  }else{
    btt.removeClass('visible')
  }
})
btt.click(function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0},500);
})
