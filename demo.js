
var date1;
var date2;
var timeDiffInDays;
var principal;
var interest;
var paymentAmount;

/**
 * Rounds a number to a representation of money, with two decimal places.
 * 
 * @param {number} num 
 */
function roundNumberToBeMoney(num) {
    return (Math.round(num * Math.pow(10,2)) / Math.pow(10,2)).toFixed(2);
}

/**
 * This is setting listener code on anything with an ID of "submit", so, the submit button.
 */
$('#submit').on('click', function() {

    date1 = $('#start-date').val();
    date2= $('#end-date').val();

    // Null check to ensure both dates are actually set
    if (date1 != null && date1.trim() !== '' &&
            date2 != null && date2.trim() !== '')
    {
        // Make the dates into moment.js objects now
        date1 = moment(date1, 'YYYY-MM-DD');
        date2 = moment(date2, 'YYYY-MM-DD');

        timeDiffInDays = date2.diff(date1, 'days');

        $('#days').text(timeDiffInDays + ' days');

        principal = $('#principal').val();
        interest = $('#interest').val();

        // After also ensuring principal and interest are not null, can do next calculation
        if (principal != null && principal.trim() !== '' &&
                interest != null && interest.trim() !== '')
        {
            paymentAmount = ((((interest / 365) * principal ) * timeDiffInDays) + (principal / timeDiffInDays));
            paymentAmount = roundNumberToBeMoney(paymentAmount);
    
            $('#payment-calculation').text('$' + paymentAmount + ' per day');
        }
    }
});
