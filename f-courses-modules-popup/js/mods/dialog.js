var $ = require('./libs/jquery');
var extend = require('extend');
var createFocusTrap = require('focus-trap');

function closeDialog(focusBack = true) {
    if (current.dlg) {
        current.focusTrap.deactivate();
        current.dlg.remove();
        current.dlg = null;
    }
    if (focusBack && current.focusBackTo) {
        current.focusBackTo.focus();
        current.focusBackTo = null;
    }

    $('html').removeClass('no-scroll');
}

const DEFAULT_OPTS = {
    closeOnOverlay: true,
    closeButton: true,
    identifyFocusBackTo: true,
    className: null,
};

const current = {
    focusTrap: null,
    dlg: null,
    focusBackTo: null,
};

function openModalDialog(title, content, opts = {}) {
    closeDialog(false);
    let finalOptions = extend({}, DEFAULT_OPTS, opts);

    if (finalOptions.identifyFocusBackTo) {
        current.focusBackTo = $(":focus");
    }

    let dlg = current.dlg = $('<div></div>')
        .addClass('dialog')
        .attr('tabindex', '0')
        .appendTo($('body'));

    if (finalOptions.className) {
        dlg.addClass(finalOptions.className)
    }

    dlg.on('keydown', evt => {
        if (evt.which === 27) {
            closeDialog();
            evt.preventDefault();
        }
    });

    let box = $('<div></div>').addClass('dialog__box')
        .appendTo(dlg);

    let heading = $('<div></div>')
        .addClass('dialog__box__heading')
        .html(title)
        .appendTo(box);

    $('<div></div>').addClass('dialog__box__content').append(content).appendTo(box);

    if (finalOptions.closeOnOverlay) {
        dlg.on('click', evt => {
            if (evt.target === dlg[0]) {
                closeDialog();
            }
        });
    }

    if (finalOptions.closeButton) {
        let button = $('<a></a>')
            .attr('href', '#')
            .attr('aria-label', 'Close')
            .attr('role', 'button')
            .addClass('dialog__box__heading__close')
            .append($('<span></span>').addClass('dialog__box__heading__close__icon'));

        button.on('click', evt => {
            evt.preventDefault();
            closeDialog();
        });

        heading.append(button);
    }

    dlg.focus();

    current.focusTrap = createFocusTrap(dlg[0]).activate();

    $('html').addClass('no-scroll');
}

module.exports = openModalDialog;