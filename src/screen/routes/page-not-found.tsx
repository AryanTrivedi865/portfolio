import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
  color: #4e4e4e;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #4e4e4e;
  background: #f1f1f1;
  outline: 0.1px solid #4e4e4e;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: #4e4e4e;
    color: #fff;
  }
`;

const PageNotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Content>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Message>The page you are looking for doesn't exist or has been moved.</Message>
        <HomeButton to="/">Go Home</HomeButton>
      </Content>
    </NotFoundContainer>
  );
};

export default PageNotFound;
