import { useState, FormEvent } from "react";

import { Container, ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";
import { InputPhone } from "../InputPhone";
import { useCreateContact } from "../../Context/ContactContext";

interface ModalAddFriendProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DataContact {
  name: string;
  email: string;
  phone: string;
}

export function ModalAddFriend({ openModal, setOpenModal }: ModalAddFriendProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useCreateContact();

  function handleAddContact(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("Por favor, preencha os campos obrigatórios");
      return;
    }

    const UIDProductGenerate = Math.floor(Date.now() * Math.random()).toString(32);

    const data = {
      id: UIDProductGenerate,
      name,
      email,
      phone,
    } as DataContact;

    addContact(data);
    setOpenModal(false);
  };

  return (
    <Container
      closeModal={openModal}
    >
      <ContainerModal>
        <div>
          <p>Adicionar amigo</p>
          <button
            onClick={() => setOpenModal(false)}
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
            <InputPhone placeholder="000 000 000" onChange={(e) => setPhone(e.target.value)} />
          </div>

          <p style={{ marginTop: "40px" }}>
            Localização
          </p>
          <div>

          </div>

          <span>
            <Button
              title="Salvar"
              type="submit"
            />
            <Button
              onClick={() => setOpenModal(false)}
              title="Cancelar"
              type="button"
              variant="gray"
            />
          </span>
        </form>
      </ContainerModal>
    </Container>
  )
}