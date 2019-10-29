$(document).ready(function(){
    
    var addTwo = document.getElementById('addTwo');
    addTwo.onclick = () => {
        location.assign("/addTwo");
    }

    var destroy = document.getElementById('destroy');
    destroy.onclick = () => {
        location.assign("/destroy");
    }
});