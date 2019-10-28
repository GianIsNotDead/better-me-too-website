/**********************************************************
A minimalistic router for single page web
**********************************************************/

// Just for fun, we named it after sonic hedgehog, not the cartoon character, but the mammalian signaling protein.

function SonicHedgehog() {
  this.routes = null;
}

SonicHedgehog.prototype.makeRoutes = function (routes) {
  this.routes = routes;
  let currentLocation = window.location.pathname;
  console.log('current location: ', currentLocation);
  return routes[currentLocation]();
}

export default SonicHedgehog;
