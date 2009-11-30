// based on methodology developed by PPK:
// http://www.quirksmode.org/blog/archives/2009/08/when_to_read_ou.html
(function($){
$.benchmark = function(times, result_selector, func){
  var startTime = new Date().getTime();
  
  while (times != 0){
    func();
    times--;
  }

  setTimeout(function () {
    var endTime = new Date().getTime();
    var result = (endTime-startTime)/1000;
    $(result_selector).html(result);
  },10);
};
})(jQuery);
