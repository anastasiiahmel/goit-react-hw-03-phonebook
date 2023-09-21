import { styled } from 'styled-components';

export const FormStyle = styled.div`
  .label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btn {
    color: #dcdcdc;
    border: none;
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px;
    width: 100px;
    cursor: pointer;
    background-color: #778899;
  }
  .btn:hover {
    color: #333333;
    background-color: #d3d3d3;
  }
  .input {
    padding: 5px;

    border: none;
    background-color: #dcdcdc;
    margin-left: 10px;
  }
  .input-title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 10px;
    color: #696969;
    margin-left: 10px;
  }
  ::placeholder {
    font-size: 10px;
  }
`;
