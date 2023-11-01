import { useNavigate } from "react-router-dom";

import { DataForm, useContact } from "../../Context/ContactContext";

import { Button } from "../Button";
import { Container } from "./styles";

import { IoMailOutline, IoEarthOutline } from "react-icons/io5"

interface CardProps {
  data: DataForm;
}

export function CardSingleFriend({ data }: CardProps) {
  const { removeContact } = useContact();
  const navigate = useNavigate();

  function handleDeleteContact(id: string) {
    removeContact(id);
    navigate("/");
  }

  return (
    <Container>
      <div id="item">
        <div id="icon">
          <IoMailOutline />
        </div>
        E-mail: {data.email}
      </div>

      <div id="item">
        <div id="icon">
          <IoEarthOutline />
        </div>
        País: {data.country}
      </div>

      <div>
        <Button
          //@ts-ignore
          onClick={() => handleDeleteContact(data?.id)}
          title="Deletar contato"
          variant="red"
        />
      </div>
    </Container>
  )
}