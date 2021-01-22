function textchange()
{
$(document).ready(function(){
    
    
    // Change text of button element
    $("#myButton").html("Hello sir How I acn Help You?");
});
}
$(document).ready(function(){
    // Set background image of a div on click of the button
    $("#bgimage").click(function(){
        var imageUrl = "resources/images/images1.jpg";
        $(".imagebox").css("background-image", "url(" + imageUrl + ")");
    });    
});
$(document).ready(function(){ 
    $('#delete').click(function(){ 
        $('#r2').remove(); 
     });
  });
  $(document).ready(function(){
    $("#mca").click(function(){
      $("#valuebox").val("MCA 3rd Semister");
    });
});
  
$(document).ready(function(){
    $("#abc").click(function(){
      $("#valuebox").val("abc");
    });
});
$(document).ready(function(){
    $("#def").click(function(){
      $("#valuebox").val("def");
    });
});
$(document).ready(function(){ 
    $("#classname").click(function() {
       var className = $(this).attr("class");
       $("#classnamevalue").html(" <h3>My class Name Is" +className +"</h3>" );
       // alert the class name
       
    });
    });