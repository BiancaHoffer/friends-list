import { useNavigate } from "react-router-dom";

import { DataContact, useContact } from "../../Context/ContactContext";

import { Button } from "../Button";
import { Container } from "./styles";

import { IoMailOutline } from "react-icons/io5"

interface CardProps {
  data: DataContact
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
      <div>
        <div>
          <IoMailOutline />
        </div>

        {data.email}
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