function Fizzbuzz(){

  this.check = function(number){
    if(_invalidInput(number)){
      return 'wrong input';
    } else if(_returnZero(number, 15)){
      return 'fizzbuzz';
    } else if(_returnZero(number, 5)){
      return 'buzz';
    } else if(_returnZero(number, 3)){
      return 'fizz';
    } else {
      return number;
    }
  }

  var _returnZero = function(number, divided_by){
    return(number % divided_by === 0)
  }

  var _invalidInput = function(number){
    if(isNaN(number) || Math.sign(number) === -1){
      return true;
    } else {
      return false;
    }
  }

}
