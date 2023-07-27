// Listen msg from content

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.product) {
        // 在插件弹窗中显示产品名称
        console.log('Product Name: ' + request.product);
      }
});

  
  