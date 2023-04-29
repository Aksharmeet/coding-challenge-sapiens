import {gql} from '@apollo/client';

export const CREATE_LEADS = gql`
mutation (
  $name: String!
  $email: String!
  $source: ENUM_LEAD_SOURCE!
  $status: ENUM_LEAD_STATUS!
  $date: Date!
  $time: Time!
  $notes: String!
) {
    createLead(
      data: {
        Name: $name
        email: $email
        Source: $source
        Status:$status
        date: $date
        Time: $time
        Notes: $notes
      }
    ) {
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
        }
      }
    }
  }
`

export const SPECIFIC_LEAD = gql`
query ($id: ID!) {
  lead(id: $id) {
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
      }
    }
  }
}
`

export const UPDATE_LEAD = gql`
mutation (
  $id: ID!
  $name: String!
  $email: String!
  $source: ENUM_LEAD_SOURCE!
  $status: ENUM_LEAD_STATUS!
  $date: Date!
  $time: Time!
  $notes: String!
) {
  updateLead(
    id: $id
    data: {
      Name: $name
      email: $email
      Source: $source
      Status:$status
      date: $date
      Time: $time
      Notes: $notes
    }
  ) {
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
      }
    }
  }
}
`