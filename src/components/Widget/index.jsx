import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

// const bgColor = ({ theme }) => theme.borderRadius

const Box = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid  ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => rgba(theme.colors.mainBg, 0.5)};
  border-radius: ${({ theme }) => theme.borderRadius};
  backdrop-filter: blur(3px);
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.275;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Widget({ children }) {
  return (
    <Box>
      {children}
    </Box>
  );
}

Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
