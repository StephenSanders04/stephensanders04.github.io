const myImage = document.querySelector("img");
//grabs img from html and stores it in myImage
const myAscii = document.querySelector(".ascii");
//does the same for ascii. there is a '.' infront of ascii because it is a class
myAscii.textContent = "<==";
//changes the text content of ascii to an arrow ascii <==
const myImageText = document.querySelector(".image-text");
let counter = 0;
let loopCounter = 0;
// variable with integer 0 stored in it
styleArray = [null, document.querySelector(".orange-button")];
let myOrangeButton = styleArray[1];
let orangeButtonShow = false;
const buttonArray = [false, false];
//buttonArray 0 = anyButton, 1 = orangeButton
const myArray = ["That's me! Click again to change it back.",
"Change the image anytime with just a click!",
"Me again! Click to switch the image whenever you like!", 
"Click again to read a joke!", 
"Knock knock! Who's there? It's Bannana!", 
"Knock knock! It's Bannana again!", 
"last one! Knock knock! Who could it be?", 
"Orange you glad I didn't say bannana?",];

function revealOrangeButton () {
    styleArray[1].textContent = "Knock Knock";
    styleArray[1].style.background = "orange";
    orangeButtonShow = true;
}
function resetButtons () {
    for(let i = 0; i < 2; i++) {
        buttonArray[i] = false;
        styleArray[1].style.border = "hidden";
    }
    counter = 1;
}
function thisButtonOn (x, y) {
    buttonArray[x] = true;
    styleArray[1].style.border = "groove";
    counter = y;
    buttonArray[0] = true;
}
myOrangeButton.onclick = () => {
    if (orangeButtonShow != false) {
        resetButtons();
        thisButtonOn(1,4);
    } else {
        alert("you haven't unlocked that yet!");
    }
}

myImage.onclick = () => {
    //when the image is clicked it will run this function
    // () => makes this and anonomys funtion
    
    myAscii.style.color = '#0D698B';
    myImageText.style.color = '#0D698B';
    myImageText.textContent = myArray[counter];
    //resets the color of these texts when the function starts
    const mySrc = myImage.getAttribute("src");
    if (loopCounter === 1 && counter > 2 && buttonArray[0] != true) {
        counter = 1;
    } 
    if (counter === 0) {
        myImage.setAttribute("src", "images/stephen-with-snowman.png");
    } else if (counter === 1 && mySrc === "images/stephen-with-snowman.png") {
        myImage.setAttribute("src", "images/computer-graphic.png");
    } else if (counter < 3 && counter > 0) {
            myImage.setAttribute("src", "images/stephen-with-snowman.png");
    } else if (loopCounter === 0 || buttonArray[1] != false) {
        if (counter === 3) {
            myImage.setAttribute("src", "images/computer-graphic.png");
        } else if (counter === 4) {
            myImage.setAttribute("src", "images/stephen-with-snowman.png");
        } else if (counter === 5) {
            myImage.setAttribute("src", "images/computer-graphic.png");
        } else if (counter === 6) {
            myImage.setAttribute("src", "images/stephen-with-snowman.png");
        } else if (counter === 7 && loopCounter === 0 || buttonArray[1] != false) {
            myImage.setAttribute("src", "images/orange-compress.png");
            myAscii.style.color = 'orange';
            myImageText.style.color = 'orange';        
            loopCounter = 1;
            revealOrangeButton();
            resetButtons();
        } 
    } else {
        myImage.setAttribute("src", "images/dead-end.png");
        myImageText.textContent = "UH OH! It looks like I didn't acount for that and you hit my else statement! Try refreshing the page.";
    } 
    counter++
    // ++ adds 1 to the counter making it so the counter goes up each time this function is called
};

let myButton = document.querySelector(".user-button");
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
 "FINE, IF YOU DON'T ENTER SOMETHING, THEN I WILL!",
 "YOU WON'T LIKE THE NAME THAT I WILL GIVE YOU IF YOU DON'T ENTER ANYTHING!",
 "I'LL CALL YOU A STUBBORN MULE, BECAUSE THAT'S IS WHAT YOU ARE!",
 "THIS IS YOUR LAST CHANCE!"
 ];
function setUserName() {
    let myName = prompt(promptArray[arrayCounter]);
    //prompt brings up a box for user input
    //you can put any string in the () to display on the prompt
    //using an array of strings here to have varried prompts
    if (arrayCounter > 17) {
        arrayCounter = 17;
        //these two lines of code should ensure that the counter doesn't go past the final string in the array
    }
    if (arrayCounter === 17) {
        myName = "YOU STUBBORN MULE";
        localStorage.setItem("name", "YOU STUBBORN MULE");
        myHeading.textContent = "Welcome, YOU STUBBORN MULE";
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
            capMyName = "Joe MAMA";
            alert("Joe Mama");
            //joe mama :)
        } else if (capMyName === "No" || capMyName === "Nope" || capMyName === "Never") {
            capMyName = "Negative Nancy";
            alert("Why not though?");
        } else if (capMyName === "Damien Sanders") {
            capMyName = "LARGE FELLA";
            alert("What up bro?");
        } else if (capMyName === "Joyellen Sanders") {
            capMyName = "#1 MOM";
            alert("I appreciate you.");
        } else if (capMyName === "Jacqueline Lefort") {
            capMyName = "Grandma! BIG HUGS <3";
            alert("Hi grandma!");
        } else if (capMyName === "Richard Lefort") {
            capMyName = "Grandpa";
        } else if (capMyName === "Diane Sanders") {
            capMyName = "NANI";
            alert("I hope you enjoy the page nani :D");
        } else if (capMyName === "Alice Will") {
            capMyName = "really great grandma";
            alert("This page just got a whole lot cooler with you here grandma!");
        } else if (capMyName === "Kenneth Sanders") {
            capMyName = "Mr. 'NO'";
            alert("Time flies like an arrow. Fruit flies like a bannana. BUH DUN DUN CHSH");
        } else if (capMyName === "Lindsey Sanderson") {
            capMyName = "can I call you Leonard?";
            alert("Did you think I would forget my soon to be sister in law?");
        } else if (capMyName === "John Grimsly") {
            capMyName = "Jack";
            alert("I miss you Grandpa. I hope I am making you proud.");
        } else if (capMyName === "Dave Will") {
            capMyName = "Dave, you're the best";
            alert("How has your day been Dave? Good I hope.");
        } else if (capMyName === "Shawn Sanders") {
            capMyName = "uncle Shawn";
            alert("How's it going uncle Shawn?");
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
    myHeading.textContent = `Welcome back, ${storedName}`;
    //displays the stored name if on page load
}
myButton.onclick = () => {
    //starts the function when the button is clicked
    if (arrayCounter === 14 || localStorage.getItem("name") === "STUBBORN MULE") {
        //checks to see if the user has ignored the input prompt
        let isSorry = confirm("are you sorry for being stuborn?");
        //confirm brings up an alert box with 'ok' and 'cancel' sellections that return true and false respectively
        if (isSorry === true) {
            arrayCounter = 0;
            setUserName();
            //if user selects 'ok' it resets the counter (alowing use of the button without confirm) and asks for name
        } else {
            alert("Then you will stay a STUBBORN MULE!")
            //if user selects 'cancel' it brings up alert box with message and prevents name reset
        }
    } else {
        arrayCounter = 0;
        setUserName();
    }
     
}
