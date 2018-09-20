module.exports = function getZerosCount(number, base) {
    let advZero = Number.MAX_VALUE;
    let xbase = base;

    for (let i = 2; i <= base; i++) {
        if (xbase % i === 0) {
            let p = 0;
            while (xbase % i === 0) {
                xbase = xbase / i;
                p++;
            }
            let count = 0;


            let y = Math.floor(number / i);


            while (y > 0) {
                count += y;
                y = Math.floor(y / i);
            }
            advZero = Math.min(advZero, Math.floor(count / p))
        }
    }
    return advZero;

};