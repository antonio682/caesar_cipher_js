"use strict";
var caesar = function caesarCipher(message, shift) {
  var result_numbers = [];
  var result = [];

  if (shift == undefined){
  	shift = -3;
  }

  for(var i = 0 ; i < message.length; i++){
  		if((message.charAt(i) >= "a" && message.charAt(i) <= "z") || (message.charAt(i) >= "A" && message.charAt(i) <= "Z")){
  		result_numbers[i] = message.charCodeAt(i) + (shift);
    	} else{
    	result_numbers[i] = message.charCodeAt(i);	
    	}
  }

  result_numbers.forEach (function(number){

  		result.push(String.fromCharCode(number));
  });

  return result.join("");
};

function caesarBuilder(message, shift) {
     return caesar(message,shift);
}




//var encrypted = caesarCipher("brutus");
//console.log(encrypted);
//=> "_orqrp"

//encrypted = caesarCipher("Et tu, brute?",6);
//console.log(encrypted);
//=> "Bq qr, _orqb?"

var encrypted = caesarBuilder("Et tu, brute?", 6);
console.log(encrypted);
//=> "Kz z{, hx{zk?"
//=> "Kz za, hxazk?"
