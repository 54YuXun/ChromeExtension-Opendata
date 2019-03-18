function getData(url){
    return new Promise((resolve,reject) => {
        $.get(url,function(data){
            var i;
            var allurl = []; 
            var alldata = [];
            //資料集描述
            let Description = $(data).find('div.field.field-name-field-content').text();
            //提供機關
            let orgname = $(data).find('div.field.field-name-field-agency').text();
            //服務分類
            let category = $(data).find('div.field.field-name-field-category').text();
            //爬取 CSV
            let od = $(data).find('a.dgresource.ff-icon.ff-icon-csv');
            //取檔案數目
            let datacount = od.length;
            //根據檔案數目存取所有檔案
            for (i=0; i<datacount; i++)
            {
                let data = od.eq(i);
                let odurl = data.attr('href');
                let oddes = data.next().next().text();
                //動態建立 button 自定義classname data-url 存放 opendata link 預設 disabled
                let button = '<input id="btn'+i+'" type="button" value="⇩" style="margin:0 10px 10px 0" data-url="'+odurl+'" disabled />'
                //動態建立 textbox
                let textbox = '<input type="text" id=tn'+i+' size="5" style ="margin:0 10px 10px 0" />'
                //組成字串
                let txt ='<div>'+button+textbox+oddes+'</div>'
                
                //insert all opendata link to array
                allurl.push(odurl)
                //insert all String to array
                alldata.push(txt);
            }
            resolve({Description,orgname,category,datacount,alldata, allurl});
        });   
    });
}
