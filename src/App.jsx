import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArticleCard from './components/ArticleCard'
import FormInput from './components/FormInput'
import { GlobalUrl } from './helpers/GlobalUrl'
import { useFetch } from './hooks/useFetch'

const AppStyled = styled.div`
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

function App() {

  const [articulos, setArticulos] = useState([])

  const getArticles = async() => {
    const arti = await useFetch(GlobalUrl.url)
    setArticulos(arti)
  }

  useEffect(()=> {
    getArticles()
  }, [])


  return (
    <AppStyled>
      <div className="search">
        <FormInput />
      </div>
      <div className="cards">
        {
          articulos.length < 1 ? <h1>Cargando...</h1> :
          articulos.map( articulo => <ArticleCard key={articulo._id} {...articulo} />)
        }

      </div>
    </AppStyled>
  )
}

export default App
