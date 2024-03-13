function random_lehmer(x) {
    x.innerHTML = "";
    let arr = [];
    let a = 62345;
    let m = 121;
    let seed = .2;
    let i = 0;
    while (true) {
        seed = (a * seed) % m;
        if (arr.includes(seed)) {
            // sum of all numbers in the array / i
            x.innerHTML += "Average = " + (arr.reduce((a, b) => a + b, 0) / i) / m + "<br>";
            x.innerHTML += "Deviation = " + (1.0-((arr.reduce((a, b) => a + b, 0) / i) / m)/.5) + "<br>";
            x.innerHTML += "Variation = " + variation(arr, m) + "<br>";
            x.innerHTML += "Deviation = " + (1.0-(variation(arr, m)/(1/12))) + "<br>";
            x.innerHTML += "Count = " + i + "<br>";
            break;
        } else {
            arr.push(seed);
        }
        x.innerHTML += seed +", " +seed/m+ "<br>";
        i++;
    } 
}
function random_lehmer_gr(x) {
    x.innerHTML = "";
    let plot = document.createElement("div");
    plot.style.width = "100%";
    plot.style.position = "absolute";
    plot.style.top = "0";
    let divider = document.createElement("div");
    divider.style.width = "1px";
    divider.style.height = "100%";
    divider.style.position = "absolute";
    divider.style.left = "50%";
    divider.style.borderLeft = "1px solid black";
    divider.innerHTML = "0.5";
    plot.appendChild(divider);
    let arr = [];
    let a = 62345;
    let m = 121;
    let seed = .2;
    let i = 0;
    while (true) {
        seed = (a * seed) % m;
        if (arr.includes(seed)) {
            // sum of all numbers in the array / i
            x.innerHTML += "Average = " + (arr.reduce((a, b) => a + b, 0) / i) / m + "<br>";
            let Variation = document.createElement("div");
            Variation.style.width = "1px";
            Variation.style.height = "100%";
            Variation.style.position = "absolute";
            Variation.style.top = "0";
            Variation.style.left = 100*(arr.reduce((a, b) => a + b, 0) / i) / m + "%";
            Variation.style.borderLeft = "1px solid red";
            plot.appendChild(Variation);
            x.innerHTML += "Deviation = " + (1.0-((arr.reduce((a, b) => a + b, 0) / i) / m)/.5) + "<br>";
            x.innerHTML += "Variation = " + variation(arr, m) + "<br>";
            x.innerHTML += "Deviation = " + (1.0-(variation(arr, m)/(1/12))) + "<br>";
            x.innerHTML += "Count = " + i + "<br>";
            break;
        } else {
            arr.push(seed);
        }
        let div = document.createElement("div");
        div.style.marginLeft = 100*seed/m + "%";
        div.style.width = "2px";
        div.style.height = "2px";
        div.style.outline = "1px solid black"; 
        div.style.borderRadius = "50%";
        plot.appendChild(div);
        i++;
    } 
    x.appendChild(plot);
}
function variation(array, m) {
    let sum = 0;
    let mean = array.reduce((a, b) => a + b, 0)/m / array.length;
    for (let i = 0; i < array.length; i++) {
        sum += (array[i]/m - mean)**2;
    }
    return sum / array.length;
}
function random_vonneumann(x, seed, iterations) {
    x.innerHTML = "";
    function middleSquare() {
        let s = (seed**2).toString();
        while (s.length != 8) {
            s = "0" + s;
        }
        seed = parseInt(s.substring(2, 6));
        console.log(s);
        x.innerHTML += s +", "+ seed + "<br>";
        return;
    }
    for (let i = 0; i < iterations; i++) {
        middleSquare();
    }
}
function pi_montecarlo(n, p) {
    let inside = 0;
    for (let i = 0; i < n; i++) {
        let x = Math.random();
        let y = Math.random();
        if (x * x + y * y < 1) {
            inside++;
        }
    }
    p.innerHTML = (4 * inside / n).toString();
    
}