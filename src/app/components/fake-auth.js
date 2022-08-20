// Database
// import {userName, passCode} from "./login";

const Users = [
  {
    userName: "user",
    passCode: "pass"
  }
];

const findUserByUserName = (userName) => {
  return Users.find((user) => user.userName === userName);
};

export const fakeAuthApi = (userName, passCode) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const user = findUserByUserName(userName, passCode);
      if(user.passCode !== passCode ) {
        reject({ success: false, status: 401 });
      }else{
        resolve({ success: true, status: 200 });
      }
    }, 500)
    
  });
};
