$(function() {

  $('.aca').click(function(event){

    event.preventDefault();

    var insurance = $('.insurance').val();
    var income = $('.income-earned').val();
    var status = $('.filing-status').val();
    var penalty = 0;

        if (insurance < 12 && income > 10150)
        {
          penalty = penalty +.02*(income-10150);
          selectedPenalty = 325;
          if(penalty > 325){
            penalty = selectedPenalty;
          }
          alert('Your penalty for not having health insurance will be $'+penalty);
        }
           else {
             alert('You do not have to pay a penalty');
           }
      });
     });
