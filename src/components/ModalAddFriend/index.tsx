import { useState, FormEvent } from "react";

import { Opacity, ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";
import { InputPhone } from "../InputPhone";
import { useContact } from "../../Context/ContactContext";
import { InputSelect } from "../InputSelected";

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
  const [codePhone, setCodePhone] = useState("");

  const { addContact } = useContact();

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
    <Opacity
      closeModal={openModal}
    >
      <ContainerModal>
        <div id="title-buttonclose">
          <h2>Adicionar amigo</h2>

          <button onClick={() => setOpenModal(false)}>
            <IoCloseOutline />
          </button>
        </div>

        <form action="">
          <div id="name-email" style={{ display: "flex" }}>
            <Input placeholder="Nome completo" type="text" required />
            <Input placeholder="E-mail" type="email" required />
          </div>

          <div id="image-phone">
            <InputPhone placeholder="Telefone *" type="tel" required />
            <Input placeholder="imagem" />
          </div>

          <div id="country-city">
            <InputSelect title="país *" required />
            <InputSelect title="sitio *" required />
          </div>

          <div id="buttons">
            <Button title="Salvar" type="submit" />
            <Button title="Cancelar" type="button" variant="gray" />
          </div>
        </form>

      </ContainerModal>
    </Opacity>
  )
}