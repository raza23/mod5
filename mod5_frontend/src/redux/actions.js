const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/api/v1/profile';
const LOGIN_URL = BASE_URL + '/api/v1/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;
// export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// function fetchProductsPending() {
//     return {
//         type: FETCH_PRODUCTS_PENDING
//     }
// }

// function fetchProductsSuccess(products) {
//     return {
//         type: FETCH_PRODUCTS_SUCCESS,
//         products: products
//     }
// }

// function fetchProductsError(error) {
//     return {
//         type: FETCH_PRODUCTS_ERROR,
//         error: error
//     }
// }

// Redux Actions





const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

// Fetch

const newUserToDB = userObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      debugger
      console.log(data)
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

// const persistUser = () => dispatch => {
//   const config = {
//     method: 'GET',
//     headers: {
//       Authorization: `bearer ` + localStorage.token
//     }
//   };
//   fetch(PERSIST_URL, config)
//     .then(r => r.json())
//     .then(data => console.log(data))
//     .then(userInstance => {
//       dispatch(setUserAction(userInstance));
//     });
// };

const persistUser = () => dispatch => {
  fetch(PERSIST_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    }
  })
    .then(r => r.json())
    .then(user => {
      console.log(user)
      dispatch(setUserAction(user));
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser
};