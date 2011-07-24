$(document).ready(function(){

  var row = 0
  var col = 0

  placePiece();

  function placePiece() {
    
    var pid = "r"+row+"c"+col;
    
    var top = 220 * row - 10;
    var left = 220 * col - 10;
    
    
    $("body").append('<div id="'+pid+'" class="piece"></div>').find("#"+pid).animate({top: top, left: left}, 150, function() {
      if (col >= 4) {
        row++
        col = 0
      }
      else {
        col++
      }
      
      if (row >= 4) {
        // stop placing pieces
      }
      else {
        placePiece();
      }
      
    });
  }


})