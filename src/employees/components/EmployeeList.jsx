import React, { useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../reducer';
import EmployeeItem from './EmployeeItem';

const EmployeeList = () => {
  const employees = useSelector(state => selectors.employees(state));

  return (
    <>
      <div>
        {employees.map(employee => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
