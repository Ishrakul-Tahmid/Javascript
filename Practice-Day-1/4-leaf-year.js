function isLeafYear(year){
    return ((year%4 == 0 && year%100!=0) || (year%400 == 0));
}

console.log(isLeafYear(2024));
console.log(isLeafYear(2025));