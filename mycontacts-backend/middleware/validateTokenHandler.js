// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const validateToken = asyncHandler(async (req, res, next) => {
//   let token;
//   let authHeader = req.headers.Authorization || req.headers.authorization;
//   if (authHeader && authHeader.startsWith("Bearer")) {
//     token = authHeader.split("")[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decocded) => {
//       if (err) {
//         res.status(404);
//         throw new Error("user is not autorized");
//       }
//       req.user = decocded.user;
//       next();
//     });
//     if(!token){
//         res.status(401)
//         throw new Error("User is not authorized Token is missing")
//     }
//   }
// });
// module.exports = validateToken;


const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // Corrected line
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(404);
        throw new Error("User is not authorized");
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized. Token is missing.");
  }
});

module.exports = validateToken;

