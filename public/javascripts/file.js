$(function() {

  $('.file').click(function(event){

    event.preventDefault();

    var age = $('.age').val();
    var income = $('.income').val();
    var status = $('.status').val();

    if((age < 65 && income >=10150 && status=="Single") ||
    (age >= 65 && income >=11700 && status=="Single") ||
    (age < 65 && income >=20300 && status=="MFJ") ||
    (age >= 65 && income >=21500 && status=="MFJ") ||
    (age < 65 && income >=22700 && status=="MFJ") ||
    (income >= 3950 && status=="MFS") ||
    (age < 65 && income >=13050 && status=="HOH") ||
    (age >= 65 && income >=14600 && status=="HOH") ||
    (age < 65 && income >=16350 && status=="QW") ||
    (age >= 65 && income >=17550 && status=="QW"))
    {
        alert('You must file federal taxes');
      }
        else {
          alert('You do not need to file federal taxes');
        }
      });

    });
