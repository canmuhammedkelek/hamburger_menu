function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById('hmbrgr');
    var z = document.getElementById('logoborder');

    if (x.className === "menubar") {
        x.className += " responsive";
        y.className = "fa fa-close";
        z.className = "menubarspan";
    } else {
        x.className = "menubar";
        y.className = "fa fa-bars";
        z.className = "";
    }
}