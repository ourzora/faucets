import styled from '@emotion/styled';

const CustomSelect = styled.select`
    // REMOVE DEFAULT STYLING
    box-shadow: none !important;
    outline: none;
    border: none;
    padding: 0;

    &:-webkit-autofill { color: #fff !important; }

    // Actual styles
    width: 400px;
    height: 32px;
    padding: 0 4px 0 4px;
    border: 1px solid rgba(0, 0, 0, 1);
    margin-bottom: 10px;

    @media only screen and (max-width: 600px) {
        width: 280px;
    }
`

export const Select = (props) => (<CustomSelect {...props} />)
