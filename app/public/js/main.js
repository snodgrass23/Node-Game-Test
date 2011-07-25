$(document).ready(function(){

  var row = 0;
  var col = 0;

  var maxrows = 5;
  var maxcols = 5;
  
  var buildspeed = 200;
  
  var offset = 0;
  var piecewidth = 230;
  
  placePiece();

  function placePiece() {
    
    var pid = "r"+row+"c"+col;
    
    var top = piecewidth * row - offset;
    var left = piecewidth * col - offset;
    
    
    $("#gameboard").append('<div id="'+pid+'" class="piece"></div>').find("#"+pid).animate({top: top, left: left}, buildspeed, function() {
      if (col >= maxcols - 1) {
        row++
        col = 0
      }
      else {
        col++
      }
      
      if (row >= maxrows - 1) {
        // stop placing pieces
        $("#gameboard").draggable();
      }
      else {
        placePiece();
      }
      
    });
  }
  
  $("#zoomBtn").click(function(){
    $("#gameboard").toggleClass("zoomin");
  })


})