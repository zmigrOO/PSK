function random_lehmer(x, m, a, seed) {
    x.innerHTML = "";
    let table = document.createElement("table");
    let arr = [];
    let i = 0;
    while (true) {
        seed = (a * seed) % m;
        if (arr.includes(seed)) {
            x.appendChild(table);
            table = document.createElement("table");
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerHTML = "Count = " + i;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Expected";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Actual";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Deviation";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerHTML = "Average";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "0.5";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = (arr.reduce((a, b) => a + b, 0) / i) / m;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = 1.0-((arr.reduce((a, b) => a + b, 0) / i) / m)/.5;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerHTML = "Variation";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "1/12";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = variation(arr, m);
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = 1.0-(variation(arr, m)/(1/12));
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            x.appendChild(table);
            break;
        } else {
            arr.push(seed);
        }
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.style.border = "1px solid black";
        let cell2 = document.createElement("td");
        cell2.style.border = "1px solid black";
        cell1.innerHTML = seed;
        cell2.innerHTML = seed/m;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
        i++;
    } 
}
function random_lehmer_gr(x, m, a, seed) {
    x.innerHTML = "";
    let plot = document.createElement("div");
    plot.style.width = "100%";
    plot.style.top = "0";
    plot.style.position = "relative";
    plot.style.overflow = "hidden";
    let divider = document.createElement("div");
    divider.style.width = "1px";
    divider.style.height = "100%";
    divider.style.position = "absolute";
    divider.style.left = "50%";
    divider.style.borderLeft = "1px solid black";
    divider.innerHTML = "0.5";
    plot.appendChild(divider);
    let arr = [];
    let i = 0;
    while (true) {
        seed = (a * seed) % m;
        if (arr.includes(seed)) {
            // sum of all numbers in the array / i
            let avg = document.createElement("div");
            avg.style.width = "1px";
            avg.style.height = "100%";
            avg.style.position = "absolute";
            avg.style.top = "0";
            avg.style.left = 100*(arr.reduce((a, b) => a + b, 0) / i) / m + "%";
            avg.style.borderLeft = "1px solid red";
            plot.appendChild(avg);
            x.appendChild(plot);
            let table = document.createElement("table");
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerHTML = "Count = " + i;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Expected";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Actual";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "Deviation";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerHTML = "Average";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "0.5";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = (arr.reduce((a, b) => a + b, 0) / i) / m;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = 1.0-((arr.reduce((a, b) => a + b, 0) / i) / m)/.5;
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerHTML = "Variation";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = "1/12";
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = variation(arr, m);
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            cell = document.createElement("td");
            cell.innerHTML = 1.0-(variation(arr, m)/(1/12));
            cell.style.border = "1px solid black";
            row.appendChild(cell);
            table.appendChild(row);
            x.appendChild(table);
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
    function middleSquare() {
        let s = (seed**2).toString();
        while (s.length != 8) {
            s = "0" + s;
        }
        seed = parseInt(s.substring(2, 6));
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.innerHTML = s;
        cell.style.border = "1px solid black";
        row.appendChild(cell);        
        table.appendChild(row);
        cell = document.createElement("td");
        cell.innerHTML = seed/10000;
        cell.style.border = "1px solid black";
        row.appendChild(cell);
        return row;
    }
    x.innerHTML = "";
    let table = document.createElement("table");
    for (let i = 0; i < iterations; i++) {
        table.appendChild(middleSquare());
    }
    x.appendChild(table);
}
function pi_montecarlo(n, p) {
    p.innerHTML = "";
    let plot = document.createElement("div");
    plot.style.height = "100%";
    plot.style.aspectRatio = "1/1";
    plot.style.position = "absolute";
    plot.style.top = "0";
    plot.style.left = "right";
    let dividerx = document.createElement("div");
    dividerx.style.width = "1px";
    dividerx.style.height = "100%";
    dividerx.style.position = "absolute";
    dividerx.style.left = "50%";
    dividerx.style.borderLeft = "1px solid black";
    dividerx.innerHTML = "0";
    plot.appendChild(dividerx);
    let dividery = document.createElement("div");
    dividery.style.width = "100%";
    dividery.style.height = "1px";
    dividery.style.position = "absolute";
    dividery.style.top = "50%";
    dividery.style.borderTop = "1px solid black";
    dividery.innerHTML = "0";
    plot.appendChild(dividery);
    let inside = 0;
    for (let i = 0; i < n; i++) {
        let x = Math.random()*2-1;
        let y = Math.random()*2-1;
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.left = 50*x+50 + "%";
        div.style.top = 50*y+50 + "%";
        div.style.backgroundColor = "gray";
        div.style.opacity = "1";
        div.style.borderRadius = "50%";
        if (x * x + y * y < 1) {
            inside++;
            div.style.backgroundColor = "blue"; 
            div.style.opacity = "1";    
        }
        plot.appendChild(div);
    }
    let pi = document.createElement("div");
    pi.innerHTML = "π = " + (4 * inside / n).toString();
    pi.style.backgroundColor = "white";
    pi.style.height = "fit-content";
    pi.style.width = "fit-content";
    pi.style.position = "absolute";
    pi.style.bottom = "0";
    pi.style.left = "0";
    pi.style.border = "1px solid black";

    plot.appendChild(pi);
    p.appendChild(plot);
}