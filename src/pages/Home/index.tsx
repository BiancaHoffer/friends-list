import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { CardFriend } from "../../components/CardFriend";
import { Input } from "../../components/Input";

import { ContentHeader, Header } from "./styles";

import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { ModalAddFriend } from "../../components/ModalAddFriend";

import { gql } from 'graphql-tag';
import { DataContact, useCreateContact } from "../../Context/ContactContext";

import { useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  {
    countries(
      page: { first: 5, after: "eyJjdXJzb3IiOjE1Mn0" }
    ) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          iso2
          
          states (page: { first: 5 }) {
            edges {
              node {
                id
                name
                state_code
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

const GET_CITIES = gql`
query GetCities($countryCode: String!, $stateCode: String!) {
  state(locationCode: { country_code: $countryCode, state_code: $stateCode }) {
    id
    name
    country_id
    cities(page: { first: 8 }) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          state_id
          state_code
        }
      }
    }
  }
}
`;


export function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { listContacts } = useCreateContact();
  const [countryCode, setCountryCode] = useState();
  const [stateCode, setStateCode] = useState();

  const { data: countries } = useQuery(GET_COUNTRIES);
  const { data: cities } = useQuery(GET_CITIES, {
    variables: {
      countryCode: "NR",  // Deve corresponder à variável $countryCode na consulta
      stateCode: "01",
    }
  });

  const getlist = countries?.countries.edges;

  useEffect(() => {
    const mapCode = getlist?.map((i: any) => {
      return i?.node.iso2
    })

    setCountryCode(mapCode);

    const mapStateCode = getlist?.map((i: any) => {
      return i?.node.states.edges.map((e: any) => {
        return e?.node.state_code
      })
    })

    setStateCode(mapStateCode);

    console.log(cities)
    console.log(mapStateCode)
  }, [countries, cities])


  return (
    <>
      <div>
        {
          getlist?.map((i: any) => {
            return (
              <div key={i.node.iso2}>{i.node.name}</div>
            )
          })
        }
      </div>
      <Header>
        <ContentHeader>
          <div>
            <h1>Lista de amigos</h1>

            <Button
              title="Adicionar novo amigo"
              icon={<IoIosAdd />}
              onClick={() => setOpenModal(true)}
            />
          </div>

          <div>
            <Input
              placeholder="Buscar amigos"
              icon={<IoIosSearch />}
            />
          </div>
        </ContentHeader>
      </Header>

      {listContacts.map((data: DataContact) => {
        return (
          <CardFriend key={data.id} data={data} />
        )
      })}

      <ModalAddFriend
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
}