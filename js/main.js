(function ($) {

    $.fn.textAnimation = function (options) {

        var settings = $.extend({
            classDiv: {
                class: "animeResult"
            },
            classAnimeRandom: {
                class: "red"
            },
            classAnimeScaled: {
                class: "scaled"
            },
            classAnimeRotate: {
                class: "rotated"
            },
            container: $('body'),
            animeTime: 0.2,
            randomTime: 200,
            onImageShow: function () {}

        }, options);


        var setup = {
            init: function ($el) {
                this.createSpan.apply(this, arguments);
            },

            createSpan: function ($el) {
                var setSpan = $el.html().replace(/./g, "<span>$&</span>"),
                    $box = $('<div/>').attr(settings.classDiv).appendTo(settings.container),
                    boxSpan = $box.html(setSpan),
                    elHtml = $el.html(boxSpan);
                $el.data("elHtml", elHtml);
                this.scrollable($el);
            },

            animateSpan: function ($el) {
                var arr = $el.data("elHtml").find('span').get();
                return (function random(arr) {
                    if (!arr.length) {
                        return;
                    }

                    if ($el.attr('data-animation') == 'random') {
                        var elem = arr.splice(Math.floor(Math.random() * arr.length), 1);
                        $(elem).attr(settings.classAnimeRandom);
                    } else if ($el.attr('data-animation') == 'scaled') {
                        elem = arr.splice(0, 1);
                        $(elem).attr(settings.classAnimeScaled);
                    } else if ($el.attr('data-animation') == 'rotate') {
                        elem = arr.splice(0, 1);
                        $(elem).attr(settings.classAnimeRotate);
                    }
                    setTimeout(function () {
                        random(arr);
                    }, settings.animeTime + Math.floor(Math.random() * settings.randomTime))
                }(arr));
            },

            scrollable: function ($el) {
                var self = this;
                if ($el.hasClass('antiscroll')) {
                    self.animateSpan($el);
                }
                $(window).scroll(function () {
                    if (($el.offset().top <= ($(window).scrollTop() + ($(window).height() / 2))) && (!($el.hasClass('antiscroll')))) {
                        self.animateSpan($el);
                    }
                });
            }
        };


        // initialize every element
        this.each(function () {
            setup.init($(this));
        });
        return this;
    };
}(jQuery));

$(document).ready(function () {
    $('.text0').textAnimation();
    $('.test1').textAnimation();
    $('.test2').textAnimation();
});
