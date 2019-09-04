export function checkInput(input) {
  var output = false;
  if ( typeof input === 'number' && (input > 0 && input < 10)){
    output = true;
  }
  return output;
}
