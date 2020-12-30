import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  grid-auto-rows: auto;
  justify-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  padding: 50px 100px;
  box-sizing: border-box;
`;
