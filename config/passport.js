const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//require userModel
const UserModel = require("../models/user");

// configuring Passport, will be called each time user login
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },

  async function(accessToken, refreshToken, profile, cb) {
    let user = await UserModel.findOne({googleId: profile.id})
    if(user) return cb(null, user)
    // a user has logged in via OAuth! 
    try{
      user = await UserModel.create(
        {
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        }
      )
      cb(null,user)// pass the created user to next

    }catch(err){
      return cb(err)
    }

  }
));

passport.serializeUser(function(user, cb) {
  cb(null,user._id)
  
});
 // Find your User, using your model, and then call cb(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

passport.deserializeUser(async function(userId, cb) {
  try{
    const userDoc = await UserModel.findById(userId)
    cb(null, userDoc);

  } catch(err){
    cb(err)
  }

 
});

