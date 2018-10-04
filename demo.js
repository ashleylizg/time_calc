
var date1;
var date2;

/**
 * NOTE Right now we can put a listener on all <input>'s
 * but eventually that'll be impractical...
 */
$('.input').on('change', function() {

    date1 = $('[name="start"]').val();
    date2= $('[name="end"]').val();

    // Null check because maybe just one date is set at this point
    if (date1 != null && date1.trim() !== '' &&
            date2 != null && date2.trim() !== '')
    {
        // Make the dates into moment.js objects now
        date1 = moment(date1, 'YYYY-MM-DD');
        date2 = moment(date2, 'YYYY-MM-DD');

        var timeDiff = date2.diff(date1, 'days');

        $('#days').text(timeDiff + ' days');
    }
});
