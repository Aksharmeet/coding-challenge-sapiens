import { gql } from '@apollo/client';

export const GET_LEADS = gql`
query fetchLeads {
  leads {
    data {
      id
      attributes {
        Name
        email
        Source
        Status
        date
        Time
        Notes
        createdAt
        updatedAt
      }
    }
  }
}

`;
