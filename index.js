const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i);
}

const alphabets = ["A", "B", "C", "D", "E", "F"];

const hexArray = numbers.concat(alphabets);

let randomArray = [];

const enableResetButton = () => {
    document.querySelector(".reset").removeAttribute("disabled");
};

const disableResetButton = () => {
    document.querySelector(".reset").setAttribute("disabled", "disabled");
};

const enableCopyButton = () => {
    document.querySelector("#copy-btn").removeAttribute("disabled");
};

const disableCopyButton = () => {
    document.querySelector("#copy-btn").setAttribute("disabled", "disabled");
};

const btnClickHandler = () => {
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        let chosenValue = hexArray[rand];
        if (randomArray.length === 0) {
            randomArray.push("#");
        }
        randomArray.push(chosenValue);
    }
    enableResetButton();
    enableCopyButton();
    let str = randomArray.join("");
    document.querySelector(".color-code").textContent = str;
    document.querySelector(".colored-box").innerHTML = " ";
    document.querySelector(".colored-box").style.backgroundColor = str;
    randomArray.splice(0);
};

const resetBtnHandler = () => {
    document.querySelector(".color-code").textContent = " ";
    document.querySelector(".colored-box").innerHTML =
        "<h4>Color will appear here</h4>";
    document.querySelector(".colored-box").style.backgroundColor = "white";
    disableResetButton();
    disableCopyButton();
};

function copyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    document.getElementById("copy-btn").style.setProperty("--opacity", 1);
    setTimeout(() => {
        document.getElementById("copy-btn").style.setProperty("--opacity", 0);
    }, 500);
}

const btn = document.querySelector(".generate");
btn.addEventListener("click", btnClickHandler);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetBtnHandler);

const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", copyToClipboard.bind(null, "copy"));
