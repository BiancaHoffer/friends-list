import { Link } from "react-router-dom";
import { Container } from "./styles";

export function CardFriend() {
  return (
    <Link to={"/contact"}>
      <Container>
        <div>
          avatar
        </div>

        <div>
          <p>Bianca Macedo</p>
          <span>
            +000 0000-0000
          </span>
        </div>
      </Container>
    </Link>
  )
}