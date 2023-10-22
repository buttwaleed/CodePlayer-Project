function outputpanel(){
    $("iframe").contents().find("html").html("<html><head><style  type='text/css'>" + $("#csspanel").val() + "</style><body>" + $("#htmlpanel").val() + "</body></html>");
    document.getElementById('outputpanel').contentWindow.eval($("#javascriptpanel").val());
  }
$('.toggle').mouseenter(function () {
    
      if ($(this).hasClass('active')) {
        $(this).addClass('hovered');
      }
      }
  ).mouseleave(function () {
      $(this).removeClass('hovered');
  }
      
  )

  $(document).ready(function (){
  $('.toggle').click(function (){
   $(this).toggleClass("active");
   var panelid =$(this).attr("id")+"panel";
   $("#"+panelid).toggleClass("hidden");
   var activity=4-$(".hidden").length;
   $(".panel").width(($(window).width()/activity)-10);
    
  }) 
});

$(".panel").height($(window).height()-$("#header").height()-15);
$(".panel").width(($(window).width()/2)-10);
 document.addEventListener("DOMContentLoaded", function() {
  
  $("textarea").on('change keyup paste', function() {
  outputpanel();
  saveCodeToLocalStorage();
  });
});
function saveCodeToLocalStorage() {
  localStorage.setItem('htmlCode', $("#htmlpanel").val());
  localStorage.setItem('cssCode', $("#csspanel").val());
  localStorage.setItem('jsCode', $("#javascriptpanel").val());
  localStorage.setItem('iframe', $("#outputpanel").val());
}


function loadCodeFromLocalStorage() {
  $("#htmlpanel").val(localStorage.getItem('htmlCode') || '');
  $("#csspanel").val(localStorage.getItem('cssCode') || '');
  $("#javascriptpanel").val(localStorage.getItem('jsCode') || '');
  $("#outputpanel").val(localStorage.getItem('iframe') || '')
}
$(document).ready(function (){
  loadCodeFromLocalStorage(); 

});