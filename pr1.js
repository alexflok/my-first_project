var a = prompt("enter example of sum","sum to values");
var val = a.toString().split("+");
var sum = 0;
for(var i in val) {
    sum+=+val[i];
};
alert(sum);