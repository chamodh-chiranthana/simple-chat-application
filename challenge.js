const { request } = require("express");

// Callback-based function
function getUserData(userId, callback) {
  setTimeout(() => {
    if (userId === 123) {
      const userData = {
        id: 123,
        name: "Alice",
        email: "alice@example.com",
      };
      callback(null, userData); // Success
    } else {
      callback("User not found", null); // Error
    }
  }, 150);
}

function processUserData(userId) {
  userId,
    (error, userData) => {
      if (error) {
        console.error("Callback Error:", error);
        return;
      }
      console.log("Callback User Data:", userData);
    };
}

function getUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 123) {
        const userData = {
          id: 123,
          name: "Alice",
          email: "alice@gmail.com",
        };
        resolve(userData);
      } else {
        reject("user not found.");
      }
    }, 150);
  });
}

async function processUserDataAsync(userId) {
  try {
    const userData = await getUserDataPromise(userId);
    console.log("Async/Await User Data: ", userData);
  } catch (error) {
    console.error("Async/Await Error", error);
  }
}

processUserDataAsync(123);
processUserDataAsync(456);

// MyFunction(){
//   request((result, err) => console.log(result,err))
// }

// async MyFunction(){
//   try{
//     const result = await request();
//     console.log(result);
//   } catch (err){
//     console.error("Error occured. ", err);
//   }
// }

it("should return 12", () => {
  expect(myFunction(2, 6)).toBe(12);
});
