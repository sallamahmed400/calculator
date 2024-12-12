const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

let expreeion = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "C") {
            expreeion = "";
            display.value = "";
        } else if (value === "=") {
            display.value = expreeion;
            try {

                expreeion = eval(expreeion);
                display.value = expreeion;
            } catch(error){
                display.value ="error"
                expreeion = "";
            }
            
        }else if (value === "del") {
            expreeion = expreeion.slice(0, -1)
            display.value = expreeion;
        }else {
            expreeion += value;
            display.value = expreeion;
        }

    });
});
