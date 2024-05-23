/**
 * Append an array of elements to an element.
 *
 * @param {HTMLElement} elem - The parent element.
 * @param {HTMLElement[]} children - An array of elements to append to it.
 */
const appendAll = function (elem, children) {
    children.forEach((child) => elem.appendChild(child));
}

exports.appendAll = appendAll;