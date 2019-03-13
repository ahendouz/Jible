export const getMap = location => {
  window.L.mapquest.key = "iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz";
  location = location || [33.9955876, -6.849696100000001];
  // 'map' refers to a <div> element with the ID map
  window.L.mapquest.map("map", {
    center: location,
    layers: window.L.mapquest.tileLayer("dark"),
    zoom: 12
  });
};
