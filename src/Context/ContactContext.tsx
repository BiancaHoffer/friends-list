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
}

export const ContactContext = createContext({} as AuthContextProps);

const GET_COUNTRIES = gql`
  {
    countries(
      page: { first: 5, after: "eyJjdXJzb3IiOjE1Mn0" }
    ) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          iso2
          
          states (page: { first: 5 }) {
            edges {
              node {
                id
                name
                state_code
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

const GET_CITIES = gql`
  {
    state(
      locationCode: { country_code: "NR",  state_code: "01"}) {
      # State Fields
      id
      name
      country_id
      cities(page: { first: 8 }) {
        totalCount
        edges {
          cursor
          node {
            id
            name
            state_id
            state_code
          }
        }
      }
      # ...
    }
  }
`;




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

export function useCreateContact() {
  const context = useContext(ContactContext);

  return context;
}