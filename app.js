  var $tasks = $('.task').length;
  console.log($tasks);
  $('.task').on('click',function(){
    $('.left').animate({
      "left":"4000px"
    },1500);
    
    $('.right').animate({
      "right":"4000px"
    },1500);

    $('.order').remove()
    $('.add-task').css('display','none');
    
    $('.menu-btn').css('display','table');
    $('.menu-icon').css('display','table-cell');
    $('.menu-btn').toggleClass('active');
    $('.menu-icon').toggleClass('active');

  });
  
/*$(function(){
var TimeLog = (function(){
  var nowTime = ;
  var goalTime = ;
  var remainingTime = ;
  var remainigDay= ;
  var halfYearDay;
  var halfYearTime;
  var deadLineDay;
  return{
    
    
    
    
    
  }
  
  var Animation(function(){
    
    
  })
})
})*/