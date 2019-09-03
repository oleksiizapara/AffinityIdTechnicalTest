import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import { errorMessages } from 'employees/errorMessages';
import FormLayout from '../../layout/components/FormLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectedEmployeeStates, actions } from 'employees/actions';
import { selectors } from 'employees/reducer';

const schema = yup.object({
  imageId: yup
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
  roleId: yup
    .string()
    .required()
    .label('Role'),
  teamId: yup
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
  const dispatch = useDispatch();

  const employee = useSelector(state => selectors.selectedEmployee(state));
  const selectedEmployeeState = useSelector(state =>
    selectors.selectedEmployeeState(state)
  );
  const selectedEmployee = useSelector(state =>
    selectors.selectedEmployee(state)
  );

  const roles = useSelector(state => selectors.roles(state));
  const teams = useSelector(state => selectors.teams(state));
  const images = useSelector(state => selectors.images(state));

  const isUpdateState =
    selectedEmployeeState !== selectedEmployeeStates.CREATE_STATE;

  return (
    <>
      <FormLayout>
        {isUpdateState ? (
          <i
            className='fa fa-times-circle fa-2x'
            style={{
              position: 'absolute',
              top: -10,
              right: 10,
              cursor: 'pointer'
            }}
            onClick={e => dispatch(actions.selectEmployee(employee.id))}
          />
        ) : (
          <></>
        )}

        <Formik
          enableReinitialize={true}
          validationSchema={schema}
          initialValues={selectedEmployee}
          onSubmit={(values, onSubmitActions) => {
            dispatch(actions.submitEmployee(values, onSubmitActions));
          }}
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
                  name='imageId'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.imageId && !!errors.imageId}
                  value={values.imageId}
                >
                  <option value=''>Select profile image</option>
                  {images.map(image => (
                    <option key={image.id} value={image.id}>
                      {image.name}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.imageId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='employeeCreate.Name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.name && !!errors.name}
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
                  onBlur={handleBlur}
                  isInvalid={touched.email && !!errors.email}
                  value={values.email}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='employeeCreate.Role'>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as='select'
                  name='roleId'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.roleId && !!errors.roleId}
                  value={values.roleId}
                >
                  <option value=''>Select role</option>
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.roleId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='employeeCreate.Team'>
                <Form.Label>Team</Form.Label>
                <Form.Control
                  as='select'
                  name='teamId'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.teamId && !!errors.teamId}
                  value={values.teamId}
                >
                  <option value=''>Select team</option>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {errors.teamId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='employeeCreate.Address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  name='address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.address && !!errors.address}
                  value={values.address}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              {!!errors.general && (
                <Alert variant='danger'>{errors.general}</Alert>
              )}

              <Button type='submit' variant='success' block>
                {isUpdateState ? 'UPDATE EMPLOYEE' : 'ADD EMPLOYEE'}
              </Button>
            </Form>
          )}
        </Formik>
      </FormLayout>
    </>
  );
};

export default EmployeeCreate;
