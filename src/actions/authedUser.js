export const SET_AUTHEDUSER = "SET_AUTHEDUSER";

export function setauthedUser(id) {
  return {
    type: SET_AUTHEDUSER,
    id,
  };
}
