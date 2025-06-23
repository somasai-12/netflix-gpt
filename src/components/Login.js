import { useState } from "react";
import Header from "./Header";
import { useRef } from "react";

//Validation of data from the form
import { checkValidData } from "../utils/validation";

//firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundImage, userIconNetflix } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  //const confirmPassword = useRef(null);

  const handleClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //  SignIn/SignUp Logic
    if (isSignUp) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:userIconNetflix,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //console.log(user);
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.code + " - " + error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen md:h-auto object-cover"
          src={backgroundImage}
          alt="background image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-auto md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            className="p-4 my-3 w-full bg-gray-700"
            type="text"
            placeholder="User Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-3 w-full bg-gray-700"
          type="password"
          placeholder="Enter Password"
        />
        {isSignUp && (
          <input
            //ref={confirmPassword}
            className="p-4 my-3 w-full bg-gray-700"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="text-center cursor-pointer hover:underline"
          onClick={() => {
            {
              isSignUp ? setIsSignUp(false) : setIsSignUp(true);
            }
          }}
        >
          {isSignUp
            ? "Already have an account? Log in"
            : "New to Netflix? Sign up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
