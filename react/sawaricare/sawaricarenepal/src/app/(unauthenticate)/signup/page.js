'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, DatePicker, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter fullname'),
  birthdate: Yup.date()
    .nullable()
    .required('please select date of birth')
    .typeError('Invalid date'),
  email: Yup.string()
    .email('Invalid email')
    .required('please enter email address'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('please enter password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords miss match')
    .required('Please enter confirm password'),
});

const Signup = () => {
  return (
    <Formik
      initialValues={{
        fullname: '',
        birthdate: null,
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange, handleBlur, setFieldValue, values }) => (
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
              <CardBody className="gap-2">               
              <div>
                  <Input
                    type="text"
                    label="Fullname"
                    name="fullname"
                    labelPlacement="outside"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}                   
                    className={`w-full p-2 border ${errors.fullname && touched.fullname ? 'border-red-500' : 'border-white'} rounded`}

                  />               
                  {errors.fullname && touched.fullname && (
                    <div className="text-red-500 text-sm">{errors.fullname}</div>
                  )}
                </div>              
                <div>        
                  <DatePicker
                    label="Birth date"
                    name="birthdate"
                    labelPlacement="outside"
                    onBlur={handleBlur}
                    onChange={(date) => setFieldValue('birthdate', date)}
                    value={values.birthdate}                    
                    className={`w-full p-2 border ${errors.birthdate && touched.birthdate ? 'border-red-500' : 'border-white'} rounded`}
                  />                 
                  {errors.birthdate && touched.birthdate && (
                    <div className="text-red-500 text-sm">{errors.birthdate}</div>
                  )}
                </div>              
                <div>
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    labelPlacement="outside"
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-white'} rounded`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>

                <div>
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    labelPlacement="outside"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}                  
                    className={`w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-white'} rounded`}
                  />                 
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm">{errors.password}</div>
                  )}
                </div>
                <div>
                  <Input
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    labelPlacement="outside"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}                   
                    className={`w-full p-2 border ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-white'} rounded`}

                  />                 
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
                  )}
                </div>
                <Button type="submit" className="bg-slate-800 mt-2 text-white font-bold uppercase w-full">
                  Sign Up
                </Button>
              </CardBody>
              <CardFooter>
                <p className="m-auto font-light">
                  Already have an account? <Link href="/login"><strong>Login</strong></Link> Instead
                </p>
              </CardFooter>
            </Card>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;




