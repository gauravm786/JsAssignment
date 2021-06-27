// Collection Of Quotes
var quotes = [{
    quote: `Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.`,
    author: `- William Faulkner`
}, {
    quote: `Every champion was once a contender that refused to give up.`,
    author: `- Rocky Balboa`
}, {
    quote: `Start before you’re ready.`,
    author: `- Terry Pratchett`
}, {
    quote: `If the book is true, it will find an audience that is meant to read it.`,
    author: `- Wally Lamb`
}, {
    quote: `Everyone has a plan 'till they get punched in the mouth.`,
    author: `- Mike Tyson`
}, {
    quote: `Always be the hardest worker in the room`,
    author: `- Dwayne Johnson`
}, {
    quote: `Eat sleep conquer Repeat.`,
    author: `- Brock Lesnar`
}, {
    quote: `Keep calm and never give up.`,
    author: `- John Cena`
}, {
    quote: `I don't fight for the money.I fight for my legacy.I fight for history.I fight for my people.`,
    author: `- Khabib Nurmagomedov`
}, {
    quote: `If you get up in the morning and think the future is going to be better, it is a bright day.`,
    author: `- Elon Musk`
}, ]


var quoteBtn = document.getElementById('quote-btn');


var quote = document.querySelector('.quote');
var author = document.querySelector('.author');

var color = ["red", "green", "blue", "grey", "pink","#EBAE32","#C06AEB","yellow"];
var i = 0;


quoteBtn.addEventListener('click', () => {
    var random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]; 
    document.querySelector("button").style.background = color[i];
    var ele=document.getElementById("qout");
    ele.style.color=(color[i]);
    var ele2=document.getElementById("auth");
    ele2.style.color=(color[i]);
    

    
})


var ele=document.getElementById("demo");
var today=new Date();
var hourNow=today.getHours();

var greeting;
if (hourNow >18){ 
    greeting ='Evening';
    ele.style.color='white';
   
}
else if(hourNow>12){ 
    greeting='Afternoon';
    ele.style.color='white';
     
}
else if(hourNow>0){ 
    greeting='Morning';
    ele.style.color='white';

}
else{
    greeting='welcome';
}
document.getElementById("demo").innerHTML=`let's start our ${greeting} with a new quotes`