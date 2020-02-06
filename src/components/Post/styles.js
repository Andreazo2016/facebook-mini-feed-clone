import styled from 'styled-components';

export const Container = styled.div`
    height:100%;
`;

export const CommentList = styled.ul`
    
    max-width:700px;
    margin: 30px auto 0;
    list-style:none;

    li{
        padding:50px;
        margin-bottom:10px; 
        background:#fff;
        border-radius:10px;

        div#user-info{
            display:flex;
            align-items:center;

            img{
                margin-right:5px;
            }


            div{
                strong{
                    font-size:16px;
                    color:#333;
                    display:block;
                }
                > span{
                    font-size:12px;
                    color:#999;
                }
            }
        }

        > p{
            margin: 20px 0;
            border-bottom: 1px solid #eee;
            padding-bottom:20px;
        }
    }

`;

export const CommentArea = styled.div`

    display:flex;
    align-items:start;

    img{
        margin-right:5px;
    }

    p{
        background:#EEEEEE;
        border-radius:20px;
        padding:20px;
        text-align:left;

        span{
            font-size:16px;
            font-weight:bold;
            margin-right:5px;
        }
    }

`
