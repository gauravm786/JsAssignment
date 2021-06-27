function showTime(){
    var date=new Date(); 
    var hour=date.getHours(); 
    var minute=date.getMinutes();
    var second=date.getSeconds();

    var day=date.getDate();
    var month=date.getMonth();
    var year=date.getFullYear();

    var time=hour + " : " + minute + " : "+ second ; 
    var day2=day + " / " + month  + " / "+ year ;

    document.getElementsByTagName('p')[0].innerText=time; 
    document.getElementsByTagName('h3')[0].innerText=day2;
  
}
var myVar = setInterval(showTime, 1000); 

function myStopFunction() {
    clearInterval(myVar); 
  }

  function myStartFunction() {
    window.location.reload() 
  }