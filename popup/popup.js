// Listen msg from Background
window.onload = function() {
  const port = chrome.runtime.connect({ name: "popupConnection" });


port.onConnect.addListener(function() {
  console.log("Connected to Background.");

  port.onMessage.addListener(function(request) {
    console.log("Received message from Background:", request);
      if (request.product_forpopup) {
        console.log('Product Name in Popup: ' + request.product_forpopup);
        document.getElementById("product-name").innerText = request.product_forpopup;
      }
    
  });
});
};
