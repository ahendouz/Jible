export const handleFbOAuth = (userType, facebookOAuthAction) => {
  window.FB.login(response => {
    if (response.authResponse) {
      const data = { access_token: response.authResponse.accessToken };
      facebookOAuthAction(userType, data);
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  });
};
