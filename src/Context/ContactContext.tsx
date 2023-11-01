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
  addContact: (data: DataContact) => void;
  removeContact: (id: string) => void;
  updateContact: (data: DataContact) => void;
  getCountries: any[];
  listContacts: DataContact[];
}

export interface DataContact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  iso2?: string;
  codePhone?: string;
}

export const ContactContext = createContext({} as AuthContextProps);

export function ContactProvider({ children }: AuthProviderProps) {
  const [listContacts, setListContacts] = useState<DataContact[]>(() => {
    const storage = localStorage.getItem('@biancamacedo');

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  });

  //const { data: countries, loading } = useQuery(GET_COUNTRIES);

  const [getCountries, setGetCountries] = useState<any>();

  useEffect(() => {
    localStorage.setItem("@biancamacedo", JSON.stringify(listContacts));

    if (listContacts.length === 0) {
      alert("Nenhum amigo encontrado")
    }
  }, [listContacts]);


  function addContact(data: DataContact) {
    setListContacts((prevList) => [...prevList, data]);
  };

  function updateContact(data: DataContact) {
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
      getCountries,
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext);

  return context;
}