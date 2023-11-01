import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme["gray800"]};
  border-radius: 12px;
  max-width: 900px;
  padding: 40px;
  margin: auto;
  margin-top: 16px;

  border:1px solid transparent;
  cursor: pointer;

  transition: all 0.3s ease;

  display: flex;
  gap: 32px;
  align-items: center;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    color: ${props => props.theme["gray400"]};

    & > div {
      display: flex;
      gap: 16px;
      align-items: center;

      img {
        width: 32px;
      }

      & > p {
      color: ${props => props.theme["white"]};
      font-weight: 600;
      font-size: 1.1rem;
    }
    }

    & > p {
      color: ${props => props.theme["gray400"]};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`

export const Avatar = styled.img`
  display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["gray900"]};
    border-radius: 999px;
    border: 2px solid ${props => props.theme["yellow500"]};
    width: 120px;
    height: 120px;
  `