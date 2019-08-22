const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = batteryBatches.reduce(function(total, index){return index + total}, 0);
let totalBatteries = batteryBatches.reduce((total, index) => (index + total), 0);