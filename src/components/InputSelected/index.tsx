import { ComponentProps, ReactNode, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Container, Select, Options, Item } from "./styles";


interface InputSelectProps extends ComponentProps<'input'> {
  title?: string;
}

const countries = [{
  id: 200,
  name: "Brasil",
}, {
  id: 222,
  name: "Portugal",
}, {
  id: 224,
  name: "Espanha",
}]

export function InputSelect({ title }: InputSelectProps) {
  const [openSelect, setOpenSelect] = useState(false);
  const [itemSeleted, setItemSeleted] = useState(`Selecionar ${title}...`);

  function handleGetContry(e: any) {
    setOpenSelect(false);
    setItemSeleted(e.target.value);
  }

  return (
    <Container>
      <Select openSelect={openSelect}>
        <label htmlFor="option-view-button"></label>
        <input
          type="checkbox"
          id="option-view-button"
          onChange={() => setOpenSelect(!openSelect)}
        />

        <div id="select-button">
          <div>{itemSeleted}</div>

          <div id="chevrons">
            {openSelect ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
      </Select>

      <Options openSelect={openSelect}>
        <div id="option">
          {countries.map(i => {
            return (
              <Item key={i.id}>
                <input
                  type="radio"
                  name="country"
                  value={i.name}
                  onChange={handleGetContry}
                />

                <i>Bandeira</i>
                <label>{i.name}</label>
              </Item>
            )
          })}
        </div>
      </Options>
    </Container>
  )
}