/**********************************************************
A minimalistic router for single page web
**********************************************************/

// Just for fun, we named it after sonic hedgehog, not the cartoon character, but the mammalian signaling protein.

function SonicHedgehog() {
  this.routes = null;
}

SonicHedgehog.prototype.makeRoutes = function (routes) {
  // v preserved for future dev
  this.routes = routes;
  let currentLocation = null;
  if (this.routes.hasOwnProperty(window.location.pathname)) {
    currentLocation = window.location.pathname;
  }
  if (this.routes.hasOwnProperty(window.location.pathname) === false) {
    let path = window.location.pathname.split('/').filter(i => i !== '');
    // shallow check if there're matching routes
    for (let route in this.routes) {
      let dRoute = route.split('/').filter(i => i !== '');
      if (dRoute[0] === path[0]) currentLocation = route;
    }
  }
  return routes[currentLocation]();
}

export default SonicHedgehog;
