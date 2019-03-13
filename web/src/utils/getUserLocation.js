import { GET_CURRENT_LOCATION } from "../actions/types";
import axios from "axios";

export const getUserLocation = store => {
  let myLat = 0,
    myLng = 0;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        getPos(myLat, myLng);
      },

      error => {
        if (error.code === error.PERMISSION_DENIED) console.log("Blocked");
      }
    );
  }

  const getPos = (lat, lng) => {
    store.dispatch({
      type: GET_CURRENT_LOCATION,
      payload: { lat, lng }
    });
  };
};

export const getCoordinates = async () => {
  let myLat = 0,
    myLng = 0;

  if (navigator.geolocation) {
    const mypromise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        resolve([myLat, myLng]);
      }, reject);
    });
    const result = await mypromise;
    return result;
  }
};
