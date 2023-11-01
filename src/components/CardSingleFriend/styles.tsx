import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;

  background-color: ${props => props.theme["gray800"]};
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  margin-bottom: 18px;

  #item {
    display: flex;
    align-items: center;
    gap: 8px;

    #icon {
      color: ${props => props.theme["yellow500"]};
      font-size: 20px;
      margin-top: 4px;
    } 
  }
`