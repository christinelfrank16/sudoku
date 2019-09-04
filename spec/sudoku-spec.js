import {checkInput, Board} from '../src/sudoku.js';


describe('input-validation', function() {
  it('ensure input is numeric and positive or 0', function() {
    var input = 0;
    expect(checkInput(input)).toEqual(true);
  });
  it('ensure input is numeric and positive or 0', function() {
    var input = -4;
    expect(checkInput(input)).toEqual(false);
  });
  it('ensure input is numeric and positive or 0', function() {
    var input = 4;
    expect(checkInput(input)).toEqual(true);
  });
  it('ensure input is numeric and positive or 0', function() {
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

  it('ensure input is not already present in the 3x3 grid - should fail', function(){
    var input = 4;
    var coordinate = [2,3];
    expect(reusableBoard.checkBox(input, coordinate)).toEqual(false);
  });

  it('ensure input is not already present in the 3x3 grid - should pass', function(){
    var input = 2;
    var coordinate = [2,3];
    expect(reusableBoard.checkBox(input, coordinate)).toEqual(true);
  });

  it('ensure input is stored when validation tests pass', function() {
    var input = 2;
    var coordinate = [2,3];
    reusableBoard.setValue(input, coordinate);
    expect(reusableBoard.liveBoard[3][2]).toEqual(input);
  });

  it('ensure input is stored when validation tests pass', function() {
    var input = 8;
    var coordinate = [2,3];
    reusableBoard.setValue(input, coordinate);
    expect(reusableBoard.liveBoard[3][2]).not.toEqual(input);
  });

  it('ensure value is removed when input is 0', function() {
    var coordinate = [2,3];
    reusableBoard.liveBoard[3][2] = 2;

    var secondInput = 0;
    reusableBoard.setValue(secondInput, coordinate);
    expect(reusableBoard.liveBoard[3][2]).toEqual(secondInput);
  });
});

describe('game-play', function(){
  var reusableBoard;
  beforeEach(function(){
    reusableBoard = new Board();
  });

  it('should display an end-game message when no more spaces are available to be filled', function(){
    reusableBoard.movesLeft = 1;
    var input = 2;
    var coordinate = [2,3];
    reusableBoard.setValue(input, coordinate);
    expect(reusableBoard.movesLeft).toEqual(0);
  });

  it('should account for spaces cleared by user', function(){
    reusableBoard.movesLeft = 2;

    var firstInput = 2;
    var coordinate = [2,3];
    reusableBoard.setValue(firstInput, coordinate);
    expect(reusableBoard.movesLeft).toEqual(1);

    var secondInput = 0;
    reusableBoard.setValue(secondInput, coordinate);
    expect(reusableBoard.movesLeft).toEqual(2);
  });
});
