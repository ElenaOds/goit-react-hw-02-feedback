import styled from '@emotion/styled';

export const Button = styled.button`
    display: inline-block;
    width: 100px;
    padding: 10px;
    margin-right: 10px;
    background-color: #fff;
    font-size: 16px;
    box-shadow: 3px 6px 20px rgba(0.12, 0.12, 0.12, 0.12), 
    1px 3px 4px rgba(0, 0, 0, 0.14), 
    0px 0px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: inherit;
    cursor: pointer;
    text-transform: capitalize;

    &:focus {
    background-color: #89CFF0;
    }
    `;