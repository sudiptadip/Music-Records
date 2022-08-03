import React from "react";
import Filter from "../Components/Filter";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageWrapperd>
      <FilterSortWrapperd>
        <Filter />
      </FilterSortWrapperd>
      <MusicFileWrapperd>
        <MusicRecords />
      </MusicFileWrapperd>
    </HomePageWrapperd>
  );
}

const HomePageWrapperd = styled.div`
  display: flex;
  
`;

const FilterSortWrapperd = styled.div`
  width: 300px;
  border: 1px solid red;
  height: 100vh;
`;

const MusicFileWrapperd = styled.div`
  width: 100%;
`;
