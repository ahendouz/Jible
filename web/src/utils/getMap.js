export const getMap = (location = [33.995647, -6.846076]) => {
  window.L.mapquest.key = "iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz";
  console.log("🙄", location);
  // 'map' refers to a <div> element with the ID map
  window.L.mapquest.map("map", {
    center: [33.995647, -6.846076],
    layers: window.L.mapquest.tileLayer("dark"),
    zoom: 12
  });
};
