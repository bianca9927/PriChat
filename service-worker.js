// Listen msg from content
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "showExtensionPopup") {
    
    chrome.runtime.openOptionsPage(function () {
      
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        if (activeTab) {
          chrome.tabs.sendMessage(activeTab.id, { input: request.input });
        }
      });
    });
  }
});

  
  