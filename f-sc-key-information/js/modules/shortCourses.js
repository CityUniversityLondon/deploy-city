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
        flexibleSelect();

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
                        $('#dynamic-fees').html($(this).data('fees'));
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

            $('#dynamic-subtext').html(selectedOption.data('startdatesubtext'));

            // if storelink exists, display appropriate action button
            if (selectedOption.data('storelink') != null && selectedOption.data('storelink').trim() != '') {
                var linkText = (selectedOption.data('register') == 'yes' ? 'REGISTER INTEREST' : 'BOOK NOW');

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
                   $('#dynamic-applyuntil').html(selectedOption.data('applyuntil'));
                }
            }
            else { // key info - short courses
                $('#dynamic-duration').html(selectedOption.data('duration'));
                $('#dynamic-time').hide().html(selectedOption.data('time')).fadeIn('slow');
            }
            $('#dynamic-code').html(selectedOption.data('code'));
        }

        function checkEmptyTestimonials() {
            var thing = $('.shortcourse-testimonials').find('.course__profiles__item');
            if (thing.length == 0) {
                $('.shortcourse-testimonials').addClass('shortcourse-testimonials--empty').removeClass('shortcourse-testimonials');
            }
            $('.shortcourse-testimonials-block').show();
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

        function flexibleSelect() {
            var d = $('#shortcourse-dropdown select');
            var e = $('.shortcourse-keyinfo__details .start-date');
            // e.style.height = "200px";
            d.click(function() {
                // $('.start-date').style.height = (d.options[d.selectedIndex].text.length*8+40)+"px";
                e.style.height = "200px";
            })
        }


    };

    console.log('b');

    initShortCourses();
});
