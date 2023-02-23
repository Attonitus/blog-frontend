import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalUrl } from '../helpers/GlobalUrl'
import { useFetch } from '../hooks/useFetch'
import ArticleCard from './ArticleCard'
import FormInput from './FormInput'

const SearchPageStyled = styled.div`
  margin-block: 1rem;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .cards{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`

function SearchPage() {

    const [articulos, setArticulos] = useState([])

    const {search} = useParams()

    const getArticulos = async() => {
        const arti = await useFetch(`${GlobalUrl.url}buscar/${search}`)
        setArticulos(arti)
    }

    useEffect(()=> {
        getArticulos()
    }, [search])


    return (
        <SearchPageStyled>
            <div className="search">
                <FormInput />
            </div>
            <div className="cards">
                {
                articulos.length < 1 ? <h1>No hay resultados para la busqueda :(</h1> :
                articulos.map( articulo => <ArticleCard key={articulo._id} {...articulo} />)
                }
            </div>
        </SearchPageStyled>
    )
}

export default SearchPage
