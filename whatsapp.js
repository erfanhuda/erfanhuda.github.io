function sendMessage() {
    let number = "+6285799663331";
    
    let emailFrom = document.getElementById('email').value;
    let nameFrom = document.getElementById('name').value;
    let textMessage = document.getElementById('description').value;


    var url = "https://wa.me/" + number + "?text="
    + "Name : " + nameFrom + "%0a" 
    + "Email : " + emailFrom + "%0a"
    + "Message : " + textMessage + "%0a%0a";

    window.open(url, '_blank').focus();

}