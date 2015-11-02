$(function() {
	$('.state').click(function(event) {
		$('.result').text('');
		event.preventDefault();
    var chosenState = $('.rate').val();
    $.ajax({
			url: 'http://taxee.io/api/v1/state/2014/'+chosenState,
			method: 'GET',
				success: function(result) {
					console.log('success', result);
					var status = $('.filing').val();
					if(status == "Single") {
						for(var i=0; i<result.single.income_tax_brackets.length; i++) {
						var marginal_rate = result.single.income_tax_brackets[i].marginal_rate
						var bracket = result.single.income_tax_brackets[i].bracket
						console.log(marginal_rate, bracket)
						$('.result').append(" Tax Bracket:"+bracket+" , Marginal Rate:"+marginal_rate +"</br>");
						}
			}
			if(status == "MFJ") {
				for(var i=0; i<result.married.income_tax_brackets.length; i++) {
				var marginal_rate = result.married.income_tax_brackets[i].marginal_rate
				var bracket = result.married.income_tax_brackets[i].bracket
				console.log(marginal_rate, bracket)
				$('.result').append(" Tax Bracket:"+bracket+" , Marginal Rate:"+marginal_rate +"</br>");
				}
			}
			if(status == "MFS") {
				for(var i=0; i<result.married_separately.income_tax_brackets.length; i++) {
				var marginal_rate = result.married_separately.income_tax_brackets[i].marginal_rate
				var bracket = result.married_separately.income_tax_brackets[i].bracket
				console.log(marginal_rate, bracket)
				$('.result').append(" Tax Bracket:"+bracket+" , Marginal Rate:"+marginal_rate +"</br>");
				}
			}
			if(status == "HOH") {
				for(var i=0; i<result.head_of_household.income_tax_brackets.length; i++) {
				var marginal_rate = result.head_of_household.income_tax_brackets[i].marginal_rate
				var bracket = result.head_of_household.income_tax_brackets[i].bracket
				console.log(marginal_rate, bracket)
				$('.result').append(" Tax Bracket:"+bracket+", Marginal Rate:"+marginal_rate +"</br>");
				}
			}
		},
			error: function(xhr, status, error) {
				console.log('error');
			}
		});
	});
});
