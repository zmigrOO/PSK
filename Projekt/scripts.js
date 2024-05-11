function generatePoisson(lambda) {
    var L = Math.exp(-lambda);
    var k = 0;
    var p = 1;
    do {
        k++;
        var u = Math.random();
        p *= u;
    } while (p > L);
    return k - 1;
}

function simulateDiscreteEvent() {
    const lambda_claim = 10;
    const mean_claim = 1000;
    const daily_payment = 11000;
    const initial_capital = 25000;
    let capital = initial_capital;
    const days = 365;
    let capitalData = [];
    for (let i = 0; i < days; i++) {
        const num_claims = generatePoisson(lambda_claim);
        const total_claim_amount = num_claims * mean_claim;
        capital -= total_claim_amount;
        capital += daily_payment;
        if (capital <= 0) {
            capitalData.push(capital);
            return capitalData;
        }
        capitalData.push(capital);
    }
    return capitalData;
}

function simulateMultipleDiscreteEvents(n) {
    let simulationSuccessRate = [];
    let bestSimulation = 0;
    let worstSimulation = [];
    for (let i = 0; i < n; i++) {
        const capitalData = simulateDiscreteEvent();
        if (i == 0) {
            bestSimulation = capitalData;
            worstSimulation = capitalData;
        } else {
            if (worstSimulation[worstSimulation.length - 1] > capitalData[capitalData.length - 1] || worstSimulation.length > capitalData.length) {
                worstSimulation = capitalData;
            }
            if (bestSimulation[bestSimulation.length - 1] < capitalData[capitalData.length - 1] || bestSimulation.length < capitalData.length) {
                bestSimulation = capitalData;
            }
        }
        if (capitalData[capitalData.length - 1] > 0) {
            simulationSuccessRate++;
        }
    }
    return { bestSimulation, worstSimulation, simulationSuccessRate };
}

function generatePoissonDistribution(lambda, n) {
    var distribution = new Array(n + 1).fill(0);
    var end = 0;
    for (var i = 0; i < n; i++) {
        var value = generatePoisson(lambda);
        distribution[value]++;
    }
    for (var i = 0; i < distribution.length; i++) {
        distribution[i] /= n;
        if (distribution[i] != 0) {
            end = i;
        }
    }
    return distribution.slice(0, end + 1);
}