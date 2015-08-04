exports.create = function() {
  return tabris.create("Page", {
    title: "property: latLng",
    topLevel: true
  }).on("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapReady", function() {
    this.set("latLng", [-33.867, 151.206]);
    this.set("zoom", 13);
  }).appendTo(page);

  var blacktown = tabris.create("Button", {
    text: "Go to Blacktown",
    layoutData: {centerX: 0, top: [map, 10]}
  }).on("select", function() {
    map.set("latLng", [-33.769, 150.907]);
    map.set("zoom", 14);
  }).appendTo(page);

  var sydney = tabris.create("Button", {
    text: "Go to Sydney",
    layoutData: {centerX: 0, top: [blacktown, 10]}
  }).on("select", function() {
    map.set("latLng", [-33.867, 151.206]);
    map.set("zoom", 13);
  }).appendTo(page);
}
