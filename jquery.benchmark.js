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
