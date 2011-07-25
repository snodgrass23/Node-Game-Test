$(document).ready(function(){

  var row = 1;
  var col = 1;

  var maxrows = 7;
  var maxcols = 4;
  
  var buildspeed = 100; // ms per piece
  
  var offset = 250;
  var piecewidth = 370;  // 375 for gaps
  var pieceheight = 107; // 110 for gaps
  
  placePiece();

  function placePiece() {
    
    var pid = "r"+row+"c"+col;
    
    var top = pieceheight * row - offset;
    var oddoffset = (row === 0 || row % 2 > 0) ? 0 : 1;
    var left = (piecewidth * col - offset) + (oddoffset * piecewidth/2);
    
    
    $("#gameboard").append('<div id="'+pid+'" class="piece"></div>').find("#"+pid).animate({top: top, left: left}, buildspeed, function() {
      if (col >= maxcols - 1) {
        row++
        col = 0
      }
      else {
        col++
      }
      
      if (row > maxrows) {
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