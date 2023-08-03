//Listen detail page info
let productName = document.querySelector('.tb-main-title').textContent;
chrome.runtime.sendMessage({product: productName});

  

