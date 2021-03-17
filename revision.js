const TAX_RATE=0.03;
var amount=102.98;
amount=amount+(amount*TAX_RATE);
console.log(amount)
var total=amount+(amount*TAX_RATE);
console.log(total);
var amount=200;
if(amount<100){
    let amount=50;
    amount=amount*2;
    console.log(amount);
}
    else{
       console.log("Amount balance too high");
    }
    //loops
    var result=" ";
    var i=0;
    do{
        i +=1;
        result+=i+" ";
    }
    while(i>0 && i<5);
        console.log(result);
//scope
function outer(){
    var a=1;
    function inner(){
        var b=2;
        console.log(a+b);

    }
    inner();
    console.log(a);
}
outer();
//objects,functions,methods
let student={
    name:"Grace Mugendi",
    age:23,
    Year_of_birth:1997,
    Nationality:"Kenya",
}
console.log(student.name)
    var newAge=24;
    console.log(newAge);

