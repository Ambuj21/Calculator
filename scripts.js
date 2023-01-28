
var inputField = document.getElementById("exp");
for(i = 0 ; i < document.querySelectorAll('.btn').length; i++)
{

//   document.querySelectorAll('.btn')[i].addEventListener('keypress', function(){ //for character keys
//   console.log(event.key);
//   var key = check(event.key);
//   buttonAnimation(key);
// });

  document.querySelectorAll('.btn')[i].addEventListener('keydown', function(){ // for all keys
  var key = check(event.key);
  if(event.key != "Delete" && event.key != "Clear" && key != "Delete" &&key != null){inputField.value += event.key; }
  else{Delsome(event.key);}
  buttonAnimation(key);
  if(event.key == "="){solve();}
  });


  document.querySelectorAll('.btn')[i].addEventListener('click', function(){
  var key = check(this.innerHTML);
  if(key != "Clear" && key != "Delete" && key != null){inputField.value += this.innerHTML;}
  else{Delsome(key);}
  buttonAnimation(key);
  if(this.innerHTML == "="){solve();}
  });
}


function buttonAnimation(currKey)
{
   var activeButton = document.querySelector(".num" + currKey);
   if(activeButton == null) return ;
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");}
     , 50);
}

function check(key)
{
  switch (key) {
    case "+": return "p";
    case "-": return "s";
    case "/": return "d";
    case "=": return "e";
    case "*": return "m";
    case " " : return "space";
    case "^" : return "pow";
    case "Delete": return key;
    case "Backspace": return "Delete";
    case "Clear": return key;
    default: {
       for(i = 0 ; i <= 9; i++)
          if(i.toString() == key) return key;
      return null;
    };
  }
}

function Delsome(newEvent)
{
    if(newEvent == "Clear"){
         inputField.value = '';
         return ;
       }
    else if(newEvent == "Delete" || newEvent == "Backspace")
    {
       var string = inputField.value.slice(0,-1);
       inputField.value = string;

    }
}

var ans = 0;
function solve()
{
   var oper ="";
   var ans = 0, num = 0;
   for(i = 0 ; i < inputField.value.length; i++)
   {

     let ele = inputField.value[i]-'0';
      if(ele  >= 0 && ele <= 9)
      {
         ans = ans*10 + ele;
      }
      else {
          if(oper != "")
          {
            if(oper == "+")
                ans = ans + num;
            else if(oper == "-")
              ans = num - ans;
            else if(oper == "*")
              ans = ans * num;
            else if(oper == "^")
              ans = Math.pow(num, ans);
            else if(oepr = "/")
              ans = num / ans;
        }
        num = ans;
        oper = inputField.value[i];
        ans = 0;
      }
      console.log(num);
   }
   ans = num;
   inputField.value = ans;
    return ;
}
