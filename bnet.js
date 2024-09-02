
/* package table apply */
$(document).ready(function(){
    $("#tpack tr").hover(
      function() {
        $(this).animate({
          backgroundColor: "#f2f2f2"
        }, 'fast');
      }, 
      function() {
        $(this).animate({
          backgroundColor: "#ffffff"
        }, 'fast');
      }
    );
  });
  
  /* broadband service table apply */
  $(document).ready(function() {
    $('.tdf1').hover(
      function() {
        $(this).animate({
          'font-size': '1.1em',
          'margin-top': '-10px',
          'margin-bottom': '-10px'
        }, 'slow');
      },
      function() {
        $(this).animate({
          'font-size': '1em',
          'margin-top': '0px',
          'margin-bottom': '0px'
        }, 'slow');
      }
    );
  });
  /*Best BroadBand Service Provider, We have Perfect Package for you */
  $(document).ready(function() {
    $('.p1, .pgreen,.pvideo,plansgreen').animate({
        left: '0'
    }, 3000); 
  });
  
  function myform() {
    alert("The form was submitted");
  }
/* plans unlimited table code */
  $(document).ready(function(){
    $(".tablefplans tr").hover(
      function() {
        $(this).animate({
          backgroundColor: jQuery.Color( "#f2f2f2" )
        }, 500);
      }, 
      function() {
        $(this).animate({
          backgroundColor: jQuery.Color( "#ffffff" )
        }, 500); 
      }
    );
  });


  $(document).ready(function(){
    // Show the modal as soon as the page fully loads
    $("#welcomeModal").modal('show');
});
  
 