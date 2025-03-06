function getGrade(score) {
    if (score >= 80) return "A+";
    else if (score >= 70) return "A";
    else if (score >= 60) return "A-";
    else if (score >= 50) return "B";
    else if (score >= 40) return "C";
    else if (score >= 33) return "D";
    else return "F";
}

console.log(getGrade(85));
console.log(getGrade(72)); 
console.log(getGrade(55)); 
