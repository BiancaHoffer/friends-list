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

    > a, button {
      background-color: transparent;
      border: none;
      color: ${props => props.theme["white"]};

      display: flex;
      gap: 12px;
      font-size: 18px;

      transition: all 0.3s;

      &:hover {
        color: ${props => props.theme["yellow500"]};
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    h1 {
      margin: 32px 0px 12px 0px;
      font-size: 1.6rem;
    }

    span {
      color: ${props => props.theme["gray400"]};
    }
  }
  `

export const Avatar = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["gray900"]};
    border-radius: 999px;
    border: 1px solid ${props => props.theme["yellow500"]};
    width: 120px;
    height: 120px;
  `
