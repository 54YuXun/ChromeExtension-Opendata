function go(self) {
    // console.log(self, self.path[0].attributes[4].nodeValue, self.path[0].id);
    // button href
    var datalink = self.path[0].attributes[4].nodeValue;
    // button ID
    var buttonID =  self.path[0].id;
    // textbox value
    var textboxid = self.path[0].id.replace("btn","tn");
    var textboxval = $('#'+textboxid).val();
    
    // console.log($('#'+textboxid).val());
    // console.log(datalink);

    loadData(datalink,textboxval);

}
function check(self) {
    // get words length which in textbox
    var len = self.target.value.length;
    var tnID = self.path[0].id.replace("tn","");

    // $("#btn"+tnID).attr('disabled', (len > 0 ? false : true)); // jquery 
    var btn = document.getElementById("btn"+tnID);
    btn.disabled = len > 0 ? false : true;
}