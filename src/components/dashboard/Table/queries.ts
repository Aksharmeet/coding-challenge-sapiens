import {gql} from '@apollo/client';

export const DELETE_LEAD = gql`
mutation ($id: ID!) {
    deleteLead(id: $id) {
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
`;

