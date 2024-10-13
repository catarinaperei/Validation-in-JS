function validate(){
    var text=document.forms["myform"]["name"].value;
    if (text==""){
        alert("Name must be filled out");
        return false;
    }
}