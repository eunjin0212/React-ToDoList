import React from "react";
import styled from "styled-components";


const List = (title: any, children: React.ReactNode) => (
  <Ul>
    <H2>{title}</H2>
    {children}
  </Ul>
);

export default List;

const Ul = styled.ul`
  margin-bottom: 20px;
  padding: 0;
`;
const H2 = styled.h2`
  margin: 0;
  padding-bottom: 10px;
`;