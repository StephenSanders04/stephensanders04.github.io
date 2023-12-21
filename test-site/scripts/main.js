const myImage = document.querySelector("img");
//grabs img from html and stores it in myImage
const myAscii = document.querySelector(".ascii");
//does the same for ascii. there is a '.' infront of ascii because it is a class
myAscii.textContent = "<==";
//changes the text content of ascii to an arrow ascii <==
const myImageText = document.querySelector(".image-text");
let counter = 0;
// variable with integer 0 stored in it


myImage.onclick = () => {
    //when the image is clicked it will run this function
    // () => makes this and anonomys funtion
    myAscii.style.color = 'white';
    myImageText.style.color = 'white';
    //resets the color of these texts when the function starts
    const mySrc = myImage.getAttribute("src");
    if (counter === 0) {
        myImage.setAttribute("src", "images/stephen-with-snowman.png");
        myImageText.textContent = "That's me! Click again to change it back.";
    } else if (counter === 3) {
        myImage.setAttribute("src", "images/computer-graphic.png");
        myImageText.textContent = "Click again to read a joke!";
    } else if (counter === 4) {
        myImage.setAttribute("src", "images/stephen-with-snowman.png");
        myImageText.textContent = "Knock knock! Who's there? It's Bannana!";
    } else if (counter === 5) {
        myImage.setAttribute("src", "images/computer-graphic.png");
        myImageText.textContent = "Knock knock! It's Bannana again!";
    } else if (counter === 6) {
        myImage.setAttribute("src", "images/stephen-with-snowman.png");
        myImageText.textContent = "last one! Knock knock! Who could it be?";
    } else if (counter === 7) {
        myImage.setAttribute("src", "images/oranges.png");
        myAscii.style.color = 'orange';
        myImageText.style.color = 'orange';
        myImageText.textContent = "Orange you glad I didn't say bannana?";
        counter = counter - 7;
    } else if (counter === 2) {
        myImage.setAttribute("src", "images/stephen-with-snowman.png");
        myImageText.textContent = "Me again! Click to switch the image whenever you like!";
    } else {
        myImage.setAttribute("src", "images/computer-graphic.png");
        myImageText.textContent = "Change the image anytime with just a click!";
    } 
    counter++
    // ++ adds 1 to the counter making it so the counter goes up each time this function is called
};
let myButton = document.querySelector("button");
//grabs the button from html so we can add function to it later
let myHeading = document.querySelector("h1");
//grabs the heading from html so we can use a user input to change the name
let arrayCounter = 0;
const promptArray = ["Please enter your name.",
 "Enter your name please...",
 "I would appreaciate if you entered your name.",
 "If you allready had a name, just re-enter it.",
 "It doesn't cost you anything at all to enter your name.",
 "You don't even have to enter your real name, you can enter anything at all.",
 "Do you need help picking something to enter? how about 'joe'?",
 "Why are you being so difficult? Please enter something...", 
 "cmon just enter something! ANYTHING! ANYTHING AT ALL!",
 "It's a simple request! Please enter something!", 
 "JUST TYPE SOMETHING IN! IT'S REALLY EASY!",
 "I WON'T LET YOU GO UNTIL YOU ENTER SOMETHING!",
 "STOP BEING SO STUBORN AND ENTER SOMETHING ALREADY!", 
 "YOU WON'T ENTER ANYTHING BECAUSE YOU HATE ME, IS THAT IT!?", 
 "FINE, IF YOU DON'T ENTER SOMETHING RIGHT NOW, THEN I WILL!"
 ];
function setUserName() {
    let myName = prompt(promptArray[arrayCounter]);
    //prompt brings up a box for user input
    //you can put any string in the () to display on the prompt
    //using an array of strings here to have varried prompts
    if (arrayCounter > 14) {
        arrayCounter = 14;
        //these two lines of code should ensure that the counter doesn't go past the final string in the array
    }
    if (arrayCounter === 14) {
        myName = "STUBORN MULE";
        localStorage.setItem("name", "STUBORN MULE");
        myHeading.textContent = "Welcome, STUBORN MULE";
        //if the user goes through all strings in the array without making an input. they will be assigned a name chosen by me
    } else if (!myName) {
        arrayCounter++;
        setUserName();
        //if the user fails to input the prompt, it will go to the next string in the array and start the function over
    } else {
        myName = myName.replace(/\w/g, letter => letter.toLowerCase());
        //uses regexr to select all words with \w and lowercase all of them. / starts the regexr and /g ends it
        let capMyName = myName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        //uses regexr to select first letter of each word and upercase them. go to regexr.com for more info
        if (capMyName === "Joe") {
            capMyName = "Joe Mama";
            alert("Joe Mama");
            //joe mama :)
        }
        localStorage.setItem("name", capMyName);
        myHeading.textContent = `Welcome, ${capMyName}`;
        //if the user inputs into the prompt, it will store the input and display it
    } 
}

if (!localStorage.getItem("name")) {
    setUserName();
    //if there is no stored name when the page loads it will start the setUserName function
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
    //displays the stored name if on page load
}
myButton.onclick = () => {
    //starts the function when the button is clicked
    if (arrayCounter === 14 || localStorage.getItem("name") === "STUBORN MULE") {
        //checks to see if the user has ignored the input prompt
        let isSorry = confirm("are you sorry for being stuborn?");
        //confirm brings up an alert box with 'ok' and 'cancel' sellections that return true and false respectively
        if (isSorry === true) {
            arrayCounter = 0;
            setUserName();
            //if user selects 'ok' it resets the counter (alowing use of the button without confirm) and asks for name
        } else {
            alert("Then you will stay a STUBORN MULE!")
            //if user selects 'cancel' it brings up alert box with message and prevents name reset
        }
    } else {
        arrayCounter = 0;
        setUserName();
    }
     
}
