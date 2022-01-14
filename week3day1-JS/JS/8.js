'use strict'

function sravnHard (a,b)
{return a === b;}

function sravnSoft (a,b)
{return a == b;}

// let oneHard = sravnHard(1,'1')
// let oneSoft = sravnSoft(1,'1')

let oneHard = sravnHard(0,false)
let oneSoft = sravnSoft(0,false)

alert(`жесткое сравнение: ${oneHard}, мягкое сравнение ${oneSoft}`);