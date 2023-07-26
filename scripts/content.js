//Listen user input
document.addEventListener("input", function (event) {
    const userInput = event.target.value;
    // 向 background script 发送消息
    chrome.runtime.sendMessage({ action: "showExtensionPopup", input: userInput });
  });
  
  