function loadData(data,table) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(data,table, this.responseText);
        // this.responseText;
        }
    };
    // xhttp.open("GET", "http://127.0.0.1:5000?url="+data+"&TN="+table, true);
    xhttp.open("GET", "http://127.0.0.1:5000?url="+encodeURIComponent(data)+"&TN="+encodeURIComponent(table), true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xhttp.send();
}