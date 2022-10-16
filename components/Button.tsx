import styled from '@emotion/styled';

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    
    width: 150px;
    height: 40px;

    border: 1px solid black;
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);

    cursor: pointer;

    &:active {
        box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 1) inset;
    }
`