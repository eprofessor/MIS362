// speakerEvents_loader.js
// Reusable helper that fills a <select> with the current events list.

function populateSpeakerSeriesEvents(selectId) {
  var dd = document.getElementById(selectId);
  if (!dd) return;

  // Get events from the semester file
  var events = [];
  if (window.SPEAKER_SERIES_EVENTS && Array.isArray(window.SPEAKER_SERIES_EVENTS)) {
    events = window.SPEAKER_SERIES_EVENTS.slice();
  }

  // Always include Other option
  if (events.indexOf("Other") === -1) events.push("Other");

  // Clear dropdown and add default option
  dd.innerHTML = "";

  var opt0 = document.createElement("option");
  opt0.value = "";
  opt0.text = "Select an event";
  dd.appendChild(opt0);

  // Add events
  events.forEach(function (e) {
    var opt = document.createElement("option");
    opt.value = e;
    opt.text = e;
    dd.appendChild(opt);
  });
}
