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
            <button>
              <IoIosArrowBack />
              Voltar
            </button>

            <button>
              <IoCreateOutline />
              Editar
            </button>
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