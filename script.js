// SOS ALERT
function activateSOS() {
  alert("🚨 Emergency Activated! Stay Calm. Help is on the way.");
}


// VIEW MAP – LIVE LOCATION
function openMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
    });
  } else {
    alert("Location not supported by your browser.");
  }
}


// FIRST AID ALERT
function firstAidAlert() {
  alert(`FIRST AID GUIDELINES

CPR:
• Check breathing
• Push chest 100 times/min

Bleeding:
• Apply pressure with clean cloth

Choking:
• Give 5 back blows

Stay Calm. Help is Coming.`);
}


// ALERT FAMILY – SHARE LOCATION
function shareLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const message = `Emergency! My location: https://maps.google.com/?q=${lat},${lng}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
    });
  } else {
    alert("Location not supported.");
  }
}


// TRAFFIC VIEW
function openTraffic() {
  window.open(
    "https://www.google.com/maps/@?api=1&map_action=map&layer=traffic",
    "_blank"
  );
}


// CHAT HELP TOGGLE
function toggleChat() {
  const box = document.getElementById("chatBox");
  if (box) {
    box.classList.toggle("active");
  }
}


// SIMPLE CHAT RESPONSE
function chat() {
  const text = document.getElementById("userText").value.toLowerCase();
  let reply = "Stay calm. Help is on the way.";

  if (text.includes("cpr")) reply = "Push chest 100 times per minute.";
  if (text.includes("bleeding")) reply = "Apply pressure with cloth.";
  if (text.includes("choking")) reply = "Give 5 back blows.";

  document.getElementById("botMsg").innerText = reply;
}
function toggleChat() {
  const box = document.getElementById("chatBox");
  if (box) {
    box.classList.toggle("active");
  }
}

function chat() {
  const input = document.getElementById("userText").value.toLowerCase();
  let reply = "Stay calm. Help is on the way.";

  if (input.includes("cpr")) reply = "Push chest 100 times per minute.";
  if (input.includes("bleeding")) reply = "Apply pressure with cloth.";
  if (input.includes("choking")) reply = "Give 5 back blows.";

  document.getElementById("botMsg").innerText = reply;
}
function findHospitals() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const url =
        `https://www.google.com/maps/search/hospitals/@${lat},${lng},15z`;

      window.open(url, "_blank");
    });
  } else {
    alert("Location not supported by your browser.");
  }
}
