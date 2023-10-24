import { ComponentProps, ReactNode, useEffect, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Container, InputStyle, Select, SelectButton, Option, ContentOption } from "./styles";
import { Input } from "../Input";

interface ButtonProps extends ComponentProps<'input'> {
  icon?: ReactNode;
}

const teste = [{
  id: 200,
  name: "Singapore",
  phone_code: "65",
}, {
  id: 222,
  name: "Thailand",
  phone_code: "66",
}, {
  id: 224,
  name: "Alabama",
  phone_code: "11",
}]

export function InputPhone({ icon, ...props }: ButtonProps) {
  const [openSelect, setOpenSelect] = useState(false);
  const [itemSeleted, setItemSeleted] = useState("1");

  useEffect(() => {
    console.log(itemSeleted);
    console.log(openSelect)
  }, [itemSeleted])

  function handleGetPhoneCode(e: any) {
    setOpenSelect(false)
    setItemSeleted(e.target.value);
    console.log(openSelect)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <Select>
          <div id="phone-select">
            <label htmlFor="select-number-country"></label>
            <input
              type="checkbox"
              id="select-number-country"
              onChange={() => setOpenSelect(!openSelect)}
            />

            <SelectButton>
              <div id="select-value">
                + {itemSeleted}
              </div>

              <div id="chevrons">
                {openSelect ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </SelectButton>
          </div>
        </Select>

        <InputStyle {...props} />
      </Container>

      <Option openSelect={openSelect}>
        <input type="text" placeholder="Pesquisar code number" />
        <ContentOption style={{ position: "absolute", width: "100%" }}>
          {teste.map(i => {
            return (
              <li key={i.id} id="option">
                <input
                  type="radio"
                  name="country"
                  value={i.phone_code}
                  onChange={handleGetPhoneCode}
                />

                <i>Bandeira</i>
                <p>{i.name} (+ {i.phone_code})</p>
              </li>
            )
          })}
        </ContentOption>
      </Option>
    </div>
  )
}