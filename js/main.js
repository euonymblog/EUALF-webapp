$( document ).ready(function(){

  $(".events").hide();

  $(".date2jun").on("click", function(){
    $(".events2jun").slideToggle("slow");
  });

  $(".date3jun").on("click", function(){
    $(".events3jun").slideToggle("slow");
  });

  $(".date4jun").on("click", function(){
    $(".events4jun").slideToggle("slow");
    });

  $(".date5jun").on("click", function(){
    $(".events5jun").slideToggle("slow");
    });

  $(".date6jun").on("click", function(){
    $(".events6jun").slideToggle("slow");
    });


});
$( document ).ready(function(){
var $elementList = $('#myUL').find('li');
  $('#searchInput').keyup(function(eve){
		  searchString=$(this).val().toLowerCase();
  searchArray=searchString.split(' ');
  var len = searchArray.length;
  $elementList.each(function(index,elem){
        $eleli = $(elem)
        $eleli.removeClass('hideThisLine');
        var oneLine = $eleli.text().toLowerCase()
        match = true,
        sal = len;
        while(sal--){
          if( oneLine.indexOf( searchArray[sal] ) == -1 ){
            match = false;
          }
        }
        if(!match){
          //console.log('this one is gets hidden',searchString);
          $eleli.addClass('hideThisLine');
        }
      });
      $('.dontShow').removeClass('dontShow');
      $('.hideThisLine').addClass('dontShow');
    });
  $('#clearSearch').click(function (){
    window.location.href=window.location.href;
  });
});
