var $ = require('./libs/jquery');
var extend = require('extend');

function closeDialog(focusBack) {

    focusBack = focusBack || true;
    if (current.dlg) {
        current.dlg.remove();
        current.dlg = null;
    }
    if (focusBack && current.focusBackTo) {
        current.focusBackTo.focus();
        current.focusBackTo = null;
    }

    $('html').removeClass('no-scroll');
}

var DEFAULT_OPTS = {
    closeOnOverlay: true,
    closeButton: true,
    identifyFocusBackTo: true,
    className: null,
};

var current = {
    focusTrap: null,
    dlg: null,
    focusBackTo: null,
};

function openModalDialog(title, content, opts) {

    opts = opts || {};
    closeDialog(false);
    //var finalOptions = Object.assign({}, DEFAULT_OPTS, opts);
    var finalOptions = $.extend({}, DEFAULT_OPTS, opts);


    if (finalOptions.identifyFocusBackTo) {
        current.focusBackTo = $(":focus");
    }

    var dlg = current.dlg = $('<div></div>')
        .addClass('dialog')
        .attr('tabindex', '0')
        .appendTo($('body'));

    if (finalOptions.className) {
        dlg.addClass(finalOptions.className)
    }

    dlg.on('keydown', function (evt) {
        if (evt.which === 27) {
            closeDialog();
            evt.preventDefault();
        }
    });

    var box = $('<div></div>').addClass('dialog__box')
        .appendTo(dlg);

    var heading = $('<div></div>')
        .addClass('dialog__box__heading')
        .html(title)
        .appendTo(box);

    $('<div></div>').addClass('dialog__box__content').append(content).appendTo(box);

    if (finalOptions.closeOnOverlay) {
        dlg.on('click', function (evt) {
            if (evt.target === dlg[0]) {
                closeDialog();
            }
        });
    }

    if (finalOptions.closeButton) {
        var button = $('<a></a>')
            .attr('href', '#')
            .attr('aria-label', 'Close')
            .attr('role', 'button')
            .addClass('dialog__box__heading__close')
            .append($('<span></span>').addClass('dialog__box__heading__close__icon'));

        button.on('click', function (evt) {
            evt.preventDefault();
            closeDialog();
        });

        heading.append(button);
    }

    dlg.focus();

    

    $('html').addClass('no-scroll');
}

module.exports = openModalDialog;