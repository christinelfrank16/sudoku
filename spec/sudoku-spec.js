import {checkInput} from '../src/sudoku.js';


describe('input-validation', function() {

  it('ensure input is numeric and positive', function() {
    var input = -4;
    expect(checkInput(input)).toEqual(false);
  });
  it('ensure input is numeric and positive', function() {
    var input = 4;
    expect(checkInput(input)).toEqual(true);
  });
  it('ensure input is numeric and positive', function() {
    var input = "-4";
    expect(checkInput(input)).toEqual(false);
  });

  it('ensure that input is less than 10', function(){
    var input = 11;
    expect(checkInput(input)).toEqual(false);
  });

});
