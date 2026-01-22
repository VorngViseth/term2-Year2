export function sum(a, b) {
    return a+b;
}

export function sig(n) {
    let sum = 0;
    for(let i = n; i > 0; i--)
        sum += i;
    return sum;
}

export function hyp(w, x, b) {
    const wx = w*x;
    let h = wx + b;
    return h;
}