function fib(n) {

    let fib_sum = 0;
    let fib1 = 0;
    let fib2= 1;
    for (let i = 1; i <= n; i++) {
        fib_sum = fib1 + fib2;
        fib1=fib2;
        fib2=fib_sum;
    }
    return fib_sum;
}
let n = prompt('введите порядковый номер числа Фибоначчи')

alert(fib(n));