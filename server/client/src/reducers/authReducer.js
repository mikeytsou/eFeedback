import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // return null by default, the user model, or false depending on if user is logged in or not
    default:
      return state
  }
}
