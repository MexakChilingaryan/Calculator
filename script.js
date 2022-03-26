let ashot1 = document.querySelectorAll('.ashot1')
let item2 = document.getElementById('item2')
let x;
let y;
let z;
let k1 = [];
let equal = document.getElementById('equal')
for (let i = 0; i < ashot1.length; i++) {

    ashot1[i].addEventListener("click", function() {

        if (x === undefined) {
            x = ashot1[i].innerHTML
            k1[0] = 2;
        } else if ((k1[0] === 2) && ((ashot1[i].innerHTML != "+") && (ashot1[i].innerHTML != "x") && (ashot1[i].innerHTML != "/") && (ashot1[i].innerHTML != "-"))) {
            x += ashot1[i].innerHTML;
        } else if (y === undefined) {
            y = ashot1[i].innerHTML
            k1[0] = 3;


        } else if (z === undefined) {
            z = ashot1[i].innerHTML
        } else if ((k1[0] === 3) && ((ashot1[i].innerHTML != "+") && (ashot1[i].innerHTML != "x") && (ashot1[i].innerHTML != "/") && (ashot1[i].innerHTML != "-" && ashot1[i].innerHTML != "="))) {
            z += ashot1[i].innerHTML;
        }
        console.log(k1[0])
        setTimeout(() => {
            if (x !== undefined && z !== undefined && y !== undefined && k1[0] === 3) {
                equal.addEventListener("click", function() {
                    if (y === "+") {
                        item2.innerHTML = (+x) + (+z)
                        console.log((+z));
                        console.log((+z));
                    } else if (y === "-") {
                        item2.innerHTML = (+x) - (+z)
                    } else if (y === "x") {
                        item2.innerHTML = (+x) * (+z)
                    } else if (y === "/") {
                        item2.innerHTML = (+x) / (+z)
                    }
                    x = item2.innerHTML;
                    y = undefined;
                    z = undefined;
                    k1[0] = 2;
                })
            }
        }, 300);
        item2.innerHTML += ashot1[i].innerHTML

    })


}