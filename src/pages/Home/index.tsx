import { useState } from "react";
import { Button } from "../../components/Button";
import { CardFriend } from "../../components/CardFriend";
import { Input } from "../../components/Input";

import { ContentHeader, Header } from "./styles";

import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { ModalAddFriend } from "../../components/ModalAddFriend";

//import { gql } from 'graphql-tag';
//import { useQuery } from "@apollo/client";

import { DataContact, useContact } from "../../Context/ContactContext";

import { InputSelect } from "../../components/InputSelected";
import { InputPhone } from "../../components/InputPhone";


export function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { listContacts } = useContact();


  return (
    <>
      <InputSelect title="país *" />
      <InputPhone placeholder="Telefone *" />

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