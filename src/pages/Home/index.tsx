import { useState } from "react";
import { Button } from "../../components/Button";
import { CardFriend } from "../../components/CardFriend";
import { Input } from "../../components/Input";

import { ContentHeader, Header } from "./styles";

import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { ModalAddFriend } from "../../components/ModalAddFriend";

import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { DataContact, useCreateContact } from "../../Context/ContactContext";

const GET_COUNTRIES = gql`
  {
    countries(
      page: { first: 6, after: "eyJjdXJzb3IiOjE1Mn0" }
    ) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          emoji
          emojiU
        }
      }
    }
  }
`;

const GET_CITIES = gql`
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
        emoji
        cities (page: { first: 8 }) {
          edges {
            node {
              id
              name
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

export function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { data: contries } = useQuery(GET_COUNTRIES);
  const { data: cities } = useQuery(GET_CITIES);

  const pathCountries = contries?.countries.edges;
  const pathCities = cities?.countries.edges.map((e: any) => e?.node.cities.edges);

  const { listContacts } = useCreateContact();

  console.log(pathCountries);
  console.log(pathCities);

  return (
    <>
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
          <CardFriend data={data} />
        )
      })}

      <ModalAddFriend
        open={openModal}
        setOpen={setOpenModal}
        contries={pathCountries}
        cities={pathCities}
      />
    </>
  )
}