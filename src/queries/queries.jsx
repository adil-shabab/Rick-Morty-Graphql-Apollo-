import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
    query getCharacters($page : Int!, $filter: FilterCharacter){
        characters(page: $page, filter: $filter){
            results {
                id
                name
                image
                species
                gender
            }
            info{
                count
                pages
                next
                prev
            }
        }
    }
`;