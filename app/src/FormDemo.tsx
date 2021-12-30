import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Form, Formik } from 'formik';

function FormDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>
        <Formik initialValues={initialValues} onSubmit={() => {}}></Formik>
      </CardContent>
    </Card>
  )
};

export default FormDemo;