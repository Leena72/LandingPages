  //------------progree bar--
                
  var i = 0;

  function ll_move(ll_class) {
      if (i == 0) {
      i = 1;
      var elem = $('.' + ll_class).children('div')
      var elem1 =$('.' + ll_class +' ' + "p:first-child")
      var percent= parseInt($(elem1).attr('percent'))
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= percent) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          $.each($(elem),function(_,e){
              $(e).css({'width': width+ "%"})
          })
          // $(elem).css({'width': width+ "%"})
          $(elem1).html( width  + "%") 
          console.log("elem",elem)
        }
      }
    }
  }
  
  