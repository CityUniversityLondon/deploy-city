$(function () {

    function initShortCourses() {
        var dropdownBlock = $('#shortcourse-dropdown');
        var dropdown = $('#shortcourse-dropdown select');
        var dropdownOptions = $('#shortcourse-dropdown option');
        var isCPD = ($('.shortcourse--cpd')[0]);

        updateStaticData();
        updateDynamicData();
        checkEmptyTestimonials();
        initTutorSlider();

        dropdown.change(function() {
            updateDynamicData();
        });

        function updateStaticData() {
            var selectedOption = dropdown.find(':selected');
            var uniqueItems = [];
            var isFirstFeeAdded = false;

            // fees
            dropdownOptions.each(function() {
                if ($.inArray($(this).data('fees'), uniqueItems) == -1) {
                    if (isFirstFeeAdded) {
                        $('#dynamic-fees').append('<br>' + $(this).data('fees'));
                    }
                    else {
                        // $('#dynamic-fees').html($(this).data('fees'));
                        $('#dynamic-fees').hide().html($(this).data('fees')).fadeIn();
                    }
                    uniqueItems.push($(this).data('fees'));
                    isFirstFeeAdded = true;
                }
            });

            // remove dropdownBlock if dropdown is empty or if it only contains hidden dummy
            if (dropdownOptions.length == 0) {
                dropdownBlock.remove();
                $('#dynamic-subtext').html('<p>Dates and fees to be confirmed</p>');
            }
            else if (dropdownOptions.length == 1) {
                if (selectedOption.data('startdatevis') == 'hide-date') {
                    dropdownBlock.remove();
                }
            }
        }

        function updateDynamicData() {
            var selectedOption = dropdown.find(':selected');
            var deadlineFurther = 'First come, first served. Booking is sometimes possible shortly after start date, subject to availability.';

            console.log(selectedOption.data());

            $('#dynamic-subtext').html(selectedOption.data('startdatesubtext'));
            $('#dynamic-deadline-further').hide().html(deadlineFurther).fadeIn();

            // if storelink exists, display appropriate action button
            if (selectedOption.data('storelink') != null && selectedOption.data('storelink').trim() != '') {
                var linkText = (selectedOption.data('register') == 'yes' ? 'Register interest' : 'Book now <span><i class="fa fa-chevron-circle-right" /></span>');

                var storelink = selectedOption.data('storelink');
                if (storelink.slice(-1) == '/') {
                    storelink = storelink.slice(0, -1);
                }
                $('#dynamic-action').html('<p class="cta hard-cta"><a href=' + storelink + '>' + linkText + '</a></p>');
            }
            else {
                $('#dynamic-action').empty();
            }

            if (isCPD) { // key info - cpd courses
                if (selectedOption.data('duration') == null || selectedOption.data('duration') == '') {
                   $('#cpd-duration-row').hide();
                }
                else {
                    $('#dynamic-duration').html(selectedOption.data('duration'));
                    $('#cpd-duration-row').show();
                }

                if (selectedOption.data('time') == null || selectedOption.data('time') == '') {
                   $('#cpd-time-row').hide();
                }
                else {
                    $('#dynamic-time').html(selectedOption.data('time'));
                    $('#cpd-time-row').show();
                }

                if (selectedOption.data('location') == null || selectedOption.data('location') == '') {
                   $('#cpd-location-row').hide();
                }
                else {
                    $('#dynamic-location').html(selectedOption.data('location'));
                    $('#cpd-location-row').show();
                }

                if (selectedOption.data('applyuntil') != null && selectedOption.data('applyuntil') != '') {
                   $('#dynamic-applyuntil').hide().html(selectedOption.data('applyuntil')).fadeIn();
                }

                selectedOption.data('test');
                
            } else { // key info - short courses
                $('#dynamic-duration').hide().html(selectedOption.data('duration')).fadeIn();
                $('#dynamic-time').hide().html(selectedOption.data('time')).fadeIn();
            }
            $('#dynamic-days').hide().html(selectedOption.data('days')).fadeIn();
            $('#dynamic-code').hide().html(selectedOption.data('code')).fadeIn();
            $('#dynamic-fees').hide().html(selectedOption.data('fees')).fadeIn();
            $('#dynamic-location').hide().html(selectedOption.data('location')).fadeIn();

            // If deadline override metadata exists, print this data value instead of other fields
            if (selectedOption.data('bookingdeadlineoverride')) {
                $('#dynamic-deadline').hide().html(selectedOption.data('bookingdeadlineoverride')).fadeIn();
                $('#dynamic-deadline-further').hide();
            } else {
                $('#dynamic-deadline').hide().html(selectedOption.data('bookingdeadline')).fadeIn();
            }
            selectedOption.data('test2');

        }

        function checkEmptyTestimonials() {
            var thing = $('.shortcourse-testimonials').find('.course__profiles__item');
            if (thing.length == 0) {
                $('.shortcourse-testimonials').addClass('shortcourse-testimonials--empty').removeClass('shortcourse-testimonials');
            }
            $('.shortcourse-testimonials-block').show();
            // Bug fix: define initial carousel dimensions otherwise won't load correctly
            $('.bx-viewport').css('height','auto');
            $('.course__profiles__item.course__profiles__item').css({
                'width': '100vw',
                'max-width': '1200px'
            });
        }

        function initTutorSlider() {
            var w = $('.shortcourse-tutor-profiles').width();
            var n = $('.shortcourse-tutor').length;

            if (n > 1) {
                var fitAllWidth = w / n,
                    controls = n > 1,
                    minWidth = Math.max(300, fitAllWidth),
                    maxSlides = Math.max(1, Math.floor(w / minWidth)),
                    width = w / maxSlides;

                $('.shortcourse-tutor-items').bxSlider({
                    pager: false,
                    controls: controls,
                    nextText: '<i class="fa fa-chevron-right"></i>',
                    prevText: '<i class="fa fa-chevron-left"></i>',
                    adaptiveHeight: true,
                    slideMargin: 0
                });

                $('.shortcourse-tutor-wrapper').addClass('shortcourse-tutor-selection');
            }
        }

    }

    initShortCourses()
});
