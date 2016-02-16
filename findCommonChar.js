// Write a program that gives count of common characters presented in an array of strings..(or array of character arrays)

function findCommonChar(strArray){
    var count = [];
    for(var k = 'a'.charCodeAt(0); k < 'z'.charCodeAt(0); k ++){
        count[k] = 0;
    }
    var standard = 0;
    for(var i = 0; i < strArray.length; i ++){
        var chars = strArray[i].split('');
        for(var j = 0; j < chars.length; j ++){
            count[chars[j].charCodeAt(0)] = count[chars[j].charCodeAt(0)] | 1 << i;
        }
        standard = standard | 1 << i;
    }
    
    for(var k = 'a'.charCodeAt(0); k < 'z'.charCodeAt(0); k ++){
        if(count[k] == standard){
            console.log(String.fromCharCode(k));
        }
    }
}

findCommonChar(['aghkafgklt',
'dfghako',
'qwemnaarkf'
]);

