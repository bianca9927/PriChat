// Listen msg from content--initial version

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  //    if (request.product) {
    //    console.log('Product Name: ' + request.product);
      //  chrome.runtime.sendMessage({product: request.product });
      //}
      
//});


//use long connect
let port;
chrome.runtime.onConnect.addListener(function (newPort) {
    port = newPort;
    console.log("Connected to Popup.");
  }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.product) {
    console.log('Product Name: ' + request.product);
    if (port) {
      port.postMessage({product_forpopup: request.product });
    }
  }
});


  