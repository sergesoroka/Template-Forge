"use client";
import { Formik } from "formik";

const Basic = () => (
  <div className="flex min-h-screen flex-col items-start justify-start p-16 antialiased">
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mt-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="border"
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="password" className="block mt-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="border"
          />
          {errors.password && touched.password && errors.password}
          <button
            type="submit"
            disabled={isSubmitting}
            className="block border-2 border-indigo-500 px-4 py-1 my-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
