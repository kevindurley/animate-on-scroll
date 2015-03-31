(function ( $ ) {

    $.aniScroll = function(element, options) {

        var defaults = {

            percentageToBeVisible: 25

        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),  // reference to the jQuery version of DOM element the plugin is attached to
             element = element;     // reference to the actual DOM element

        var pictureCount = $element.find('img').length;

        $element.find('img').addClass('animated');


        var contentTop = $element.offset().top;
        var contentHeight = $element.height();
        var contentBottom = contentTop + contentHeight;
        var contentMiddle = contentTop + (contentHeight / 2);

        var visibleBrowserHeight = $( window ).height();
        var pageHeight = $( document ).height();

        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            // console.log(plugin.settings);

            $element.attr('data-ptobev', plugin.settings.percentageToBeVisible            );

            if (pictureCount == 0) {
                console.log('no img found. id - ' + $element.attr('id'));
            }
            else {

                doAnimate();

                // 
                $element.find('img').eq(0).show();

            }

            $( window ).bind('resize', function() {

                // re-get the browser height here as it will change on resize
                visibleBrowserHeight = $( window ).height();

            });

            $( window ).bind('scroll', function() {

                var top = $( window ).scrollTop();

                var isTopOfContentVisible = contentTop > top && contentTop < (top + visibleBrowserHeight);
                var isBottomOfContentVisible = (contentBottom) > top && contentBottom < (top + visibleBrowserHeight);

                if (isTopOfContentVisible) {
                    // top of content is visible
                    var pixelsVisible = (top + visibleBrowserHeight) - contentTop;
                    var percentageVisible = (pixelsVisible / contentHeight) * 100;
                    if (percentageVisible > plugin.settings.percentageToBeVisible) {
                        doAnimate();
                    }
                }
                else if (isBottomOfContentVisible) {
                    // bottom of content is visible
                    var pixelsVisible = contentBottom - top;
                    var percentageVisible = (pixelsVisible / contentHeight) * 100;
                    if (percentageVisible > plugin.settings.percentageToBeVisible) {
                        doAnimate();
                    }
                }
                else {
                    // doNothing
                }

            });  

        }

        // private method
        var doAnimate = function() {

            var top = $( window ).scrollTop();

            var startAnimatingTop = contentTop - visibleBrowserHeight + ((plugin.settings.percentageToBeVisible / 100) * contentHeight);
            var stopAnimatingTop = contentTop + (((100 - plugin.settings.percentageToBeVisible) * contentHeight) / 100);

            // console.log(startAnimatingTop + ' ' + stopAnimatingTop + ' ' + top);

            if (startAnimatingTop < 0) {
                startAnimatingTop = 0;
            }
            if (stopAnimatingTop < 0) {
                stopAnimatingTop = 0;
            }

            var pixelsToAnimate = stopAnimatingTop - startAnimatingTop;

            // console.log('pixelsToAnimate - ' + pixelsToAnimate);

            var percentageThruAnimate = Math.round(((top - startAnimatingTop) / (stopAnimatingTop - startAnimatingTop)) * 100);

            // console.log('percentageThruAnimate - ' + percentageThruAnimate);

            var imageIndex = Math.round((pictureCount - 1) * (percentageThruAnimate / 100));

            // console.log('xxxxxxxxxxxxxxxx' + imageIndex);
            
            $element.find('img').hide();
            $element.find('img').eq(imageIndex).show();

            // console.log('xxxxxxxxxxxxxxxx' + imageIndex + ' ' + $(theContainerDiv).find('img').eq(imageIndex).attr('src'));

        }

        // a public method. for demonstration purposes only - remove it!
        plugin.public_method = function() {

            // code goes here

        }

        plugin.init();

    }

    $.fn.aniScroll = function(options) {

        return this.each(function() {

            var plugin = new $.aniScroll(this, options);

            $(this).data('pluginName', plugin);

        });

    };

}( jQuery ));
