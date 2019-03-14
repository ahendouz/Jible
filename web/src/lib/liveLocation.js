import jwt_decode from "jwt-decode";
import { getCoordinates } from "../utils/getUserLocation";
const token = localStorage.jwtToken;

if (token) {
  const socket = window.io.connect("/");
  setInterval(async () => {
    socket.emit("location", {
      riderId: jwt_decode(token)._id,
      location: await getCoordinates()
    });
  }, 2000);
}
