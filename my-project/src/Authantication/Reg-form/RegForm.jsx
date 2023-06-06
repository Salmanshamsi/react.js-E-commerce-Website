import React, { useRef } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../schema';
import "../../App.css";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import LoadingSpinner from '../../Components/loadingSpinner/LoadingSpinner';



const RegForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading,setIsloading] = useState(false);

  const navigate = useNavigate();

  // Create Account
  const createAccount = async (email, pass, name, profilePicture) => {

        try {

          setIsloading(true);

        await createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage + errorCode);
        });

          const docRef = doc(db, "user-data", email);
          await setDoc(docRef, {
            profile: profilePicture,
            email: email,
            name: name,
            role: "user",
          });
        } catch (error) {
          console.error("Error creating account:", error);
        }
        setIsloading(false)
        alert("Account successfully created");
    // console.log(email, pass, name, profilePicture);
  };

  const handleProfilePictureChange = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setProfilePicture(base64String);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
    {
      isLoading ? <LoadingSpinner/> : ""
    }
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 -z-40`}>
        <div className= {`bg-white p-6 rounded-lg shadow-lg space-x-16 space-y-5`}>
          <Formik
            initialValues={{
              profile_image: "",
              fullname: "",
              email: "",
              password: "",
              confirm_password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              values.profile_image = profilePicture; // Add the profile image to the form values
              createAccount(
                values.email,
                values.password,
                values.fullname,
                values.profile_image
              );
              // navigate("/home");
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} >
                <div className="flex justify-center items-center mb-5">
                  <input
                    hidden
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                  <button
                    className="flex items-center justify-center text-center h-16 w-16 rounded-full border-blue-500 border hover:bg-blue-300 text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("profilePicture").click();
                    }}
                  >
                    {profilePicture ? (
                      ""
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    )}
                    {profilePicture && (
                      <img
                        src={profilePicture}
                        className="h-16 w-16 rounded-full"
                        alt="Profile"
                        width="200"
                      />
                    )}
                  </button>
                </div>

                <input
                  type="text"
                  className="block border border-gray-500 w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullname")}
                />
                <p className="text-xs my-0 py-0 text-red-600">
                  {formik.errors.fullname}
                </p>

                <input
                  type="text"
                  className="block border border-gray-500 w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                <p className="text-xs my-0 py-0 text-red-600">
                  {formik.errors.email}
                </p>

                <input
                  type="password"
                  className="block border border-gray-500 w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                <p className="text-xs my-0 py-0 text-red-600">
                  {formik.errors.password}
                </p>

                <input
                  type="password"
                  className="block border border-gray-500 w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_password")}
                />
                <p className="text-xs my-0 py-0 text-red-600">
                  {formik.errors.confirm_password}
                </p>

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none my-1"
                >
                  Create Account
                </button>
              </form>
            )}
          </Formik>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue-500 text-blue" href="../login/">
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegForm;
