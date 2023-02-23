import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from '../hooks/useForm'

const FormInputStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    .alternative{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    input{
        padding-block: 9px;
        padding-inline-start: 1.25rem;
        background: #e8e8e8;
        border: 0;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

`

function FormInput() {

    const {formState, onInputChange} = useForm({
        search: ''
    })

    const navigate = useNavigate()

    const onSearch = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
    }

    const {search} = formState

    return (
        <FormInputStyled>
            <Link to='/'><button className='buttonStyle'><span className="material-symbols-outlined">home</span></button></Link>
            <form onSubmit={onSearch}>

                <input type="search" placeholder='Buscar...' name='search' value={search} onChange={onInputChange} />

                <button type="submit" className='buttonStyle alternative'>Buscar</button>
            </form>
            <Link to='/create'><button className='buttonStyle'>Crear Post +</button></Link>
        </FormInputStyled>
    )
}

export default FormInput
