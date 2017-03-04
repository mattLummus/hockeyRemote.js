(function(){
    console.log('hockeyRemote init');
    
    if (!$) {
      fetch$();
      return;
    } // end if (!$)
    
    console.log('jQuery present.');
    main();
    
    function fetch$() {
      var interval;
      
      if (jQuery) {
        $ = jQuery;
        return;
      } // end if(jQuery)
      
      requestScript();
      setInterval(intervalFN, 250)
      
      function intervalFN() {
        if ($ || jQuery) {
          $      = $ || jQuery; // sets to self if self is present
          jQuery = $ || jQuery; // sets to other if other is present and self is null
        
          clearInterval(interval);
          main();
          return;
        } // end if ($ || jQuery)
      } // end function intervalFN
      
      function requestScript() {
        var e = document.createElement('script'), 
            s = 'https://code.jquery.com/jquery-latest.min.js');
        
            e.src = s;
            e.onload = function() {
              jQuery.noConflict();
              console.log('jQuery injected');
            };
  
            document.head.appendChild(e);
      } // end function requestScript();
    }  // end function fetch$
    
  function main() {
    var $scores = $('.nhl-scores').first(),
        $games  = $scores.find('ul').first().find('li').not(':first-child');
      
    console.log($games);
        
  }
})();
