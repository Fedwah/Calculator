var a="" ;
var b = 0;
var multiple = false ;
var division = false ;
var negative = false;
var pile = new Array();
function show(count) {
    a=a + count;
    document.getElementById("box").value = a ; 
}
function mult(){
    if(multiple)
    {
        b=b*parseFloat(document.getElementById("box").value);
    }
    else {  
    if(division)
    {
        b = b/parseFloat(document.getElementById("box").value);
        division = false;
    }
    else  b = parseFloat(document.getElementById("box").value);
    }
    a="";
    multiple = true;
    document.getElementById("box").value = "";
    
}
function div(){
    if(division)
    {
        b=b/parseFloat(document.getElementById("box").value);
    }
    else {
        if(multiple)
        {
        b = b * parseFloat(document.getElementById("box").value);
        multiple = false;
        }
        else b = parseFloat(document.getElementById("box").value);
    }
    
    a="";
    division = true;
    document.getElementById("box").value = "";
}
function sub(){
    if(multiple)
    {
        b = b * parseFloat(document.getElementById("box").value);
        pile.push(b);
        multiple = false;
    }
    else{
    if(division)
    {
        b = b/parseFloat(document.getElementById("box").value);
        pile.push(b);
        division = false;
    }
    else{
    if (negative)
    {
        pile.push(-parseFloat(document.getElementById("box").value));
    }
    else pile.push(parseFloat(document.getElementById("box").value));
    }
    }
    negative = true;   
    a="";
    document.getElementById("box").value = "";
}
function add(){
    if(multiple)
    {
        b = b * parseFloat(document.getElementById("box").value);
        pile.push(b);
        multiple = false;
    }
    else{
    if(division)
    {
        b = b/parseFloat(document.getElementById("box").value);
        pile.push(b);
        division = false;
    }
    else{    
    if(negative) {
        pile.push(-parseFloat(document.getElementById("box").value));
        negative = false;
    }
    else pile.push(parseFloat(document.getElementById("box").value));
    }
    }
    a="";
    document.getElementById("box").value = "";
}
function result(){
    var res ;
    if(negative){
        res = -parseFloat(document.getElementById("box").value) ;
        negative = false;
    } 
    else res = parseFloat(document.getElementById("box").value) ;
    if (multiple)
    {
        res = res*b;
        multiple = false;
    }
    if(division){
        res = b/res;
    }
    while(pile.length)
    {    
       b= pile.pop();
       res= res + b ;
    } 
   a="";
   document.getElementById("box").value = res ;
}