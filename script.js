$(document).ready(function() {
    // Scroll to top button functionality
    var scrollToTopBtn = $('#scrollToTopBtn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Load on scroll animations
    $(window).on('scroll', function() {
        $('section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Modal functionality
    var privacyModal = $('#privacyPolicyModal');
    var privacyBtn = $('#privacyPolicyLink');
    var privacyClose = $('#privacyClose');

    privacyBtn.on('click', function(event) {
        event.preventDefault();
        privacyModal.show();
    });

    privacyClose.on('click', function() {
        privacyModal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(privacyModal)) {
            privacyModal.hide();
        }
    });

    var termsModal = $('#termsModal');
    var termsBtn = $('#termsLink');
    var termsClose = $('#termsClose');

    termsBtn.on('click', function(event) {
        event.preventDefault();
        termsModal.show();
    });

    termsClose.on('click', function() {
        termsModal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(termsModal)) {
            termsModal.hide();
        }
    });

    // Header shrink on scroll
    var header = $('#mainHeader');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            header.addClass('shrink');
        } else {
            header.removeClass('shrink');
        }
    });
});
