'use sctrict'

let digit1 = prompt('Введите 1 число');
let digit2 = prompt('Введите 2 число');
Number(digit1);
Number(digit2);
function myFunc(a,b)
{

if (a > b) {
    alert('1');
}
  else
      if (a < b)    {
          alert('-1')
      }
    else  {
        alert('0');
    }

}

myFunc (digit1,digit2);