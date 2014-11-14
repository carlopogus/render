(function($) {
  $.fn.render = function($vars) {

    /**
     * This guy is a theme function to return some markup.
     */
    function t(options) {
      // Default options.
      var defaults = {
          el: "p",
          html: "&nbsp;",
          attrs: {}
        }
        // If no option supplied, use default.
      for (var i in defaults) {
        if (typeof options[i] === 'undefined') {
          options[i] = defaults[i];
        }
      }
      // The variables we will use in our markup.
      var attrStr = '',
        content = options.html,
        el = options.el,
        html = options.html,
        attrs = options.attrs;
      // If there are attributes, iterate over them
      // and concat them into a single string.
      if (typeof attrs == 'object') {
        $.each(attrs, function(i, val) {
          var attr = ' ' + i + '=\"' + val + '\"';
          attrStr += attr;
        });
      }
      /**
       * Run the t function on nested html.
       * Returns a string of html.
       */
      function nestedHTML(html) {
        var newHtml = '';
        $.each(html, function(i, val) {
          newHtml += t(val);
        });
        return newHtml;
      }
      // If html is and object then run nestedHTML function on it.
      if (typeof html == 'object') {
        html = nestedHTML(html);
      }
      // Different markup for img tags.
      if (el === 'img') {
        return '<' + el + attrStr + '>';
      }
      // Return the html element.
      return '<' + el + attrStr + '>' + html + '</' + el + '>';
    }
    // Append the markup to the element.
    return this.each(function() {
      
      var $markup = '';
      
      $.each($vars, function(i,v){
        $markup += t(v);
      });

      $(this).append($markup);

    });
  }
})(jQuery);