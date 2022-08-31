import styled from "styled-components";

export const SingleRecipePage = styled.div`
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    padding-top: 2rem;
    min-height: calc(100vh - (6rem + 4rem));
`

export const Containter = styled.div`

    background: #f8fafc;
    font-weight: 400;
    line-height: 1.75;
    font-size:100%;


    p {
        margin-top: 0;
        margin-bottom: 1.5rem;
        max-width: 40em;
    }

    h2 {
        font-size: 2.441rem;
      }

    h4 {
        font-size: 1.563rem;
      }

    h5 {
        margin: 0;
        margin-bottom: 1.38rem;
        font-weight: 400;
        line-height: 1.3;
        text-transform: capitalize;
        letter-spacing:  1px;
      }

`

export const Wrapper =styled.section`
    display:grid;
    grid-template-columns: 4fr 5fr;
    gap: 3rem;
    align-items: center;

`

export const Image = styled.img`
    height:300px;
    object-fit:cover;
    border-radius:0.25rem;
    
    
`
export const Icon = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:1rem;
margin: 2rem 0;
text-align: center;

    .fontawesome{
        font-size:1.5rem;
        color:blue;
    }

    h5,p{
        margin-bottom:0;
        font-size:0.85em;
    }

`

export const RecipeContent = styled.div`
padding; 3rem 0;
display: grid;
gap: 2rem 5rem;
grid-template-columns: 2fr 1fr;

`

export const Instructions =styled.div`


.header{
    display:grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
}

.line{
    height:2px;
    background: grey;
}

.step{
    text-transform:uppercase;
    font-weight:600;
    margin-bottom:0;
    color:blue;

}

.instructions{
    color: #334155;
}
`

export const Ingredients =styled.div`

`

export const Comment = styled.div `

`