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
                status
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



export const GET_CHARACTER = gql`
    query getCharacter($id: ID!){
        character(id: $id){
            name
            image
            species
            gender
            status
            origin{
                name
            }
            location{
                name
            }
            episode{
                id
                name
            }
        }
    }
`;





export const GET_ALL_EPISODES = gql`
    query getEpisodes($page: Int!, $filter: FilterEpisode){
        episodes(page: $page, filter: $filter){
            results{
                id
                name
                air_date
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }
`;