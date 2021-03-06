/*!
 * Start Bootstrap - Clean Blog v5.0.9 (https://startbootstrap.com/themes/clean-blog)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
 */
! function(o) {
    /* strickly apply this function in body, when element of defined class is clicked */
        "use strict";
        o("body").on("input propertychange",
            ".floating-label-form-group",
            function(i) {
                o(this).toggleClass("floating-label-form-group-with-value", !!o(i.target).val())
            }).on("focus", ".floating-label-form-group", function() {
            o(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function() {
            o(this).removeClass("floating-label-form-group-with-focus")
        });
        if (992 < o(window).width()) {
            var s = o("#mainNav").height();
            o(window).on("scroll", {
                previousTop: 0
    
            /* whenever the dist b/w div and top is less than what used to be, than remove the is-fixed and is-visible
            class from #mainNAv, and vice versa */
            }, function() {
                var i = o(window).scrollTop();
                i < this.previousTop ? 0 < i &&
                o("#mainNav").hasClass("is-fixed") ? o("#mainNav").addClass("is-visible") : o("#mainNav").removeClass("is-visible is-fixed") :
                i > this.previousTop && (o("#mainNav").removeClass("is-visible"),
                s < i && !o("#mainNav").hasClass("is-fixed") && o("#mainNav").addClass("is-fixed")),
                this.previousTop = i
            })
        }
    }(jQuery);