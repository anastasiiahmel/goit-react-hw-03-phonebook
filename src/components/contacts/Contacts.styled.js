import { styled } from 'styled-components';

export const ContactsStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  margin-bottom: 160px;
  .list {
    margin: 0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list-name {
    width: 200px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    margin: 0;
    margin-right: 10px;
  }
  .list-number {
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    margin: 0;
    margin-right: 20px;
  }
  .btn {
    color: #dcdcdc;
    border: none;
    margin-top: 10px;
    padding: 5px;
    width: 100px;
    display: inline;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background-color: #778899;
  }

  .btn:hover {
    color: #333333;
    text-decoration: none;
    background-color: #e6e6e6;
  }
`;
