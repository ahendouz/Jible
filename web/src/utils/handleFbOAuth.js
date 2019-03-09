import axios from "axios";

export const handleFbOAuth = (userType = this.props.userType) => {
  window.FB.login(response => {
    if (response.authResponse) {
      const data = { access_token: response.authResponse.accessToken };
      axios
        .post(`/api/users/oauth/facebook/${userType}`, data)
        .then(res => console.log(res))
        .catch(err => {
          console.error(err);
        });
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  });
};
