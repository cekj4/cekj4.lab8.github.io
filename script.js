let userOption=null;
function gameOption(option){
    userOption=option;
    const options=["Rock", "Paper","Scissors"];
    document.getElementByID("placeholder").innerText ="You selected " +userOption;
}
function game(){
    if(userOption===null){
        document.getElementById("placeholder").innerText ="Please select rock, paper or scissors!";
        return;
    }
    const computerOption=Math.floor(Math.random()*3)+1;
    const options=["Rock", "Paper", "Scissors"];
    const userChoice = options[userOption -1];
    const computerChoice=options[computerOption -1];
    
    let message;
    if(userChoice===computerChoice){
        document.getElementById("placeholder").innerText="DRAW";
        userOption=null;
        return;
    } else if(
        (userChoice==="Rock" && computerChoice === "Scissors") || 
        (userChoice==="Paper" && computerChoice === "Rock") ||
        (userChoice==="Scissors" && computerChoice === "Paper")
    ) {
        message="You win!";
    } else {
        message="You lost!";
    }
    document.getElementById("placeholder").innerText= message + " Computer chose " + computerChoice;
    userOption=null;
}