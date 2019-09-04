const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = batteryBatches.reduce(batteries, 0)

// function batteries(total, element) {
//     return total += element
// }

let totalBatteries = batteryBatches.reduce(function(total, element){return total += element}, 0)

// can also use function(total, element){return element + total}