function calc()
{
    let amount = parseFloat(document.getElementById("amount").value)
    let rate = parseFloat(document.getElementById("rate").value)
    let time = parseInt(document.getElementById("time").value)
    //input checker
    if(!amount || !rate ||!time){
        document.getElementById("output").innerHTML = "Fill the fields"
    }
    
    //logic// Calculate EMI using formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    let monthlyRate = rate / 12/ 100;
    let emi =  (amount * monthlyRate * Math.pow(1 + monthlyRate, time)) / 
              (Math.pow(1 + monthlyRate, time) - 1);
    //  (Math.pow(1 + monthlyRate, time) - 1);
    let result = emi.toFixed(2)
    document.getElementById("output").innerHTML  = result;
    
    //output
    console.log ("emi loaded")
}
function startloop(){
    setInterval(calc(), 1000);
}