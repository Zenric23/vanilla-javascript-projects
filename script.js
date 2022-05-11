
 function arrSearch(x){     //array search function
  const arr = [1,25,16,12,11]
  
  if(arr.indexOf(x) == -1){
  
    return document.getElementById("arrSearchDisplay").innerHTML = "NOT FOUND!";  
  }
  
  return document.getElementById("arrSearchDisplay").innerHTML= "FOUND IT  at index " + arr.indexOf(x);
  }
  
  function displaySearch(){  // display array search function
  var y = document.getElementById("search").value;
  let v = parseInt(y);
  
  document.getElementById("arrSearchDisplay").innerHTML = arrSearch(v);
    
  if (isNaN(y)){
  
   document.getElementById("arrSearchDisplay1").innerHTML = "must enter number!";  
   document.getElementById("arrSearchDisplay").innerHTML = "";   
  }
  
   else { document.getElementById("arrSearchDisplay1").innerHTML = ""; }
  }


function allP(){  // finding html element with onClick button
  
  
  const element = document.getElementsByTagName("h1");    // Finding HTML Element by tag name
  const x = document.getElementsByClassName("intro");     // Finding HTML Element by class name 
  const y = document.querySelectorAll("p.intro");         // Finding HTML Elements by CSS Selectors

  document.getElementById("tag").innerHTML = 'The text is: ' + element[1].innerHTML;   // tag
  document.getElementById("class").innerHTML = 'The text is: ' + x[0].innerHTML;    // class
  document.getElementById("cssSelector").innerHTML = 'The first paragraph/text is : ' + y[1].innerHTML;   // css Selector


  const a = document.forms["frm1"];            // Finding HTML Elements by HTML Object Collections
  let text = "";

for (let i = 0; i < a.length ;i++) {              //  loop to display element values (Finding HTML Elements by HTML Object Collections).
  text += a.elements[i].value + "<br>";
}
document.getElementById("html object collection").innerHTML = text;

}




function display(){    // display prompt output of textboxes/inputs with button

    var a = document.getElementById("text1").value;
    var b = document.getElementById("text2").value;  

if (a.length == b.length){

    document.getElementById("output").innerHTML = "TEXT BOXES HAS SAME CHARACTER LENGTH!";
}

else { document.getElementById("output").innerHTML = "NOT SAME CHARACTER LENGTH!"; }



if (isNaN(a) &&  isNaN(b) ){

    document.getElementById("output").innerHTML = "BOTH TEXT BOXES HAS STRING ONLY!";

}

else if (isNaN(a) ||  isNaN(b) ){

    document.getElementById("output").innerHTML = "SOME OF TEXT BOXES CONTAINS NUMBER ONLY";
}
}


setInterval(myFunction, 1);

function myFunction() {  // display running philippine time with the interval 1000/1sec 
    let d = new Date();
    document.getElementById("time").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
  }

  
  function myDisplayer(some) {   // func of promise  object displayer
    document.getElementById("xml123").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(    // method to display promise object
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

 