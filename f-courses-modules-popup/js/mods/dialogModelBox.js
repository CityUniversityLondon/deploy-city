var $ = require('./libs/jquery');
var openModalDialog = require('./dialog');

const className = 'popup-def-list-group';

function dialogModelBox(widget, items){

	function open(i, s){
		var {title, category, content} = items[i];

		var dlgTitle = $('<div></div>')

		$('<div></div>')
            .html(title)
            .appendTo(dlgTitle);

        let prevIndex = (i - 1 + items.length) % items.length;
        let nextIndex = (i + 1 ) % items.length;
        let prev = items[prevIndex];
        let next = items[nextIndex];

        let prevLink = $('<a></a>')
            .attr('href', '#')
            .append(prev.title)
            .on('click', evt => {
                evt.preventDefault();
                open(prevIndex, false);
            });

        let nextLink = $('<a></a>')
            .attr('href', '#')
            .append(next.title)
            .on('click', evt => {
                evt.preventDefault();
                open(nextIndex, false);
            });

        let nextWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__next')
            .append(nextLink)
            .append('<span class="popup-def-list-group__prevnext__next__icon" aria-hidden="true"></span>');

        let prevWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__prev')
            .append('<span class="popup-def-list-group__prevnext__prev__icon" aria-hidden="true"></span>')
            .append(prevLink);

        let dlgContent = $('<div></div>')
            .append(content);

        $('<div></div>')
            .addClass('popup-def-list-group__prevnext')
            .append(prevWrapper)
            .append(nextWrapper)
            .appendTo(dlgContent);


            openModalDialog(dlgTitle, dlgContent, {
            s,
            className: `${className}--yellow`
        });

           
	}

	 items.forEach(function({heading},i){
            let anchor = $('<a></a>')
            .attr('href', '#')
            .addClass('popup-def-list-group__anchor')
            .html(heading.html());

            anchor.on('click', evt => {
                evt.preventDefault();
                open(i, true)
            });

            heading.empty().append(anchor);
        })



}


module.exports = dialogModelBox;