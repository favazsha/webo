// Change this text to whatever you want to display!
const text = "Hello World! Welcome to my site."; 
let index = 0;

function typeLetter() {
    if (index < text.length) {
        // Safely add one letter at a time to the h1 element
        document.getElementById("WEBSITE").textContent += text.charAt(index);
        index++;
        
        
        // Wait 150 milliseconds before typing the next letter
        setTimeout(typeLetter, 150); 
    }
}

// Fixed capitalization: Starts the typing effect when the window finishes loading
window.onload = typeLetter; 
