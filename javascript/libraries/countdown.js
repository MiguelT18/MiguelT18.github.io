simplyCountdown("#countdown", {
  year: 2022, // required
  month: 12, // required
  day: 21, // required
  hours: 24, // Default is 0 [0-23] integer
  minutes: 60, // Default is 0 [0-59] integer
  seconds: 60, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: "Día",
    hours: "Hora",
    minutes: "Minuto",
    seconds: "Segundo",
    pluralLetter: "s",
  },
  plural: true, //use plurals
  inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: true, //Use UTC as default
  onEnd: function () {
    alert("La oferta finalizó");
    return;
  }, //Callback on countdown end, put your own function here
  refresh: 500, // default refresh every 1s
  sectionClass: "simply-section", //section css class
  amountClass: "simply-amount", // amount css class
  wordClass: "simply-word", // word css class
  zeroPad: true,
  countUp: false,
});
