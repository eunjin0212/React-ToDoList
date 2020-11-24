import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  margin-bottom: 20px;
  padding: 0;
`;
const H2 = styled.h2`
  margin: 0;
  padding-bottom: 10px;
`;

// eslint-disable-next-line
export default ({ title, children }) => (
  <>
    <Ul>
      <H2>{title}</H2>
      {children}
    </Ul>
  </>
);
