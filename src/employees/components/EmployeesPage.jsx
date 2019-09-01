import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import EmployeeSelected from './EmployeeSelected';
import EmployeeList from './EmployeeList';
import { useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import { actions } from 'employees/actions';
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
  }, [match.params.id]);

  return (
    <Layout>
      <div
        style={{ backgroundColor: '#fafafa', width: '100%', height: '100%' }}
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
              >
                CREATE A NEW EMPLOYEE
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} lg={6}>
              <div style={{ padding: 10 }}>
                <Form.Control type='text' placeholder='Search:' />
              </div>
            </Col>
            <Col xs={12} sm={6} lg={6}></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} lg={6}>
              <EmployeeList />
            </Col>
            <Col xs={12} sm={6} lg={6}>
              {/* <EmployeeDetails /> */}
              <EmployeeCreateOrUpdate />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default EmployeePage;
