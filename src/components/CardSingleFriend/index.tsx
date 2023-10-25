import { useNavigate } from "react-router-dom";
import { DataContact, useCreateContact } from "../../Context/ContactContext";
import { Button } from "../Button";
import { Container } from "./styles";

interface CardProps {
  data: DataContact
}

export function CardSingleFriend({ data }: CardProps) {
  const { removeContact } = useCreateContact();
  const navigate = useNavigate();

  function handleDeleteContact(id: string) {
    removeContact(id);
    navigate("/")
  }

  return (
    <Container>
      <div>
        {data.email}
      </div>

      <div>
        <Button
          //@ts-ignore
          onClick={() => handleDeleteContact(data?.id)}
          title="Deletar contato" />
      </div>
    </Container>
  )
}