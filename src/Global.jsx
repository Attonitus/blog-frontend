import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        font-family: sans-serif;
        background-color: #400E32;
        color: white;
    }
    
    .buttonStyle{
        background: #f8c040;
        background: linear-gradient(90deg, rgba(248,192,64,1) 5%, rgba(222,138,40,1) 96%);
        font-weight: 600;
        color: white;
        padding: 0;
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: 1rem;
        border: 1px solid #f8c040;
        a{
            color: white;
            text-decoration: none;
        }
    }

    .buttonStyle:hover{
        background: white;
        border: 1px solid #f8c040;
        color: #f8c040;
        transition: .2s ease-in-out;
        cursor: pointer;
        a{
            color: #f8c040;
            transition: .2s ease-in-out;
        }
    }

    .buttonStyleDelete{
        background: #fb3d3d;
        background: linear-gradient(90deg, #f66262 5%, #f62222 96%);
        font-weight: 600;
        color: white;
        padding: 0;
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: 1rem;
        border: 1px solid #fb3d3d;
        a{
            color: white;
            text-decoration: none;
        }
    }

    .buttonStyleDelete:hover{
        background: white;
        border: 1px solid #fb3d3d;
        color: #fb3d3d;
        transition: .2s ease-in-out;
        cursor: pointer;
        a{
            color: #fb3d3d;
            transition: .2s ease-in-out;
        }
    }
`

export default GlobalStyled
