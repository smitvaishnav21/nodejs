var a = process.argv;
// var operater = console.log("select your operater",a[2])
var operater = a[2];
switch(operater){
    case '+':
        console.log(parseInt(a[3])+parseInt(a[4]));
        break;
    case '-':
        console.log(parseInt(a[3])-parseInt(a[4]));
        break;
    case '*':
        console.log(parseInt(a[3])*parseInt(a[4]));
        break;
    case '/':
        console.log(parseInt(a[3])/parseInt(a[4]));
        break;
    default:
        console.log("please enter valid arithematic operations")
}