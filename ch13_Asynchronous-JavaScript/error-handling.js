fetch("/api/user/profile")
  .then((response) => {
    if (!response.ok) {
      // fulfills with null (not rejects!)
      // -> displayLoggedOutProfilePage()
      return null;
    }
    const type = response.headers.get("content-type");
    if (type !== "application/json") {
      throw new TypeError(`Expected JSON, got ${type}`);
    }
    return response.json();
  })
  .then((profile) => {
    if (profile) {
      displayUserProfile(profile);
    } else {
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    if (e instanceof NetworkError) {
      displayErrorMessage("Check your internet connection.");
    } else if (e instanceof TypeError) {
      displayErrorMessage("Something is wrong with our server!");
    } else {
      console.log(e);
    }
  });
