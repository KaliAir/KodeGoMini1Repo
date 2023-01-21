(function () {
    function scrollH(e){
      //Prevent scroll default
      e.preventDefault();
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.querySelector('.home-item1').scrollLeft -= (delta * 150);
    }
    if(document.querySelector('.home-item1').addEventListener){
      document.querySelector('.home-item1').addEventListener('mousewheel', scrollH, false);
      document.querySelector('.home-item1').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();
