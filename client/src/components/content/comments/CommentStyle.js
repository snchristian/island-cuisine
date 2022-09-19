import styled from "styled-components";

export const CommentContainter = styled.div`

.line{
    height:2px;
    background: grey;
}

`

export const Wrapper = styled.div`
    color: black;

    .comment-form{
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .commentlist{
        background:white;
        list-style: none;
        margin: 0 0 20px 0;
        > li {
          margin: 0 0 20px 0;
          padding: 10px;
        }
    }

`

export const Form = styled.form`

textarea{
    display:block;
    max-width: 100%;
    box-sizing:border-box;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1rem;
    border: 1px soild grey;
    border-radius: 0 

}


.submit{
    display: inline-block;
    margin: 0 0 1rem;
    padding: 0.85em 2em;
    font-size .9rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: RoyalBlue;
    color:white;



}
`

export const User = styled.div`
    display: flex;
    align-items: center;
    

    .avatar{
        width:40px;
        margin-right:10px;
    }

    .username{
        margin-right: 5px;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom:0;
    }

    .icons{
        display: list-item;
    }  
    
    .text{
    background: white;
    color: #222;
    padding: 20px;
    }

    .fontawesomepen{
        margin-left:7px;
        margin-right: 14px;
        &:hover {
          color: #1468a0;
          cursor: pointer;
        }
    }

    .fontawesometrash{
        &:hover {
            color: #ef4135;
            cursor: pointer;
          }
    }

    
`

export const CommentBody = styled.div`
.comment-body{
    margin-left:4rem;
    }
`