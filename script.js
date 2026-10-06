// The text you want to appear
const text = "Welcome to my website..."; 
let index = 0;

function typeLetter() {
    if (index < text.length) {
        // Add one letter to the h1 element
        document.getElementById("WEBSITE").innerHTML += text.charAt(index);
        index++;
        
        
        // Wait 150 milliseconds before typing the next letter
        setTimeout(typeLetter, 150); 
    }
}

//start the typing effect when the window loads
window.onload = typeletter;