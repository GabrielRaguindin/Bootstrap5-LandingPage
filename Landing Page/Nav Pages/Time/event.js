document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            html: true,
            content: getPopoverContent(popoverTriggerEl)
        });
    });

    function getPopoverContent(popoverTriggerEl) {
        // Get the data-content attribute value
        var content = popoverTriggerEl.getAttribute('data-bs-content');

        // Create a custom HTML structure for the popover content
        return content;
    }
});