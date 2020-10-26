// alert("connected");
// Used jquery v3.5.1 and font-awesome v4.7.0
$(document).ready(function() {
    $('.nav .dropdown-menu').prev('a').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.dropdown-menu').slideToggle();
    });
});





var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();

    e.trigger.textContent = 'Copied!';
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});




