import React from "react";
import TrainerListItem from "./trainerListItem";
import { Trainer } from "../../trainer/trainer.interface";
import styled from "@emotion/styled";
import Checkbox from "../../shared/checkbox/checkbox";
import Theme from "../../shared/theme/theme";

type Props = {
  trainers?: Trainer[];
};

const Container = styled.div`
  display: flex;
`;
const ListContainer = styled.div`
  flex: 4;
`;
const SearchContainer = styled.div`
  flex: 1;
    margin-right: 1rem;
  background: ${Theme.color.background.dark};
  display: flex;
  flex-direction: column;
    height: fit-content;
  position: sticky;
  z-index: 2;
  top: calc(60px + 1rem);
  border-radius: 1rem;
`;

const SearchCriteria = styled.div`
    padding: 1rem;
    border-top: 1px solid grey;
`
const SearchHead = styled.div`
    text-align: center;
`

const TrainerList: React.FC<Props> = ({ trainers }) => {

  return (
    <Container>
      <SearchContainer>
          <SearchHead>
  <h4>Trænere fundet: {trainers?.length || 0}</h4>
          </SearchHead>
        <SearchCriteria>
            <p>Location</p>
            <Checkbox label={"København ("+ trainers?.filter((t) => t.location === "København").length + ")" } checked={true} onChange={() => {}}  />

            <Checkbox label={"Lyngby ("+ trainers?.filter((t) => t.location === "Lyngby").length + ")" }checked={false} onChange={() => {}}  />

            <Checkbox label={"Herlev ("+ trainers?.filter((t) => t.location === "Herlev").length + ")" } checked={false} onChange={() => {}}  />
        </SearchCriteria>
        <SearchCriteria>
            <p>Service</p>
            <Checkbox label="Styrke Træning" checked={true} onChange={() => {}}  />

            <Checkbox label="Kost vejledning" checked={false} onChange={() => {}}  />

            <Checkbox label="Vægttab" checked={false} onChange={() => {}}  />
        </SearchCriteria>
        <SearchCriteria>
            <p>Køn</p>
            <Checkbox label="Mand (22)" checked={true} onChange={() => {}}  />

            <Checkbox label="Kvinde (7)" checked={false} onChange={() => {}}  />
        </SearchCriteria>
        <SearchCriteria>
            <p>Online</p>
            <Checkbox label="Online forløb" checked={false} onChange={() => {}}  />
        </SearchCriteria>
      </SearchContainer>
       <ListContainer> 
      {trainers &&
        trainers.map((t: Trainer) => {
          return <TrainerListItem  trainer={t}></TrainerListItem>;
        })}
        </ListContainer>
    </Container>
  );
};

export default TrainerList;
