import styled from '@emotion/styled';

const CustomInput = styled.input`
    // REMOVE DEFAULT STYLING
    -webkit-appearance: none;
    box-shadow: none !important;
    outline: none;
    border: none;
    padding: 0;

    &:-webkit-autofill { color: #fff !important; }

    // Actual styles
    width: 390px;
    height: 30px;
    padding: 0 4px 0 4px;
    border: 1px solid rgba(0, 0, 0, 1);
    margin-bottom: 10px;

    @media only screen and (max-width: 600px) {
        width: 280px;
    }
`

export const Input = ({ field }) => (
    <CustomInput {...field} />
)