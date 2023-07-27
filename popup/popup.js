// 接收来自 content script 的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "showProductName") {
      // 获取产品名称，并设置为popup.html中展示元素的文本内容
      const productNameDiv = document.getElementById("tb-main-title");
      if (productNameDiv) {
        productNameDiv.innerText = request.productName;

      }
      
    }
  });
  