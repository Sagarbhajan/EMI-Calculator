let principal;
let dueTotal;
let term;


function updateChart() {
    // here we used number(docume......) to make sure that the value is converted to a number if we dont write number then it will act as a string
    const principal = Number(document.getElementById("principal").value);
    const due = Number(document.getElementById("due").value);

    const chartData = [principal, due];

    const chartDiv = document.getElementById("chartDiv");
    const chartCanvas = document.getElementById("myChart");

    if (chartCanvas) {
        chartDiv.removeChild(chartCanvas);
    }

    const canvas = document.createElement("canvas");
    canvas.id = "myChart";
    chartDiv.appendChild(canvas);

    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: ["principal", "due"],
            datasets: [
                {
                    data: chartData,
                    backgroundColor: ["#ff6384", "#36a2eb"],
                },
            ],
        },
        options: {
            maintainAspectRatio: false
        }
    });
}


function input() {
    principal = document.getElementById("principal").value;
    term = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;
    let emi = document.getElementById("emi");
    let amtPayable = document.getElementById("amtPayable");
    let due = document.getElementById("due");
    // calculate emi
    let monthlyInterestRate = rate / 12 / 100;
    let totalPayments = term;
    let emiTotal = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    emiTotal = Math.floor(emiTotal);
    emi.value = emiTotal;
    // calculate amount payable
    let amtPayableTotal = emi.value * totalPayments;
    amtPayable.value = amtPayableTotal;
    // calculate interest due
    dueTotal = amtPayableTotal - principal;
    due.value = dueTotal;
    console.log(principal)
    console.log(due.value)
    // console.log()
    updateChart();
}
