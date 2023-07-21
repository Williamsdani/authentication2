const express = require("express");
const {
//   newUser,
//   userVerify,
logIn,
signOut,
registration,
  getAll,
//   forgotPassword,
  resetpassword,
//   resendEmailVerification,
  updateUser,
} = require("../controllers/userController");
const {
  upgradeUserToAdmin,
  upgradeUserToSuperAdmin,
} = require("../controllers/adminController");
const {
  isAdmin,
  userAuth,
  isSuperAdmin,
} = require("../middlewares/authmiddleware");
const router = express.Router();

//  router.post("/signup", newUser);
//  router.put("/verify/:token", userVerify);
 router.post("/signin",logIn);
 router.get("/logout", signOut);
 router.post("/register",registration)
//  router.get("/getall", userAuth, getAll);
 //router.put("/update-user/:userId", userAuth, updateUser);
 //router.put("/upgrade-to-admin/:userId", userAuth, isAdmin, upgradeUserToAdmin);
// //router.put(
//   "/upgrade-to-superadmin/:userId",
//   userAuth,
//   isSuperAdmin,
//   upgradeUserToSuperAdmin
// );//
// router.get("/forgot-password", forgotPassword);
// router.get("/resend-email-verification", resendEmailVerification);
 //router.put("/reset-password/:token", resetpassword);
module.exports = router;



























// const {
//     registration,
//     verifyEmail,
//     resendEmailVerification,
//     logIn,
//     signOut,
//     allLoginUsers,
//     changePassword,
//     forgotPassword,
//     resetPassword
// } = require('../controllers/userController')
// const {
//     userAuth
// } = require('../middlewares/authMiddleware')


// const express = require('express');
// const router = express.Router();


// router.post('/signup', registration)
// router.put('/verify/:id/:token', verifyEmail)
// router.put('/re-verify', resendEmailVerification)
// router.post('/login', logIn)
// router.put('/logout/:id', signOut)
// router.get('/loginusers', allLoginUsers)
// router.put('/changepassword/:id', changePassword)
// router.post('/changepassword/:id/:token', resetPassword)
// router.post('/resetemail', forgotPassword)

// module.exports = router;

