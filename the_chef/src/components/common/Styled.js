import { Button } from '@mui/material';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const StyledButton = styled(Button)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: black !important;
`;

export const NavBar = styled(AppBar)`
position: absolute;
height: 115px;
left: 0px;
top: 0px;
boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginButton = styled(Button)`
  position: absolute;
  width: 117px;
  height: 48px;
  top: 33px;
  border-radius: 10px;
  background-color: #EDA415 !important ;
`;