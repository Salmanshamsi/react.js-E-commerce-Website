import * as Yup from "yup"

const validationSchema = Yup.object().shape({

    //  profile_image: Yup.string().test({
    //     name: 'base64Image',
    //     message: 'Invalid base64 image',
    //     test: (value) => {
    //       if (!value) return true; // Allow empty value
      
    //       const regex = /^data:image\/(jpeg|jpg|png);base64,/i;
    //       return regex.test(value);
    //     },
    //   }),

     fullname:Yup.string().required('Full name is required'),
     email:Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
     confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
   
  });

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const LoginInitialValues = {
    email: "",
    password: "",
  };

const ContactSchema = Yup.object({

    email:Yup.string().email().required("please enter email !"),

    subject:Yup.string().required("please enter Subject !"),
    
    message:Yup.string().required("please enter message !"),

})


export {validationSchema, ContactSchema,loginSchema,LoginInitialValues};