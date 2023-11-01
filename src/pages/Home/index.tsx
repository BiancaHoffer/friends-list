import { useState } from "react";
import { Button } from "../../components/Button";
import { CardFriend } from "../../components/CardFriend";
import { Input } from "../../components/Input";

import { ContentHeader, Header } from "./styles";

import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { ModalAddFriend } from "../../components/ModalAddFriend";

import { DataForm, useContact } from "../../Context/ContactContext";

export function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { listContacts } = useContact();

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


      {listContacts.map((data: DataForm) => {
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