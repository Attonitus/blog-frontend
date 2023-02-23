import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalUrl } from '../helpers/GlobalUrl'
import { useFetch } from '../hooks/useFetch'

const ArticlePageStyled = styled.div`
    margin: 1rem;
    .page{
        max-inline-size: 50rem;
        margin: auto;
        -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
        -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
        box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
        border-radius: .5rem;
        background-color: #A61F69;
    }
    img{
        inline-size: 100%;
        display: block;
        block-size: 20rem;
        object-fit: cover;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;

    }
    .textPage{
        padding: 1rem;
    }
    h2{
        margin: 0;
        margin-block: .5rem;
    }
    .buttonPage{
        display: flex;
        justify-content: space-evenly;
    }
    p{
        line-height: 1.5rem;
    }
`

function ArticlePage() {
    const params = useParams()
    const navigate = useNavigate()
    
    const [articulo, setArticulo] = useState([])

    const getArticles = async() => {
      const arti = await useFetch(`${GlobalUrl.url}${params.id}`)
      setArticulo(arti)
    }

    const deleteArticle = async() => {
        const response = await fetch(`${GlobalUrl.url}${params.id}`, {
            method: 'delete'
        })

        const json = await response.json()
        console.log(json)

        navigate('/')
    }
  
    useEffect(()=> {
      getArticles()
    }, [])


    return (
        <ArticlePageStyled>
            <div className="page">
                {
                    !articulo.image ? null : (
                        <div className="imgPage">
                            <img src={articulo.image.url} alt={articulo.title} />
                        </div>
                    )
                }
                <div className="textPage">
                    <h2>{articulo.title}</h2>
                    <p>{articulo.description}</p>
                    <div className="buttonPage">
                        <Link to="/"><button className="buttonStyle"><span className="material-symbols-outlined">home</span></button></Link>
                        <button onClick={deleteArticle} className="buttonStyleDelete"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            </div>
        </ArticlePageStyled>
    )
}

export default ArticlePage
