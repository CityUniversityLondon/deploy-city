/*
 * This is custom Javascript to override unwanted text / characters printed by React on the following URL
 * https://researchcentres.city.ac.uk/software-reliability/publications/_nocache
 * A React solution wasn't found to stop the text being printed.
 *
 */

module.exports = (function () {
    return function () {
        var string ='"},"staticData":false,"fixedProperties":{"divisions":"IICSWR"}}';
        var editedText = document.getElementById('content').innerHTML.replace(string, '');

        document.getElementById('content').innerHTML = editedText;
    };
})();