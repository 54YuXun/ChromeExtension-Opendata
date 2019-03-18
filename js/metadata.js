document.addEventListener('DOMContentLoaded', function (e) {
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    var i;
    var url = tabs[0].url;
    var title = tabs[0].title;
    $("#ucontent").text(url);   
    $("#tcontent").text(title);

    getData(url).then(e => {
        $("#oddes").text(e.Description);
        $("#odorgname").text(e.orgname);
        $("#odcategotry").text(e.category);
        for(i=0;i<e.datacount;i++)
        {
            //create button into html
            $("#dataset").append(e.alldata[i]); 
            //get button data
            document.getElementById("btn"+i).addEventListener("click",(c)=>{
                go(c);
            }, false);
            // check textbox 
            document.getElementById("tn"+i).addEventListener("keyup",(k)=>{
                check(k);
            }, false);
        }
    });
    });
});
