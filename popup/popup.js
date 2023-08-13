// Listen msg from Background
/*
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
});};
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from 'Chatbot'; 




const getTitle = () => {
  console.log("in get title");
  console.log("getTitle() = " + document.title);
 // console.log("getTitle() = " + document.getElementById("productTitle").value);
  return document.title;
}

const getProductName = () => {
  //console.log("in get productname");
    console.log("in get productname");
    console.log("getProductName() = " + document.querySelector('.tb-main-title').textContent);
    return document.querySelector('.tb-main-title').textContent;
  //console.log("getProductName() = " + document.getElementsByTagName("tb-main-title").value);
 // console.log("getTitle() = " + document.getElementById("productTitle").value);
  //return document.getElementById("tb-main-title").innerHTML;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Execute Script 1");
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getTitle //excute exitsting function getTitle
  }, (result) => {//callback function
    console.log("Webpage Title = " + result[0].result);
    document.getElementById("title").innerText ="Webpage Name:"+ result[0].result;
   //document.getElementById("Title").innerText = result[0].result;
  //  console.log(document.getElementsByName("productTitle").innerText);
  });

  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: getProductName
  }, (result) => {
    console.log("Product Title = " + result[0].result);
    document.getElementById("tb-main-title").innerText ="Product Name:"+ result[0].result;
  //  console.log(document.getElementsByName("productTitle").innerText);
  });

});