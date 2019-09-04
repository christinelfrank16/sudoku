import {checkInput, Board} from '../src/sudoku.js';


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

describe('board-input-validation', function(){
  var reusableBoard;

  beforeEach(function(){
    reusableBoard = new Board();
    reusableBoard.makeBoard();
  });

  it('ensure input is not already present in the row', function(){
    var input = 6;
    var coordinate = [2,3];
    expect(reusableBoard.checkRow(input, coordinate)).toEqual(false);
  });

  it('ensure input is not already present in the row', function(){
    var input = 4;
    var coordinate = [2,3];
    expect(reusableBoard.checkRow(input, coordinate)).toEqual(true);
  });

  it('ensure input at coordinate location is not fixed value from start', function(){
    var coordinate = [2,3];
    expect(reusableBoard.checkInitCoord(coordinate)).toEqual(true);
  });

  it('ensure input at coordinate location is not fixed value from start', function(){
    var coordinate = [2,2];
    expect(reusableBoard.checkInitCoord(coordinate)).toEqual(false);
  });

  it('ensure input is not already present in the column', function(){
    var input = 8;
    var coordinate = [2,3];
    expect(reusableBoard.checkCol(input, coordinate)).toEqual(false);
  });

  it('ensure input is not already present in the column', function(){
    var input = 4;
    var coordinate = [2,3];
    expect(reusableBoard.checkCol(input, coordinate)).toEqual(true);
  });





});
