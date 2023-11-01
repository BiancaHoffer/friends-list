import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { gql } from 'graphql-tag';
import { useQuery } from "@apollo/client";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  addContact: (data: DataForm) => void;
  removeContact: (id: string) => void;
  updateContact: (data: DataForm) => void;
  queryCountries: CountryData[];
  listContacts: DataForm[];
}

export interface DataForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  iso2?: string;
  phone_code?: string;
}


export interface CountryData {
  id: number;
  name: string;
  phone_code: string;
  iso2: string;
}

const QUERY_COUNTRIES = gql`
  query {
  countries (page: {first: 4}) {
    totalCount
    edges {
      node {
        id
        name
        iso2
        phone_code
      }
    }
  }
}`

export const ContactContext = createContext({} as AuthContextProps);

export function ContactProvider({ children }: AuthProviderProps) {
  const [listContacts, setListContacts] = useState<DataForm[]>(() => {
    const storage = localStorage.getItem('@biancamacedo');

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  });

  const { data } = useQuery(QUERY_COUNTRIES);

  const queryCountries = data?.countries.edges.map((codePhone: any) => {
    return {
      id: codePhone.node.id,
      phone_code: codePhone.node.phone_code,
      iso2: codePhone.node.iso2.toLowerCase(),
      name: codePhone.node.name,
    }
  }) as CountryData[];


  useEffect(() => {
    localStorage.setItem("@biancamacedo", JSON.stringify(listContacts));
  }, [listContacts]);


  function addContact(data: DataForm) {
    setListContacts((prevList) => [...prevList, data]);
  };

  function updateContact(data: DataForm) {
    setListContacts((prevList) => prevList.filter((contact) => contact.id !== data.id));
    setListContacts((prevList) => [...prevList, data]);
  };

  function removeContact(id: string) {
    setListContacts((prevList) => prevList.filter((contact) => contact.id !== id));
  };

  return (
    <ContactContext.Provider value={{
      addContact,
      listContacts,
      updateContact,
      removeContact,
      queryCountries
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext);

  return context;
}