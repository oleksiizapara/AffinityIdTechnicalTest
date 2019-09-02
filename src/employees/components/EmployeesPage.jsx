import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';

import EmployeeList from './EmployeeList';
import { useDispatch, useSelector } from 'react-redux';
import useReactRouter from 'use-react-router';
import { actions, formStates, selectedEmployeeStates } from 'employees/actions';
import { selectors } from 'employees/reducer';
import logo from 'logo.png';

import styled from 'styled-components';
import EmployeeCreateOrUpdate from './EmployeeCreateOrUpdate';
import Layout from '../../layout/components/Layout';
import EmployeeDetails from './EmployeeDetails';

const Logo = styled.div`
  background-image: url(${logo});
  height: 38px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const EmployeePage = () => {
  const dispatch = useDispatch();
  const { match } = useReactRouter();

  useEffect(() => {
    dispatch(actions.load(match.params.id));
  }, []);

  const formState = useSelector(state => selectors.formState(state));
  const selectedEmployeeState = useSelector(state =>
    selectors.selectedEmployeeState(state)
  );

  console.debug({ formState });
  switch (formState) {
    case formStates.LOADING_STATE:
      return <Spinner animation='border' />;
    case formStates.LOADED_STATE:
      return (
        <Layout>
          <div
            style={{
              backgroundColor: '#fafafa',
              width: '100%',
              height: '100%'
            }}
          >
            <Container>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  lg={6}
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <Logo />
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={6}
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <Button
                    block
                    variant='dark'
                    style={{ backgroundColor: '#000000' }}
                    onClick={e => dispatch(actions.create())}
                  >
                    CREATE A NEW EMPLOYEE
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} lg={6}>
                  <div style={{ padding: 10 }}>
                    <Form.Control
                      type='text'
                      placeholder='Search:'
                      style={{
                        padding: '30px 20px',
                        borderRadius: 10,
                        fontSize: 14,
                        color: '#827e99'
                      }}
                      onChange={e => dispatch(actions.search(e.target.value))}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={6}></Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} lg={6}>
                  <EmployeeList />
                </Col>
                <Col xs={12} sm={6} lg={6}>
                  {(() => {
                    switch (selectedEmployeeState) {
                      case selectedEmployeeStates.SELECTED_STATE:
                      case selectedEmployeeStates.DELETE_CONFIRM_STATE:
                        return <EmployeeDetails />;
                      case selectedEmployeeStates.CREATE_STATE:
                      case selectedEmployeeStates.UPDATE_STATE:
                        return <EmployeeCreateOrUpdate />;
                      default:
                        return null;
                    }
                  })()}
                </Col>
              </Row>
            </Container>
          </div>
        </Layout>
      );
    case formStates.DEFAULT_STATE:
    default:
      return <></>;
  }
};

export default EmployeePage;
