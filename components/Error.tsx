import styled from '@emotion/styled';

const CustomError = styled.div`
    color: #F16363;
    font-size: 8px;
    margin: -8px 0 8px 0;
`

export const Error = (props) => (<CustomError {...props} />)