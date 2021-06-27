var addBtn=document.getElementById('addBtn');

addBtn.addEventListener("click", function(){ 
    sessionStorage.clear()
    var addName=document.getElementById('addName');
    var addCollege=document.getElementById('addCollege');
    var addLocation=document.getElementById('addLocation');
    var fileupload=document.getElementById('fileupload');

    var id=sessionStorage.getItem("id"); 
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    var myObj={
        name:addName.value,
        college:addCollege.value,
        location:addLocation.value
    }
    idObj.push(myObj);  
    sessionStorage.setItem("id", JSON.stringify(idObj));
    addName.value="";  
    addCollege.value="";
    addLocation.value="";
    showId(); 
})

function showId(){
    var id=sessionStorage.getItem("id");
    if(id==null){
        idObj=[];
    }
    else
    {
        idObj=JSON.parse(id);
    }
    var html=""; 
    idObj.forEach(function(element){ 
        html+=`
        name:${element.name}
        <br><br>
        college name:${element.college}
        <br><br>
        location:${element.location} `;
    });
    var idStudent=document.getElementById("idStudent"); 
    if(idObj.length!=0){
        idStudent.innerHTML=html;
    }
}


var image=document.getElementById('imgDisplayed'); 
var imageTwo=document.getElementById('imgDisp');
function loadImage(event){
    image.src=URL.createObjectURL(event.target.files[0]);
    imageTwo.src=URL.createObjectURL(event.target.files[0]);

}