function greetUser() {
   
    const nameInput = document.getElementById("nameInput");

   
    const name = nameInput.value.trim();

    
    const outputDiv = document.getElementById("output");

    
    if (name) {
        
        outputDiv.textContent = `Hello, ${name}!`;
        outputDiv.style.color = "blue"; 
    } else {
        
        outputDiv.textContent = "Please enter a name!";
        outputDiv.style.color = "red";
    }
}


function changeText() {
    
    const messageElement = document.getElementById("message");

    
    messageElement.innerText = "Hello, World!";
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;

    document.getElementById("result").innerText = `Result: ${result}`;
}

function updateTitle() {
    const newText = document.getElementById("inputText").value;
    document.getElementById("title").innerText = newText;
}

function concatenateStrings() {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
    const combined = text1 + " " + text2;

    document.getElementById("combinedText").innerText = combined;
}

document.getElementById("changeColor").addEventListener("click", function () {
    document.getElementById("colorBox").style.backgroundColor = "blue";
});


