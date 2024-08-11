'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import React,  { createContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('please enter password'),
  email: Yup.string()
    .email('Invalid email')
    .required('please enter email address'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <div className="w-full h-screen flex justify-center items-center bg-slate-50">
            <Card>
              <CardHeader className="p-0 m-0 border">
                <Image
                  height={80}
                  width={350}
                  alt="Sawaricare Nepal"
                  src="logo.png"
                  style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
                />
              </CardHeader>
              <CardBody className="gap-3">
                <div className="mb-4">
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    labelPlacement="outside"
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    labelPlacement="outside"
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>

                <p className="text-right text-blue-500">
                  <Link href="/forgetpassword">Forget Password</Link>
                </p>
                <Button type="submit" className="w-full bg-slate-800 text-white font-bold uppercase mt-4">
                  Login
                </Button>
              </CardBody>
              <CardFooter>
                <p className="m-auto pb-5 font-light">
                  Don't have an account yet? <Link href="/signup" className="text-blue-500"><strong>Sign Up</strong></Link> Instead
                </p>
              </CardFooter>
            </Card>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
