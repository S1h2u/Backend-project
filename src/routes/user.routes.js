import { Router } from 'express';
import { registerUser,loginUser,logoutUser, refreshAccessToken,changeCurrentPassword,getCurrentUser,updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory} from "../controllers/user.controller.js";
import { uploadFields } from "../middlewares/multer.middleware.js"; // Correct named import

const router = Router();
router.post("/register",uploadFields,(req,res,next)=>{
  console.log('Middleware is working');
  next();

},registerUser);

router.post("/login",loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/update-account").patch(verifyJWT,updateAccountDetails)
router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("/cover-image").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)

router.route("/c/:username").get(verifyJWT,getUserChannelProfile)
router.route("/history").get(verifyJWT,getWatchHistory)


 

export default router;
