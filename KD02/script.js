function balsošana() {
    let vecums = parseInt(document.getElementById("vecums").value);
    let irPilsonis = document.getElementById("irPilsonis").value.toLowerCase() === "true";
    let rezultats;

    if (vecums >= 18 && irPilsonis) {
        rezultats = "Drīkst balsot.";
    } else if (vecums >= 18 && !irPilsonis) {
        rezultats = `Personai ir ${vecums} gadi, bet viņa nav pilsonis.`;
    } else if (vecums < 18 && irPilsonis) {
        rezultats = `Personai ir tikai {vecums} gadi, bet viņa ir pilsonis.`;
    } else {
        rezultats = `Personai ir tikai {vecums} gadi un viņa nav pilsonis.`;
    }

    document.getElementById("balsošanasRezultats").textContent = rezultats;
}

