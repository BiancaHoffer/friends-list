import { useState, FormEvent } from "react";

import { ContainerModal } from "./styles";

import { IoCloseOutline } from "react-icons/io5";

import { Input } from "../Input";
import { Button } from "../Button";
import { InputPhone } from "../InputPhone";

import { DataForm, useContact } from "../../Context/ContactContext";
import { useNavigate } from "react-router-dom";
import { InputImage, Opacity } from "../ModalAddFriend/styles";
import { InputSelect } from "../InputSelected";
import { InputSelectCities } from "../InputSelectCities";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { ImageFile } from "../ModalAddFriend";

interface ModalAddFriendProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataForm
  contries?: any[];
  cities?: any[];
}
export function ModalUpdateFriend({ openModal, setOpenModal, data }: ModalAddFriendProps) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [codePhone, setCodePhone] = useState(data.phone_code);
  const [iso2, setIso2] = useState(data.iso2);
  const [country, setCountry] = useState(data.country);

  const [avatar, setAvatar] = useState<ImageFile | null>(null);

  const { addContact } = useContact();

  async function handleAddContact(event: FormEvent) {
    event.preventDefault();

    if (avatar == null) {
      alert("Por favor, insira uma imagem do produto.");
      return;
    }

    if (avatar.size > 5 * 1024 * 1024) {
      alert("O arquivo precisa ter no máximo 5MB");
      return;
    }

    const storageRef = ref(storage, `avatar_images/${avatar.name}`);

    try {
      await uploadBytes(storageRef, avatar)
        .then(() => {
          getDownloadURL(storageRef)
            .then((url) => {
              const UIDProductGenerate = Math.floor(Date.now() * Math.random()).toString(32);

              const data = {
                id: UIDProductGenerate,
                name,
                email,
                phone,
                phone_code: codePhone,
                iso2,
                country,
                avatar_url: url,
              } as DataForm;

              addContact(data);
              console.log(data)
            })
        });
    }
    catch {
      alert("Houve um erro, teste novamente mais tarde.");
    }
    finally {
      setOpenModal(false);
    }
  };

  return (
    <Opacity
      closeModal={openModal}
    >
      <ContainerModal>
        <div id="title-buttonclose">
          <h2>Adicionar amigo</h2>

          <button onClick={() => setOpenModal(false)}>
            <IoCloseOutline />
          </button>
        </div>

        <form onSubmit={handleAddContact}>
          <div id="name-email" style={{ display: "flex" }}>
            <Input
              placeholder="Nome completo"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div id="image-phone">
            <InputPhone
              placeholder="Telefone *"
              type="tel"
              setCodePhone={setCodePhone}
              setIso2={setIso2}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <InputImage>
              <div>Avatar</div>
              <input
                type="file"
                id="file"
                accept="image/*"
                className="md:text-sm cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setAvatar(file)
                  }
                }}
              />
            </InputImage>
          </div>

          <div id="country-city">
            <InputSelect title="país *" setSelected={setCountry} />
            <InputSelectCities title="sitio *" />
          </div>

          <div id="buttons">
            <Button title="Salvar" type="submit" />
            <Button title="Cancelar" type="button" variant="gray" />
          </div>
        </form>

      </ContainerModal>
    </Opacity>
  )
}