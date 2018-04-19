module.exports = function () {
    'use strict';

    var $ = require('../jquery');

    return function() {
        $('.cyclic-popup-item__title').click(function() {
            var clickedItemLink = $(this);
            var clickedItem     = $(this).closest('.cyclic-popup-item');
            var popupGroup      = clickedItemLink.closest(".cyclic-popup-group");
            var allPopupItems   = popupGroup.children('.cyclic-popup-item');
            var currentIndex    = 0;
            var noOfPopupItems  = allPopupItems.length;

            allPopupItems.each(function(index, value) {
                if ($(this).get(0) === clickedItem.get(0)) {
                    currentIndex = index;
                }
            });

            function getNextItem(reverse) {
                if (reverse == false) {
                    if (currentIndex == noOfPopupItems - 1) {
                        currentIndex = 0;
                    }
                    else {
                        currentIndex++;
                    }
                }
                else {
                    if (currentIndex == 0) {
                        currentIndex = noOfPopupItems - 1;
                    }
                    else {
                        currentIndex--;
                    }
                }

                var nextItem = allPopupItems.get(currentIndex);
                return nextItem;
            }

            $('<div></div>').dialog({
                modal: true,
                draggable: false,
                resizable: false,
                buttons: [
                    {
                        text: 'next',
                        click: function() {
                            $(this).html($(getNextItem(false)).find('.cyclic-popup-item__detail').text());
                        }
                    },
                    {
                        text: 'previous',
                        click: function() {
                            $(this).html($(getNextItem(true)).find('.cyclic-popup-item__detail').text());
                        }
                    }
                ],
                close: function(){ $(this).dialog('destroy')},
                create:function () {
                    $(this).closest('.ui-dialog').addClass('cyclic-popup');
                    $(this).html(clickedItem.find('.cyclic-popup-item__detail').text());
                }
            })

            return false;
        });
    };
}();
