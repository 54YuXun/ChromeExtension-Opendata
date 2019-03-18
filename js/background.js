// 複製網頁
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.getSelected(null,function(tab) {
//         var tablink = tab.url;
//         // alert(tablink);
//         chrome.tabs.create({ url: tablink });
//     });
//   });

// chrome.browserAction.onClicked.addListener(function(tab) {
//     function myFunction() {
//         document.getElementById("title").value = "Johnny Bravo";
//     }
// });
  
// // URL
// var aa = $x("/html/head/link[7]")
// console.log(aa[0].href);
// // title 
// var aa = $x("//*/div[1]/div/h1")
// console.log(aa[0].innerHTML);
// // opendata encoding
// var aa = $x("//*[@id='r0']/div[3]/div[2]/div")
// console.log(aa[0].innerText);
// // Data Count
// var aa = $x("//*/div[2]/div[2]/div[1]/div[4]/div[2]")
// console.log(aa[0].childElementCount);



// var background = chrome.extension.getBackgroundPage(); 

// getData()
// .then(info => checkIfExist(info))
// .then(info => {
//     //creates chrome notification
// })
// .then(info =>{
//     //save the link so that we do not show the notification again
// })
// function getData(){
//     return new Promise((resolve,reject) => {
//         $.get('https://data.gov.tw/dataset/14454',function(data){
//             console.log(data);
//         });
//     });
// }

// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
//     console.log('1'+ response);
// });

