import React from 'react';

import styled from 'styled-components';

import Card from './Card';

const FormWrapper = styled.div`
  padding: 20px 10px;
  width: 100%;
`;

const FormLayout = ({ children }) => {
  return (
    <Card>
      <FormWrapper>{children}</FormWrapper>
    </Card>
  );
};

export default FormLayout;
