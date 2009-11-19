// John Resig's JavaScript Micro-Templating
// http://ejohn.org/blog/javascript-micro-templating/
// customized to cache template function by Brian Landau
(function($){
  $.fn.microtmpl = function(data){
    var fn;
    if ($.microtmpl.cache[this.selector]){
      fn = $.microtmpl.cache[this.selector];
    } else {
      fn = $.microtmpl(this.html());
      $.microtmpl.cache[this.selector] = fn;
    }
    
    return data ? fn( data ) : fn;
  };
  
  $.microtmpl = function (str, data){
    var fn = new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +
      
      // Introduce the data as local variables using with(){}
      "with(obj){p.push('" +
      
      // Convert the template into pure JavaScript
      str
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'")
    + "');}return p.join('');");
    
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
  
  $.microtmpl.cache = {};
})(jQuery);
