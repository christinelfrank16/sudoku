export function Board(){
  this.liveBoard = this.makeBoard();
  this.initBoard = this.makeBoard();
}

Board.prototype.makeBoard = function(){
  var newArray = [];
  newArray.push([5,3,0,0,7,0,0,0,0]);
  newArray.push([6,0,0,1,9,5,0,0,0]);
  newArray.push([0,9,8,0,0,0,0,6,0]);
  newArray.push([8,0,0,0,6,0,0,0,3]);
  newArray.push([4,0,0,8,0,3,0,0,1]);
  newArray.push([7,0,0,0,2,0,0,0,6]);
  newArray.push([0,6,0,0,0,0,2,8,0]);
  newArray.push([0,0,0,4,1,9,0,0,5]);
  newArray.push([0,0,0,0,8,0,0,7,9]);

  return newArray;
}

Board.prototype.checkRow = function(input, coordinate){
  var isNotPresent = true;
  var x = coordinate[0];
  var y = coordinate[1];

  var row = this.liveBoard[y];
  for(var i = 0; i < row.length; i++){
    if(row[i] === input){
      isNotPresent = false;
    }
  }
  return isNotPresent;
}

Board.prototype.checkCol = function(input, coordinate){
  var isNotPresent = true;
  var x = coordinate[0];
  var y = coordinate[1];
  for(var i = 0; i < this.liveBoard.length; i++){
    if(this.liveBoard[i][x] === input) {
      isNotPresent = false;
    }
  }
  return isNotPresent;
}

Board.prototype.checkInitCoord = function(coordinate){
  var isChangeable = true;
  var x = coordinate[0];
  var y = coordinate[1];

  if(this.initBoard[y][x] !== 0){
    isChangeable = false;
  }
  return isChangeable;
}

Board.prototype.checkBox = function(input, coordinate){
  var isNotPresent = true;
  var x = coordinate[0];
  var y = coordinate[1];

  var startX = Math.floor(x/3)*3;
  var startY = Math.floor(y/3)*3;

  for(var i = startX; i < startX + 3; i++){
    for(var j = startY; j < startY + 3; j++){
      if(this.liveBoard[j][i] === input){
        isNotPresent = false;
      }
    }
  }
  return isNotPresent;
}

export function checkInput(input) {
  var output = false;
  if ( typeof input === 'number' && (input >= 0 && input < 10)){
    output = true;
  }
  return output;
}

Board.prototype.setValue = function(input, coordinate) {
  var x = coordinate[0];
  var y = coordinate[1];

  if(input === 0 && this.checkInitCoord(coordinate)) {
    this.liveBoard[y][x] = input;
  } else if((this.checkRow(input, coordinate) && this.checkCol(input, coordinate)) && (this.checkBox(input, coordinate) && this.checkInitCoord(coordinate))) {
    this.liveBoard[y][x] = input;
  }
}
