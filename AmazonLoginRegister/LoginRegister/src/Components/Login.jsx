import React from 'react'
import { Field, Form, Formik, } from 'formik';
import Custom from './Custom';

const onSubmit= async(values,actions)=>{
  console.log(values),
  console.log(actions)
  await new Promise((resolve) => {
      setTimeout(resolve,1000);
  })
  actions.resetForm();
}

const Login = () => {
  return (
    <div>
       <Formik
       initialValues={{ email: '', isAccepted:false}}
       onSubmit={onSubmit}   
     >
       {() => (
         <Form>
        
          <Custom label="Email" email="email" type="email"/>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Login