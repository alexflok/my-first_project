function up () {
var str= prompt("enter a line");
var str2 = str.charAt(0).toUpperCase()+str.slice(1);
    alert(str2);
}
up();