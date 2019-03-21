import jwt_decode from "jwt-decode";
import { getCoordinates } from "../utils/getUserLocation";
const socket = window.io.connect("/");
const token = localStorage.jwtToken;

if (token) {
  setInterval(async () => {
    socket.emit("location", {
      riderId: jwt_decode(token)._id,
      location: await getCoordinates()
    });
  }, 20000);
}
