import { Link, useLocation } from "react-router-dom";
import { useState } from "react"

import { ContentHeader, Header, Avatar } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { CardSingleFriend } from "../../components/CardSingleFriend";
import { ModalUpdateFriend } from "../../components/ModalUpdate";

export function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const { state: data } = useLocation();

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
            <Avatar src={data.avatar_url} />

            <h1>{data.name}</h1>

            <span>
              + {data.phone_code} {data.phone}
            </span>
          </div>
        </ContentHeader>
      </Header>

      <CardSingleFriend data={data} />

      <ModalUpdateFriend
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
}