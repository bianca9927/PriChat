//Listen detail page info

// 使用选择器获取包含产品名称的元素 测试
let productName = document.querySelector('.tb-main-title').textContent;
chrome.runtime.sendMessage({product: productName});
