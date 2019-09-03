import React from 'react';
import styled from 'styled-components';
import Card from '../../layout/components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from 'employees/reducer';
import { Image, Row, Col, Button, Alert } from 'react-bootstrap';
import { actions, selectedEmployeeStates } from 'employees/actions';

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

const EditAndDeleteButtons = () => {
  const dispatch = useDispatch();
  const employee = useSelector(state => selectors.selectedEmployee(state));

  return (
    <>
      <span
        className='fa-stack fa-x'
        style={{ cursor: 'pointer' }}
        onClick={e => dispatch(actions.update(employee.id))}
      >
        <i
          className='fa fa-circle fa-stack-2x'
          style={{ color: '#f2f7fa' }}
        ></i>
        <i className='fa fa-pen fa-stack-1x' style={{ color: '#000000' }}></i>
      </span>

      <span
        className='fa-stack fa-x'
        style={{ cursor: 'pointer' }}
        onClick={e => dispatch(actions.deleteEmployee(employee.id))}
      >
        <i
          className='fa fa-circle fa-stack-2x'
          style={{ color: '#f2f7fa' }}
        ></i>
        <i className='fa fa-times fa-stack-1x' style={{ color: '#f86770' }}></i>
      </span>
    </>
  );
};

const EmployeeDetails = () => {
  const dispatch = useDispatch();

  const employee = useSelector(state => selectors.selectedEmployee(state));
  const selectedEmployeeState = useSelector(state =>
    selectors.selectedEmployeeState(state)
  );

  return (
    <>
      <div className='detailIconMargin' />
      <Card
        style={{ display: 'block', position: 'inherit', paddingBottom: 20 }}
      >
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
        <div style={{ marginTop: 52 }} />

        <Centered>
          <Title>
            {employee.firstName} {employee.familyName}
          </Title>
        </Centered>

        <Centered>
          <Email>{employee.email}</Email>
        </Centered>

        {selectedEmployeeState ===
        selectedEmployeeStates.DELETE_CONFIRM_STATE ? (
          <Alert variant='danger'>
            <Row
              style={{
                paddingLeft: 10,
                paddingRight: 0,
                justifyContent: 'center' /* align horizontal */,
                alignItems: 'center'
              }}
            >
              <div style={{ flex: '2 2 2%' }}>Are you sure?</div>
              <div style={{ flex: 2 }}>
                <Centered>
                  <span className='fa-stack fa-x'>
                    <i
                      className='fa fa-circle fa-stack-2x'
                      style={{ color: '#d7384c' }}
                    ></i>
                    <i
                      className='fa fa-pen fa-stack-1x'
                      style={{ color: '#ab0c20' }}
                    ></i>
                  </span>

                  <span className='fa-stack fa-x'>
                    <i
                      className='fa fa-circle fa-stack-2x'
                      style={{ color: '#d7384c' }}
                    ></i>
                    <i
                      className='fa fa-times fa-stack-1x'
                      style={{ color: '#d90c23' }}
                    ></i>
                  </span>
                </Centered>
              </div>
              <div style={{ flex: 1 }}>
                <Alert.Link
                  onClick={e =>
                    dispatch(actions.deleteEmployeeConfirm(employee.id))
                  }
                >
                  YES
                </Alert.Link>
              </div>
              <div style={{ flex: 1 }}>
                <Alert.Link
                  onClick={e => dispatch(actions.selectEmployee(employee.id))}
                >
                  NO
                </Alert.Link>
              </div>
            </Row>
          </Alert>
        ) : (
          <Centered style={{ marginTop: 20 }}>
            <span
              className='fa-stack fa-x'
              style={{ cursor: 'pointer' }}
              onClick={e => dispatch(actions.update(employee.id))}
            >
              <i
                className='fa fa-circle fa-stack-2x'
                style={{ color: '#f2f7fa' }}
              ></i>
              <i
                className='fa fa-pen fa-stack-1x'
                style={{ color: '#000000' }}
              ></i>
            </span>

            <span
              className='fa-stack fa-x'
              style={{ cursor: 'pointer' }}
              onClick={e => dispatch(actions.deleteEmployee(employee.id))}
            >
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
        )}

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
          onClick={e => dispatch(actions.share(employee.id))}
        >
          SHARE
        </Button>
      </Card>
    </>
  );
};

export default EmployeeDetails;
