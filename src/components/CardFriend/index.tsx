import { Link } from "react-router-dom";
import { Container } from "./styles";
import { DataContact, useCreateContact } from "../../Context/ContactContext";

interface CardProps {
  data: DataContact;
}

export function CardFriend({ data }: CardProps) {
  return (
    <Link to={`/contact/${data.id}`} state={data}>
      <Container>
        <div>
          <p>{data.name}</p>
          <p>{data.phone}</p>
        </div>
      </Container>
    </Link>
  )
}