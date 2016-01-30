//var first_name = "reid"; two forward slashes mean a single line comment
//var last_name = "park";

/*  
BLOCK COMMENT 
*/

var greeting = "Hello! ";

var first_name = "Reid";

var last_name = "Park";

var message1 = "Don't forget to e-mail Jason about last week's attendance";

var message2 = "Also, make sure to turn in your homework"

var favoriteQuote = "\"Four Score...\"";
var my_image = "<img src=\"images\myImage.png\" /> ";

//use single quotes if you have a lot of illegal characters
var my_images = '<img src="images/myImage.png" /> ';

var goodbye = "See you later";

//BAD variable names (errors!!!)
//var first name = "";
//var 2first name = "";
//var math = "";

//operators
//"=" assigns values

//+= (concatenation assignment operator, string) adds to whatever the variable currently has

//output variables to the console!!!!
/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " + goodbye); 

//My fellow *Americans*, ask not what your *country* can do for *you* - ask what *you* can do for your *country*.

//*People* have *got to* know whether or not their *president* is a crook. Well, I’m *not* a *crook*.

//lets create some variables to hold the parts that don't change....
var static_words1 = "  ";
var static_words2 = " have ";
var static_words3 = " know whether or not their ";
var static_words4 = " is a crook. Well, I’m ";
var static_words5 = " a ";

//create a variable that is used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when clicked on
button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);//this line stops the form from submitting by preventing its default action
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  // document.getElementById("myForm").elements.item(0).value;
  // return false;
}
