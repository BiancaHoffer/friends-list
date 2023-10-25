import { MouseEvent, useState, FormEvent } from "react";

import { Container, ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";
import { InputPhone } from "../InputPhone";
import { InputSelect } from "../InputSelected";
import { InputSelectCities } from "../InputSelectedCities";
import { useCreateContact } from "../../Context/ContactContext";

interface ModalAddFriendProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contries?: any[];
  cities?: any[];
}

interface DataContact {
  name: string;
  email: string;
  phone: string;
}

export function ModalUpdateFriend({ open, setOpen, contries, cities }: ModalAddFriendProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useCreateContact();

  function handleAddContact(event: FormEvent) {
    event.preventDefault();

    const UIDProductGenerate = Math.floor(Date.now() * Math.random()).toString(32);

    const data = {
      id: UIDProductGenerate,
      name,
      email,
      phone,
    } as DataContact;

    addContact(data);
    console.log(data)
  };

  return (
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
            <InputPhone placeholder="000 000 000" onChange={(e) => setPhone(e.target.value)} />
          </div>

          <p style={{ marginTop: "40px" }}>
            Localização
          </p>
          <div>
            <InputSelect title="país" data={contries} />
            <InputSelectCities title="sitio" data={cities} />
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
  )
}