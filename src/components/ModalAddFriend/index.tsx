import { MouseEvent, useState, FormEvent } from "react";

import { Container, ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";

interface ModalAddFriendProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DataContact {
  name: string;
  email: string;
}

export function ModalAddFriend({ open, setOpen }: ModalAddFriendProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [listContacts, setListContacts] = useState<DataContact[]>([])

  const data = {
    name,
    email
  } as DataContact

  function handleAddContact(event: FormEvent) {
    event.preventDefault();

    console.log(data)
  }

  const handleClickInsideModal = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <Container
        closeModal={open}
      >
        <ContainerModal>
          <div>
            <p>Adicionar amigo</p>
            <button
              onClick={() => setOpen(false)}
              type="button"
            >
              <IoCloseOutline />
            </button>
          </div>

          <form onSubmit={handleAddContact}>
            <p>Dados de contato</p>
            <div>
              <Input
                placeholder="Nome completo"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input />
            </div>

            <p style={{ marginTop: "40px" }}>
              Localização
            </p>
            <div>
              <Input />
              <Input />
            </div>

            <span>
              <Button
                title="Salvar"
                type="submit"
              />
              <Button
                title="Cancelar"
                type="button"
              />
            </span>

          </form>
        </ContainerModal>
      </Container>

    </>
  )
}