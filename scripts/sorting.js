const array = [];

document.getElementById("new-array").addEventListener("click", setSize);
document.getElementById("bubble-sort").addEventListener("click", bubbleSort);

function setSize() {
    var size = document.getElementById("sizeRange").value;
    deleteArray();
    generateArray(size);
}

function generateArray(size) {
    for (let i = 0; i < size; i++) {
        var num = Math.floor(Math.random() * 500) + 1;
        // Nemôžu byť duplikáty
        if(!array.includes(num)){
            array.push(num);
        }
    }
    for (let i = 0; i < array.length; i++) {
        const arrayElement = document.createElement('div');
        var height = array[i].toString();
        console.log(array[i]);
        arrayElement.style.height = height + "px";
        arrayElement.innerHTML = "";
        arrayElement.classList.add("array-bar");
        arrayElement.setAttribute("id", array[i].toString());
        document.getElementById("array-container").appendChild(arrayElement);
    }
    return array;   
}

function deleteArray() {
    var elements = document.querySelectorAll('.array-bar');
    for (var element of elements) {
        element.remove();
    }
    array.length = 0;
}

async function bubbleSort() {
    disableButtons(true);
    const timer = ms => new Promise(res => setTimeout(res, ms))
    console.log(array);
    var i, j;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[i] < array[j]) {
                await timer(1);
                const b1 = document.getElementById(array[i].toString()); // i
                const b2 = document.getElementById(array[j].toString()); // j
                
                var ts = b1.style.height;
                var ti = b1.id;
                b1.style.height = b2.style.height;
                b1.id = b2.id;
                b2.style.height = ts;
                b2.id = ti;

                var temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    disableButtons(false);
}

function disableButtons(bool){
    document.getElementById("new-array").disabled = bool;
    document.getElementById("bubble-sort").disabled = bool;
}