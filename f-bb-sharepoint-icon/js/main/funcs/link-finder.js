module.exports = function () {
/**
 * Loop over every link and apply nessessary classes
 *
 */


    function addIcon(element, classes, pos = 'prepend') {
        console.log('ddd')
        if (element && classes) {
            // Create span for FA icon
            const spanNode = document.createElement('span');
            
            // Check if 'classes' is a string (single class) or an array (multiple classes)
            if (typeof classes === 'string') {
                spanNode.classList.add(classes);  // Add the single class
            } else if (Array.isArray(classes)) {
                classes.forEach(cls => spanNode.classList.add(cls));  // Add multiple classes
            }

            // Append or prepend the icon based on the `pos` parameter
            if (pos === 'append') {
                element.append(spanNode); // Adds icon to the beginning
            } else {
                element.prepent(spanNode);  // Adds icon to the end
            }
        }
    }

    function findSharepointLink(anchor){
        const url = new URL(anchor.href);
        if (url.hostname.endsWith('sharepoint.com')) {

            

            const firstChild = anchor.firstChild;
            console.log(firstChild)
            if (firstChild && firstChild.nodeType === 3) {
                //Text is the first node of the anchor, so no icons are already being used
                addIcon(anchor,[fa-kit,fa-sharepoint])
              }
            
        }
    }

    function findLinks() {
        const anchors = document.querySelectorAll('a');

        anchors.forEach(function (anchor) {
            findSharepointLink(anchor);
        });
    }

    findLinks();

};
