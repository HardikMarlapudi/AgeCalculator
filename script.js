function calculateAge() {

    const birthDate = new Date(document.getElementById("birthDate"));
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDay() - birthDate.getDay();

    if (months <= 0 || (months === 0 && days <= 0)) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (days <= 0) {
        months--;
       const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
       days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // To Update the Virtual DOM:
    document.getElementById("result").innerHTML = `Your age is ${years} years, ${months} months, ${days} days`;
}
