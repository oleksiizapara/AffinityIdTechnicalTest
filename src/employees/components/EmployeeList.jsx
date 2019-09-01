import React, { useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../reducer';
import EmployeeItem from './EmployeeItem';
import styled from 'styled-components';

const GroupedEmployeesTitle = styled.div`
  padding: 10px 30px;
  font-size: 14px;
  color: #827e99;
`;

const EmployeeList = () => {
  const employeesGroups = useSelector(state =>
    selectors.employeesGroups(state)
  );

  return (
    <>
      {employeesGroups.map((employeesGroup, index) => (
        <React.Fragment key={employeesGroup.name}>
          <GroupedEmployeesTitle>
            <div style={{ display: 'inline' }}>{employeesGroup.name}</div>
            {index === 0 ? (
              <div style={{ display: 'inline', float: 'right' }}>
                Sort By:{' '}
                <span style={{ cursor: 'pointer', color: '#000000' }}>
                  newest
                </span>
              </div>
            ) : (
              <></>
            )}
          </GroupedEmployeesTitle>
          {employeesGroup.employees.map(employee => (
            <EmployeeItem key={employee.id} employee={employee} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default EmployeeList;
