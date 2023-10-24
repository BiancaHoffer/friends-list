import { Link, useRoutes } from "react-router-dom";

import { ContentHeader, Header, Avatar } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { CardSingleFriend } from "../../components/CardSingleFriend";

export function Contact() {
  return (
    <>
      <Header>
        <ContentHeader>
          <div>
            <Link to="/">
              <IoIosArrowBack />
              Voltar
            </Link>

            <Link to="/">
              <IoCreateOutline />
              Editar
            </Link>
          </div>

          <div>
            <Avatar>
              avatar
            </Avatar>

            <h1>Bianca Macedo</h1>

            <span>
              +000 0000-0000
            </span>
          </div>
        </ContentHeader>
      </Header>

      <CardSingleFriend />
    </>
  )
}