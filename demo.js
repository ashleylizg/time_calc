$('.input').on('change', function() {
    var number1 = parseInt($('[name="num1"]').val());
    var number2 = parseInt($('[name="num2"]').val());
    var result = number1 + number2;
    $('#result').text(result);
})

moment.fn.diff = function result() {
$('.input').on('change', function() {
    var a = moment.$(start);
    var b = moment.$(end);
    var days = a.diff(b, 'days')
    
    
    // var a = document.getElementById("start").value;
    // var b = document.getElementById("end").value;

    // var start = moment(a).format('DD-MM-YYYY');
    // var end = moment(b).format('DD-MM-YYYY');

    // var days = end.diff(start, 'days');
}) }
// var c = moment.$(a);
// var d = moment.$(b);
// return result2 = c.diff(d, 'days')+1
// }) } 

// var myElement = document.getElementById("intro");
//var diff = (Date.parse(end_date) - Date.parse(start_date)) / 86400000;
//the division by 86400000 is because 24 hours * 60 mins * 60 seconds * 1000 milliseconds
