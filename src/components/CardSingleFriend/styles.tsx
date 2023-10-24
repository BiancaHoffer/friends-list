import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  background-color: ${props => props.theme["gray800"]};
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  margin-bottom: 18px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["gray900"]};
    border-radius: 999px;
    border: 1px solid ${props => props.theme["yellow500"]};
    width: 80px;
    height: 80px;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    color: ${props => props.theme["gray400"]};

    p {
      color: white;
      font-weight: 600;
      font-size: 18px;
    }
  }
`