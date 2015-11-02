$(function() {

  $('.student').click(function(event){

    event.preventDefault();

    var claimed = $('.claimed').val();
    var interest = $('.interest').val();
    var income = $('.salary').val();
    var status = $('.file-as').val();

        if (interest == "yes" && income < 65000 && status !="MFS" && claimed == "no")
        {
          alert('You are eligible for a student loan interest deduction of up to $2,500')
        }
           else if(interest == "yes" && income < 80000 && status !="MFS" && claimed == "no")
           {
             alert('You are eligible for a student loan interest deduction, but the amount will be reduced due to your income level')
              }
            else
            {
                alert('You are not eligible for a student loan interest deduction');
              }
      });
     });
