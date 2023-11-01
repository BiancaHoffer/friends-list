import { Link } from "react-router-dom";
import { Container, Avatar } from "./styles";
//import { DataContact } from "../../Context/ContactContext";

interface CardProps {
  data: any;
}

export function CardFriend({ data }: CardProps) {
  return (
    <Link to={`/contact/${data.id}`} state={data}>
      <Container>
        <Avatar src={data.avatar_url} />
        <div>
          <div>
            <p>{data.name}</p>
            <img src={data.iso2} />
          </div>

          <p>+ {data.phone_code} {data.phone}</p>
        </div>
      </Container>
    </Link>
  )
}