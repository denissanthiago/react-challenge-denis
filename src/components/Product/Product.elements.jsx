import styled from "styled-components";

export const ContentCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleCard = styled.h5`
  color: red;
`;

export const CardInfo = styled.div`
  padding: 15px;
  font-size: 0.8em;
`;
