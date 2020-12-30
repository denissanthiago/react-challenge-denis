import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  background-color: gray;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  padding: 80px;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 50%;
  padding: 40px;
`;

export const DetailContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
