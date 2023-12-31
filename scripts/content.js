//Listen detail page info
//let productName = document.querySelector('.tb-main-title').textContent;
//chrome.runtime.sendMessage({product: productName});

//send msg to background
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      // Collect the necessary data. 
      // (For your specific requirements `document.querySelectorAll(...)`
      //  should be equivalent to jquery's `$(...)`.)
      var domInfo = {
        productName: $('.tb-main-title').text(),
      //  total: document.querySelectorAll('*').length,
       // inputs: document.querySelectorAll('input').length,
       // buttons: document.querySelectorAll('button').length,
      };
  
      // Directly respond to the sender (popup), 
      // through the specified callback.
      response(domInfo);
    }
  });
  

