import React from 'react';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { errorMessages } from 'employees/errorMessages';
import FormLayout from '../../layout/components/FormLayout';

const schema = yup.object({
  profileImage: yup
    .string()
    .required()
    .label('Profile image'),
  name: yup
    .string()
    .matches(/^(\w+)[^\w]+([\w ]+)$/, {
      excludeEmptyString: true,
      message: errorMessages.invalidNameFormat
    })
    .required()
    .label('Name'),
  email: yup
    .string()
    .email()
    .required()
    .label('Email address'),
  role: yup
    .string()
    .required()
    .label('Role'),
  team: yup
    .string()
    .required()
    .label('Team'),
  address: yup
    .string()
    .matches(/^([^,]+), ([\w ]+)$/, {
      excludeEmptyString: true,
      message: errorMessages.invalidAddressFormat
    })
    .required()
    .label('Address')
});

const EmployeeCreate = () => {
  return (
    <>
      <FormLayout>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size='2x'
          style={{
            float: 'right',
            position: 'absolute',
            top: -'10',
            right: '10',
            cursor: 'pointer'
          }}
        />
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{}}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId='employeeCreate.ProfileImage'>
                <Form.Label>Profile image</Form.Label>
                <Form.Control
                  as='select'
                  name='profileImage'
                  onChange={handleChange}
                  isInvalid={!!errors.profileImage}
                  defaultValue=''
                >
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.profileImage}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='employeeCreate.Name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='employeeCreate.Email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='text'
                  name='email'
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='employeeCreate.Role'>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as='select'
                  name='role'
                  onChange={handleChange}
                  isInvalid={!!errors.role}
                  defaultValue=''
                >
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.role}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='employeeCreate.Team'>
                <Form.Label>Team</Form.Label>
                <Form.Control
                  as='select'
                  name='team'
                  onChange={handleChange}
                  isInvalid={!!errors.team}
                  defaultValue=''
                >
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.team}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='employeeCreate.Address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  name='address'
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type='submit' variant='success' block>
                ADD EMPLOYEE
              </Button>
            </Form>
          )}
        </Formik>
      </FormLayout>
    </>
  );
};

export default EmployeeCreate;
