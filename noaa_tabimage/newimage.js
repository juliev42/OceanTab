function setNewImage() 
{
//    alert('ok');
    var randNum = Math.floor((Math.random() * 58) + 200);
    var url_str = "url(https://aamboceanservice.blob.core.windows.net/oceanservice-prod/gallery/" + randNum + "-b.jpg)";
//    alert(url_str);
//    document.body.style.backgroundImage  = "url(https://aamboceanservice.blob.core.windows.net/oceanservice-prod/gallery/257-b.jpg)"; 
    document.body.style.backgroundImage  = url_str; 
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    }
    
window.onload = setNewImage;