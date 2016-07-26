exports.create = function() {
  return tabris.create("Page", {
    title: "event: cameramove",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var initialLatLng = [-33.867, 151.206];

  var map = new eclipsesource.maps.Map({
    left: 0, right: 0, top: 0, height: 200
  }).on("ready", function() {
    this.set("position", initialLatLng);
    this.on("cameramove", function(widget, event) {
      updateCameramoveEventDisplay(event);
    });
  }).appendTo(page);

  var blacktown = tabris.create("Button", {
    text: "Go to Blacktown",
    centerX: 0, top: 'prev() 10'
  }).on("select", function() {
    map.set("position", [-33.769, 150.907]);
    map.set("zoom", 14);
  }).appendTo(page);

  var cameramoveEventDisplay = tabris.create("TextView", {
    left: 10, top: 'prev() 10', right: 10,
    markupEnabled: true,
    text: "Last user initiated camera position: <b>?</b>"
  }).appendTo(page);

  function updateCameramoveEventDisplay(event) {
    var text = "Last user initiated camera position:<br/>" +
      "Latitude: <b>" + event.position[0] + "</b><br/>" +
      "Longitude: <b>" + event.position[1] + "</b>";
    cameramoveEventDisplay.set("text", text);
  }
}
