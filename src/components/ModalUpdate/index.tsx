import { useState, FormEvent } from "react";

import { Container, ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";
import { InputPhone } from "../InputPhone";

import { DataContact, useContact } from "../../Context/ContactContext";
import { useNavigate } from "react-router-dom";

interface ModalAddFriendProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataContact
  contries?: any[];
  cities?: any[];
}
export function ModalUpdateFriend({ openModal, setOpenModal, data }: ModalAddFriendProps) {
  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [phone, setPhone] = useState(data?.phone);

  const { updateContact } = useContact();

  const navigate = useNavigate();

  function handleAddContact(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
    } as DataContact;

    updateContact(data);
    setOpenModal(false);
    navigate("/");
  };

  return (
    <Container
      closeModal={openModal}
    >
      <ContainerModal>
        <div>
          <p>Editar dados do amigo</p>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              value={email}
              placeholder="E-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPhone
              value={phone}
              placeholder="000 000 000"
              onChange={(e) => setPhone(e.target.value)}
            />
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