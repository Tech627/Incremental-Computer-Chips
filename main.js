let player = {
    ComputerChips: 10,
    ComputerChipsPerSec: 0,
}

let Generators = {
    Generator1: {
        cost: 10,
        amount: 0,
    },
    Generator2: {
        cost: 100,
        amount: 0,
    },
    Generator3: {
        cost: 1000,
        amount: 0,
    },
    Generator4: {
        cost: 100000,
        amount: 0,
    }
}

function BuyGenerator1() {
    if(player.ComputerChips >= Generators.Generator1.cost) {
        player.ComputerChips -= Generators.Generator1.cost;
        Generators.Generator1.cost *= 2;
        Generators.Generator1.amount++;
    }
}

function BuyGenerator2() {
    if(player.ComputerChips >= Generators.Generator2.cost) {
        player.ComputerChips -= Generators.Generator2.cost;
        Generators.Generator2.cost *= 5;
        Generators.Generator2.amount++;
    }
}

function BuyGenerator3() {
    if(player.ComputerChips >= Generators.Generator3.cost) {
        player.ComputerChips -= Generators.Generator3.cost;
        Generators.Generator3.cost *= 20;
        Generators.Generator3.amount++;
    }
}

function BuyGenerator4() {
    if(player.ComputerChips >= Generators.Generator4.cost) {
        player.ComputerChips -= Generators.Generator4.cost;
        Generators.Generator4.cost *= 5000;
        Generators.Generator4.amount++;
    }
}

setInterval( function() {
    player.ComputerChips += player.ComputerChipsPerSec / 50
    document.getElementById("Computer-Chips").textContent = "You have " + Math.round(player.ComputerChips) + " Computer Chips"
    player.ComputerChipsPerSec = Generators.Generator1.amount
    document.getElementById("Computer-ChipsPerSec").textContent = "+" + Math.round(player.ComputerChipsPerSec) + "/sec Computer Chips"
    document.getElementById("Generator-1-cost").textContent = "Cost: " + Generators.Generator1.cost;
    document.getElementById("Generator-1-amount").textContent = "Amount: " + Math.round(Generators.Generator1.amount);
    Generators.Generator1.amount += Generators.Generator2.amount / 50;
    document.getElementById("Generator-2-cost").textContent = "Cost: " + Generators.Generator2.cost;
    document.getElementById("Generator-2-amount").textContent = "Amount: " + Math.round(Generators.Generator2.amount);
    Generators.Generator2.amount += Generators.Generator3.amount / 50;
    document.getElementById("Generator-3-cost").textContent = "Cost: " + Generators.Generator3.cost;
    document.getElementById("Generator-3-amount").textContent = "Amount: " + Math.round(Generators.Generator3.amount);
    Generators.Generator3.amount += Generators.Generator4.amount / 50;
    document.getElementById("Generator-4-cost").textContent = "Cost: " + Generators.Generator4.cost;
    document.getElementById("Generator-4-amount").textContent = "Amount: " + Math.round(Generators.Generator4.amount);
}, 20)