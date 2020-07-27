document.getElementById('can').addEventListener('click', function() {
    var x = document.getElementById("menu");
    var y = document.getElementById('hmbrgr');
    var z = document.getElementById('logoborder');
    var w = document.getElementById('can');

    if (x.className === "menubar") {
        x.className += " responsive";
        y.className = "fa fa-close";
        z.className = "menubarspan";
        w.href = "javascript:void(0);";
    } else {
        x.className = "menubar";
        y.className = "fa fa-bars";
        z.className = "";
        w.href = "";
    }
});