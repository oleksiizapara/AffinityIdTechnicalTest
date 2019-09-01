import React from 'react';
import styled from 'styled-components';

const IconImage = styled.img`
  width: 60px;
  height: 60px;
`;

const FullName = styled.div`
  line-height: 18px;
  font-weight: bold;
  font-size: 15px;
  color: #827E99;
}
`;

const Role = styled.div`
  line-height: 18px;
  font-size: 14px;
  color: #827e99;
`;

const Teams = styled.div`
  line-height: 14px;
  font-size: 12px;
  color: #9b9b9b;
`;

const Body = styled.div`
  padding-left: 10px;
  flex: 1;
  align-self: center;
`;

const Item = styled.div`
  padding: 10px 20px 10px 20px;
  margin: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
`;

const EmployeeItem = ({ employee }) => {
  const { firstName, familyName, role, team, iconSrc } = employee;

  return (
    <Item>
      <IconImage src={iconSrc} />
      <Body>
        <FullName>
          {firstName} {familyName}
        </FullName>
        <Role>{role}</Role>
        <Teams>{team}</Teams>
      </Body>
    </Item>
  );
};

export default EmployeeItem;
