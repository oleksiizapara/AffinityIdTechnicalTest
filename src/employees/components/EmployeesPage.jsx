import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from './Layout';
import EmployeeSelected from './EmployeeSelected';
import EmployeeList from './EmployeeList';
import { useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import { actions } from 'employees/actions';

const EmployeePage = () => {
  const dispatch = useDispatch();
  const { match } = useReactRouter();

  useEffect(() => {
    dispatch(actions.load(match.params.id));
  }, [match.params.id]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <EmployeeList />
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <EmployeeSelected />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EmployeePage;
