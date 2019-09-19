"use strict";

document.addEventListener("DOMContentLoaded", event => {
  const codeForm = document.querySelector(".survey-code-form");
  codeForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(codeForm);
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 201) {
          window.location = "/pdx";
        } else {
          console.error(httpRequest.responseText);
          document.querySelector(".error-message").innerHTML =
            "There was a problem submitting your code. Please try again later.";
        }
      }
    };
    httpRequest.open("POST", "/pdx/survey/");
    httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const body = JSON.stringify({code: data.get('code')});
    httpRequest.send(body);
  });
});
