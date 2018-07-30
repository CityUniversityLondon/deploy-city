var $ = require('./libs/jquery');
var openModalDialog = require('./dialog');

var className = 'popup-def-list-group';

function dialogModelBox(widget, items){

	function open(i, s){
        var title = items[i].title;
        var category = items[i].category;
        var content = items[i].content;
		

		var dlgTitle = $('<div></div>')

		$('<div></div>')
            .html(title)
            .appendTo(dlgTitle);

        var prevIndex = (i - 1 + items.length) % items.length;
        var nextIndex = (i + 1 ) % items.length;
        var prev = items[prevIndex];
        var next = items[nextIndex];

        var prevLink = $('<a></a>')
            .attr('href', '#')
            .append(prev.title)
            .on('click', function (evt) {
                evt.preventDefault();
                open(prevIndex, false);
            });

        var nextLink = $('<a></a>')
            .attr('href', '#')
            .append(next.title)
            .on('click', function (evt) {
                evt.preventDefault();
                open(nextIndex, false);
            });

        var nextWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__next')
            .append(nextLink)
            .append('<span class="popup-def-list-group__prevnext__next__icon" aria-hidden="true"></span>');

        var prevWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__prev')
            .append('<span class="popup-def-list-group__prevnext__prev__icon" aria-hidden="true"></span>')
            .append(prevLink);

        var dlgContent = $('<div></div>')
            .append(content);

        $('<div></div>')
            .addClass('popup-def-list-group__prevnext')
            .append(prevWrapper)
            .append(nextWrapper)
            .appendTo(dlgContent);


            openModalDialog(dlgTitle, dlgContent, {
            status: s,
            className: className + '--yellow'
        });

           
	}

	 items.forEach(function(e,i){
            var heading = e.heading;
            var anchor = $('<a></a>')
            .attr('href', '#')
            .addClass('popup-def-list-group__anchor')
            .html(heading.html());

            anchor.on('click', function (evt) {
                evt.preventDefault();
                open(i, true)
            });

            heading.empty().append(anchor);
        })



}


module.exports = dialogModelBox;