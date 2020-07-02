import { signout } from "./api-auth.js";

const auth = {
  //Retrieving credentials:
  //vi måste hämta lagrade referenser för att kontrollera om den aktuella användaren är inloggad. I metoden "isAuthenticated()" kan vi hämta dessa referenser från sessionStorage.
  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (sessionStorage.getItem("jwt"))
      return JSON.parse(sessionStorage.getItem("jwt"));
    else return false;
  },
  //Saving credentials:
  //För att spara JWT-referenser som tas emot från servern vid framgångsrik inloggning använder vi "authenticate(jwt, cb)", som definieras enligt följande.
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  },
  //Deleting credentials
  clearJWT(cb) {
    if (typeof window !== "undefined") sessionStorage.removeItem("jwt");
    cb();
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },
};

export default auth;
