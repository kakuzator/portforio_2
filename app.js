  //アニメーション
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

    $('.js-click-add-task').on('click',function(){
    $('.set-goal').css('display','block');
    $('.modal').css('display','block');
  });

    $('.js-click-modal').on('click',function(){
      $('.modal').css('display','none');
      $('.set-goal').css('display','none');
    });


$('.js-click-recording').on('click',function(){
  $('.recording-block').slideToggle();
})




  //カレンダー
  $(function(){
    var date = new Date();
    var nowYear = date.getFullYear();
    var nowMonth = date.getMonth();
    var nowDay = date.getDate();
    var weekday = ['月','火','水','木','金','土','日'];
    
      function callender(){
        
        
        
      }
    
  })();




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