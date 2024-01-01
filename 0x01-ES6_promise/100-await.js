import { uploadPhoto, createUser} from "./utils.js"

async function asyncUploadUser () {

  try {
    const res = await Promise.all([uploadPhoto(), createUser()]);
    return ({
      photo: res[0],
      user: res[1]
    })
  } catch (err) {
    return ({
      photo: null,
      user: null,
    })
  }
}

export default asyncUploadUser;
