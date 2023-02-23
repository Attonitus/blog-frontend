import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { GlobalUrl } from '../helpers/GlobalUrl'
import { useState } from 'react'

const CreateEditPageStyled = styled.div`
    max-inline-size: 50rem;
    margin-inline: auto;
    margin-block-start: 1rem;
    -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    border-radius: .5rem;
    padding: 1rem;
    background-color: #A61F69;
    .titles {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input{
        padding-block: .5rem;
        padding-inline: 1rem;
    }
    textarea{
        padding-block: .5rem;
        padding-inline: 1rem;
        font-family: sans-serif;
        resize: none;
    }
`

function CreateEditPage() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const {formState, onInputChange} = useForm({
        title: '',
        description: '',
        image: ''
    })

    const saveArticle = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const image = document.querySelector("#image").files[0]
            const data = new FormData()

            data.append("image", image)
            data.append("title", formState.title)
            data.append("description", formState.description)


            const response = await fetch(GlobalUrl.url, {
                method: 'POST',
                body: data
            })
    
            await response.json()
            setLoading(false)
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }

    }

    const {title, description, image} = formState

    return (
        <CreateEditPageStyled>
            <div className="titles">
                <h3>Llene los datos solicitados</h3>
                <Link to="/"><button className="buttonStyle"><span className="material-symbols-outlined">home</span></button></Link>
            </div>
            <form onSubmit={saveArticle}>
                <label htmlFor="title">Titulo:</label>
                <input type="text" name='title' placeholder='Titulo del post' value={title} onChange={onInputChange}/>
                <label htmlFor="description">Descripción (Opcional):</label>
                <textarea type="text" name='description' rows="4" placeholder='Descripción del post' value={description} onChange={onInputChange} />
                <label htmlFor="image">Imagen (Opcional):</label>
                <input type="file" name='image' id='image' value={image} onChange={onInputChange}/>
                {
                    loading ? <h4>Cargando...</h4> : null
                }
                <button className='buttonStyle' type="submit">Guardar</button>
            </form>
        </CreateEditPageStyled>
    )
}

export default CreateEditPage
