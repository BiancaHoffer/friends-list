import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme["gray800"]};
  width: 100%;
  margin-bottom: 32px;
`;

export const ContentHeader = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px; 

    h1 {
      font-size: 1.6rem;
    }
  }

  > div:nth-child(2) {
    width: 100%;
  }
`
