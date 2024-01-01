import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js"

export default function handleProfileSignup (firstName, lastName, fileName) {
   const data = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
   return data;
}
