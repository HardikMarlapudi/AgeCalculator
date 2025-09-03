function calculateAge() {

    const birthDate = new Date(document.getElementById("dateSelection").value);
    const today = new Date();

    // How the years, months, and days get calculated.
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
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
    return;
    } else {
    document.getElementById("result").innerHTML = `Your age is ${years} years, ${months} months, ${days} days.`;
    return;
    }
}

function resetAge() {
    // Resets the current output
    document.getElementById("result").innerHTML = "";
    return;
}
