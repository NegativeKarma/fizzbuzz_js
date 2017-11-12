describe('Fizzbuz', function() {
  var game;

  beforeEach(function() {
    game = new Fizzbuzz();
  });

  it('returns "wrong input" if number is negative', function() {
    expect(game.check(-5)).toEqual('wrong input');
  });

  it('returns "wrong input" if number is not number', function() {
    expect(game.check('spongebob')).toEqual('wrong input');
  });

  it('returns "fizzbuzz" if number is divisible by 15', function() {
    expect(game.check(15)).toEqual('fizzbuzz');
  });

  it('returns "buzz" if number is divisible by 5', function() {
    expect(game.check(5)).toEqual('buzz');
  });

  it('returns "fizz" if number is divisible by 3', function() {
    expect(game.check(3)).toEqual('fizz');
  });

  it('returns number if number is not divisible b 3', function() {
    expect(game.check(7)).toEqual(7);
  });

});
