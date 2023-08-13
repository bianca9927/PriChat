// Listen msg from content--initial version

// Listen msg from content--initial version

chrome.runtime.onInstalled.addListener(() => {
  console.log("Hello World!");
});

//var value1,value2,value3;

chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    console.log("inside the message listener");
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});


  