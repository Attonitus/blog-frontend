import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ArticleCardStyled = styled.div`
    -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.33);
    display: flex;
    flex-direction: column;
    inline-size: 20rem;
    border-radius: 1rem;

    img{
        inline-size: 100%;
        display: block;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;

    }
    .textCard{
        padding: 1rem;
    }
    h3{
        margin: 0;
        margin-block: .75rem;
    }

`

function ArticleCard({title, description, image, _id}) {
    return (
        <ArticleCardStyled>
            {
                !image ? null : (
                    <div className="imgCard">
                        <img src={image.url} alt={title} />
                    </div>
                )
            }

            <div className="textCard">
                <h3>{title}</h3>
                <Link to={`/article/${_id}`}><button className='buttonStyle'>Leer más...</button></Link>
            </div>
        </ArticleCardStyled>
    )
}

export default ArticleCard
