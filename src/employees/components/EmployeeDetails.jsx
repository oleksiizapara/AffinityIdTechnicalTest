import React from 'react';
import styled from 'styled-components';
import Card from '../../layout/components/Card';
import { useSelector } from 'react-redux';
import { selectors } from 'employees/reducer';
import { Image, Row, Col, Button } from 'react-bootstrap';

const Centered = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #4A4A4A;
}
`;

const Email = styled.div`
  line-height: 14px;
  font-size: 12px;
  color: #9b9b9b;
`;

const PropertyValue = styled.span`
  font-size: 14px;
  color: #827e99;
`;

const PropertyDescription = styled.span`
  line-height: 14px;
  font-size: 12px;
  color: #9b9b9b;
`;

const PropertyGroup = styled.div`
  padding: 10px 20px;
`;

const NameProperty = styled.div``;

const ValueProperty = styled.div``;

const EmployeeDetails = () => {
  const employee = useSelector(state => selectors.selectedEmployee(state));

  return (
    <Card style={{ display: 'block' }}>
      <Image
        src={employee.iconSrc}
        roundedCircle
        style={{
          width: 104,
          height: 104,
          position: 'absolute',
          top: -52,
          left: '50%',
          marginLeft: -52
        }}
      />
      <div style={{ marginTop: '52px' }} />

      <Centered>
        <Title>
          {employee.firstName} {employee.familyName}
        </Title>
      </Centered>

      <Centered>
        <Email>{employee.email}</Email>
      </Centered>

      <Centered style={{ marginTop: 20 }}>
        <span className='fa-stack fa-x' style={{ cursor: 'pointer' }}>
          <i
            className='fa fa-circle fa-stack-2x'
            style={{ color: '#f2f7fa' }}
          ></i>
          <i className='fa fa-pen fa-stack-1x'></i>
        </span>

        <span className='fa-stack fa-x' style={{ cursor: 'pointer' }}>
          <i
            className='fa fa-circle fa-stack-2x'
            style={{ color: '#f2f7fa' }}
          ></i>
          <i
            className='fa fa-times fa-stack-1x'
            style={{ color: '#f86770' }}
          ></i>
        </span>
      </Centered>

      <PropertyGroup>
        <PropertyDescription>
          <Row>
            <Col>Role</Col>
            <Col>Team</Col>
          </Row>
        </PropertyDescription>
        <PropertyValue>
          <Row>
            <Col>{employee.role}</Col>
            <Col>{employee.team}</Col>
          </Row>
        </PropertyValue>
      </PropertyGroup>

      <PropertyGroup>
        <PropertyDescription>
          <Row>
            <Col>Address</Col>
            <Col>City</Col>
          </Row>
        </PropertyDescription>
        <PropertyValue>
          <Row>
            <Col>{employee.address}</Col>
            <Col>{employee.city}</Col>
          </Row>
        </PropertyValue>
      </PropertyGroup>

      <Button
        type='submit'
        variant='secondary'
        block
        style={{ backgroundColor: '#9B9B9B' }}
      >
        SHARE
      </Button>
    </Card>
  );
};

export default EmployeeDetails;
