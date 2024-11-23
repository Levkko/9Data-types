// Операції з масивами

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; // сам не догадався
alert(styles.shift());
styles.unshift("Rap", "Reggae");