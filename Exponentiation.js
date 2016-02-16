var expFunc = function exp(m,n){
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return m;
    }
    var e = exp(m, parseInt(n/2));
    if(n%2 == 0){
        return e*e;
    }else{
        return e*e*m;
    }
}
console.log(expFunc(2,3));
console.log(expFunc(2,64));