import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  width: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  text-align: left;
`;

export const Input = styled.input`
  width: 250px;
  height: 24px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Button = styled.button`
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 24px;
  font-size: 14px;
  padding: 0 10px;
  text-align: center;

  &:hover {
    background-color: #188ce8;
  }
`;
