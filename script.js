function calculateAge() {

    const birthDate = new Date(document.getElementById("dateSelection").value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

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

    if (document.getElementById("dateSelection").value === "") {
    document.getElementById("result").innerHTML = "Please enter your DOB!!!";
    } else {
    // Updates the Virtual DOM:
    document.getElementById("result").innerHTML = `Your age is ${years} years, ${months} months, ${days} days`;
    return;
    }
}

function reset() {
    // Resets the current output
    document.getElementById("result").innerHTML = "";
    return;
}
