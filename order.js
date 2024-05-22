var count1= count2= count3= count4= count5= count6= count7 = 0;
var a = b = c =d = e = f =g = 0;

function PST() {
    var price = 500;
    count1++;
    a = price* count1;
    document.getElementById("PST").innerHTML = 'Paneer Shahi Thali : ' + count1;
    document.getElementById("p1").innerHTML = price*count1;
}
function PASTA() {
    var price = 400;
    count2++;
    b = price* count2;
    document.getElementById("PASTA").innerHTML = 'Pasta : ' + count2;
    document.getElementById("p2").innerHTML = price* count2;
}
function NDL() {
    var price = 275;
    price_new = price + 10;
    count3++;
    c = price_new* count3;
    document.getElementById("NDL").innerHTML = 'Noodles : ' + count3;
    document.getElementById("p3").innerHTML = price_new* count3;
}
function PIZZA() {
    var price = 450;    
    count4++;
    d = price* count4;
    document.getElementById("PIZZA").innerHTML = 'Pizza : ' + count4;
    document.getElementById("p4").innerHTML = price* count4;
}
function SR() {
    var price = 150;
    count5++;
    e = price* count5;
    document.getElementById("SR").innerHTML = 'Spring Rolls : ' + count5;
    document.getElementById("p5").innerHTML = price* count5;
}
function PT() {
    var price = 299;
    count6++;
    f = price* count6;
    document.getElementById("PT").innerHTML = 'Paneer Tikka : ' + count6;
    document.getElementById("p6").innerHTML = price* count6;
}
function CB() {
    var price = 179;
    count7++;
    g = price* count7;
    document.getElementById("CB").innerHTML = 'Chole Bhature : ' + count7;
    document.getElementById("p7").innerHTML = price* count7;
}

var total = 0;
function place(){
    total = a + b +c +d +e +f +g;
    document.getElementById("total").innerHTML =   a + b +c +d +e +f +g + " Rupees";
}

function quiz(){
    ques1 = prompt("Which country won the last Champions Trophy");
    ques2 = prompt("Which country won the ICC World Cup 2023?");
    ques3 = prompt("Which country hosted the ICC World Cup 2023?");
    ques4 = prompt("When is the next T20 World Cup?");
    ques5 = prompt("Which country won the first T20 World Cup?");
    
    var score = 0;
    if (ques1 == "Pakistan" || ques1 == "pakistan" || ques1 == "PAK"){
        score++;
    }
    if(ques2 == "Australia" || ques2 =="australia" || ques2 == "AUS"){
        score++;
    }
    if(ques3 =="India" || ques3 == "india" || ques3 =="IND"){
        score++;
    }
    if (ques4 =="2024"){
        score++;
    }
    if(ques3 =="India" || ques3 == "india" || ques3 =="IND"){
        score++;
    }


    if(score >= 3){
        total = total/2;
        document.getElementById("total").innerHTML ="Hurray, your bill after discount is : " + total;
    }
    if (score <3){
        document.getElementById("total").innerHTML = "Alas, better luck next time. Your bill is " + total;
    }
}


function reset_order(){
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p3").innerHTML = "";
    document.getElementById("p4").innerHTML = "";
    document.getElementById("p5").innerHTML = "";
    document.getElementById("p6").innerHTML = "";
    document.getElementById("p7").innerHTML = "";
    document.getElementById("PST").innerHTML = "";
    document.getElementById("PASTA").innerHTML = "";
    document.getElementById("NDL").innerHTML = "";
    
    document.getElementById("PIZZA").innerHTML = "";
    document.getElementById("SR").innerHTML = "";
    document.getElementById("PT").innerHTML = "";
    document.getElementById("CB").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}