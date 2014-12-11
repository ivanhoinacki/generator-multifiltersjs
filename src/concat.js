/*!
 * generator-multifiltersjs v0.0.4 (https://raw.githubusercontent.com/ivanhoinacki/multifiltersjs/master/dist/generator-multifiltersjs.min.js)
 * Copyright 2010-2014 ivanhoinacki
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
(function($) {
  "use strict";
  $.fn.multifilter = function(options) {
    var settings = $.extend( {
      'target'        : $('table'),
      'method'    : 'thead' // This can be thead or class
    }, options);

    jQuery.expr[":"].Equals = function(a, i, m) {
      return (a.textContent || a.innerText || "").toUpperCase() === m[3].toUpperCase();
    };

    this.each(function() {
      var $this = $(this);
      var container = settings.target;
      var row_tag = 'tr';
      var item_tag = 'td';
      var rows = container.find($(row_tag));

      if (settings.method === 'thead') {
        // Match the data-col attribute to the text in the thead
        var col = container.find('th:Equals(' + $this.data('col') + ')');
        var col_index = container.find($('thead th')).index(col);
      };

      if (settings.method === 'class') {
        // Match the data-col attribute to the class on each column
        var col = rows.first().find('td.' + $this.data('col') + '');
        var col_index = rows.first().find('td').index(col);
      };

      $this.change(function() {
        var filter = $this.val();
        rows.each(function() {
          var row = $(this);
          var cell = $(row.children(item_tag)[col_index]);
          if (filter) {
            if (cell.text().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
              cell.attr('data-filtered', 'positive');
            } else {
              cell.attr('data-filtered', 'negative');
            }
            if (row.find(item_tag + "[data-filtered=negative]").size() > 0) {
               row.hide();
            } else {
              if (row.find(item_tag + "[data-filtered=positive]").size() > 0) {
                row.show();
              }
            }
          } else {
            cell.attr('data-filtered', 'positive');
            if (row.find(item_tag + "[data-filtered=negative]").size() > 0) {
              row.hide();
            } else {
              if (row.find(item_tag + "[data-filtered=positive]").size() > 0) {
                row.show();
              }
            }
          }
        });
        return false;
      }).keyup(function() {
        $this.change();
      });
    });
  };
})(jQuery);