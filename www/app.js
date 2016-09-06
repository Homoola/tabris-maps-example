var page =  new tabris.Page( {
  title: "Tabris Maps",
  topLevel: true
});

new esmaps.Map({
  left: 0, right: 0, top: 0, bottom: 0
}).on("ready", function() {
  // show paris with a radius of 2000 meters
  this.moveToPosition([48.8644458, 2.3589976], 2000);
}).appendTo(page);

page.open();
