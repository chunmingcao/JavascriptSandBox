/**
*   Given this endorsements array, structure the data to result in the following
*/
var endorsements = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'css', user: 'Bill' },
  { skill: 'html', user: 'Sue' }
];

// Result

//[
//  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//  { skill: 'html', user: [ 'Sue' ], count: 1 }
//];

console.log(processEndorsement(endorsements));

function processEndorsement(endorse){

    var map= {};
    var result = [];
    var l = endorse.length;
    for(var i = 0; i < l; i ++){
        if(typeof map[endorse[i].skill] === 'undefined') {
            map[endorse[i].skill] = {skill: endorse[i].skill, user: [], count: 0 };
            result.push(map[endorse[i].skill]);
            //result.push({skill: key, user: map.key, count: map.key.length });
        }
        //map[endorse[i].skill].push(map.endorse[i].user);
        map[endorse[i].skill].user.push(endorse[i].user);
        map[endorse[i].skill].count ++;

    }
    return result;

}

// Make this work:
console.log(duplicate([1,2,3,4,5]));                 // Output: [1,2,3,4,5,1,2,3,4,5]
console.log(revDuplicate([1,2,3,4,5]));              // Output: [1,2,3,4,5,5,4,3,2,1]

function duplicate(nums){
    /*var outnums = nums.slice(0);
    for(var i = 0; i < nums.length; i ++){
        outnums.push(nums[i]);
    }
    return outnums;
    */
    return nums.concat(nums);
}

function revDuplicate(nums){
    var outnums = nums.slice(0);
    for(var i = nums.length - 1; i >= 0; i --){
        outnums.push(nums[i]);
    }
    return outnums;
}

var persons = [{name: 'chunming'},{name: 'tom'},{name: 'mike'}];
var duplicateps = duplicate(persons);
var reverseps = revDuplicate(persons);
duplicateps[3].name = 'Ming';                 
console.log(reverseps);
console.log(duplicateps);


