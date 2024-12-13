import styled from 'styled-components';

const NavWrapper = styled.nav`
  margin-left: 10px;
  font-size: 20px;
  padding: 10px;

  & > a {
    padding: 5px;
    text-decoration: none;
    color: chocolate;
    transition: all 0.3s;
  }

  & > a.active {
    color: #067539;
    text-decoration: dashed;
    pointer-events: none;
  }

  & > a:hover {
    color: steelblue;
  }
`;

export const S = {
  NavWrapper,
};
