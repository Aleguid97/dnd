let A = ["M", "B", "C", "#", "D", "E", "F", "H", "#", "I", "L", "#"];

function invertiArray(arr) {
  let inizio = 0;

  for (let i = 0; i <= arr.length; i++)
    if (arr[i] === "#") {
      if (i != inizio) {
        let fine = i - 1;

        while (inizio < fine) {
          const pippo = arr[inizio];
          arr[inizio] = arr[fine];

          arr[fine] = pippo;

          inizio++;
          fine--;
        }
      }
      inizio = i + 1;
    }
}
console.log(invertiArray(arr));
