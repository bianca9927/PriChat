// Listen msg from content

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //    if (request.product) {
    //    console.log('Product Name: ' + request.product);
      //  chrome.runtime.sendMessage({product: request.product });
      //}
      
//});

let port;

chrome.runtime.onConnect.addListener(function (newPort) {
  
    port = newPort;
    console.log("Connected to Popup.");
  }
);

// 监听来自 content.js 的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.product) {
    console.log('Product Name: ' + request.product);
    if (port) {
      // 向 Popup 发送消息
      port.postMessage({product_forpopup: request.product });
    }
  }
});


  