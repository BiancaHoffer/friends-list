import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import { useState } from "react"

import { ContentHeader, Header, Avatar } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { CardSingleFriend } from "../../components/CardSingleFriend";

import { ModalUpdateFriend } from "../../components/ModalUpdate";

export function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();

  return (
    <>
      <Header>
        <ContentHeader>
          <div>
            <Link to="/">
              <IoIosArrowBack />
              Voltar
            </Link>

            <button onClick={() => setOpenModal(true)}>
              <IoCreateOutline />
              Editar
            </button>
          </div>

          <div>
            <Avatar>
              avatar
            </Avatar>

            <h1>{state.name}</h1>

            <span>
              {state.phone}
            </span>
          </div>
        </ContentHeader>
      </Header>

      <CardSingleFriend data={state} />

      <ModalUpdateFriend open={openModal} setOpen={setOpenModal} />
    </>
  )
}