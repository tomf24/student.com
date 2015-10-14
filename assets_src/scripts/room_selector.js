
var RoomSelector = function RoomSelector () {
    'use strict';

    this.init();
};

RoomSelector.prototype = {

    init : function init () {
        'use strict';

        this.bindEvents();
        this.loadImages();
    },

    loadImages : function loadImages () {
        'use strict';

        var header_img = new Image;
        header_img.onload = function () {
            $('#property-header').prepend('<img id="property-bg" class="property-bg" src="/images/property.jpg">');
            $('#property-bg').animate({
                "opacity": 0.5
            }, 500);
        }
        header_img.src = "/images/property.jpg";
    },

    /*
     * Bind UI events.
     */
    bindEvents : function bindEvents () {
        'use strict';

        /*
         * Selected room changed.
         * Animate transition between the previous and selected room content.
         */
        $('#select-room').on('change', function (e) {
            var selected_room; 

            selected_room = $(':selected', this).attr('value');

            $('#rooms > .l-room:visible').animate({
                "opacity": 0
            }, 500, function () {
                $(this).addClass('is-hidden');
                $('#' + selected_room).removeClass('is-hidden').css({"opacity": 0}).show().animate({
                    "opacity": 1
                }, 500);
            });
        });
        
    }
};

var rs = new RoomSelector();