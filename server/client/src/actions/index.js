import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then((res) => dispatch({
        type: FETCH_USER,
        payload: res.data
      }));
  }
};

export const handleToken = (token) => {
  return function(dispatch) {
    axios.post('/api/stripe', token)
      .then((res) => dispatch({
        type: FETCH_USER,
        payload: res.data
      }));
  }
};

export const submitSurvey = (values, history) => {
  return function(dispatch) {
    axios.post('/api/surveys', values)
      .then(history.push('/surveys')) // redirects back to /surveys route with history object
      .then((res) => dispatch({
        type: FETCH_USER,
        payload: res.data
      }));
  }
};

// export const submitSurvey = values => async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   dispatch({ type: FETCH_USER, payload: res.data });
// }