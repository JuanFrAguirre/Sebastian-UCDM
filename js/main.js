// jQuery-------------------------------------

$(function () {
  "use strict";
  // comienzo jQuery--------------------------

  // Info evento------------------------------

  $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 2000);
  $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 12 }, 2000);
  $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 2000);
  $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 10 }, 2000);

  // mapa-------------------------------------

  // let mymap = L.map("mapa").setView([51.505, -0.09], 13);

  var map = L.map("mapa").setView([-31.416752, -64.183577], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([-31.416752, -64.183577])
    .addTo(map)
    .bindPopup("Proxima Conferencia<br>Cordoba, Argentina")
    .openPopup();
  // .bindTooltip("Un Tooltip")
  // .openTooltip();

  // -----------------------------------------
  // fin jQuery-------------------------------
});
