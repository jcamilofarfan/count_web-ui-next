import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    max-height: 100vh;
    @media screen and (min-width: 40em){
        padding: 25px 65px;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.main};
    COLOR: ${(props) => props.theme.colors.secondary};
    box-shadow: 15px 15px 55px rgb(0 0 0);
    backdrop-filter: blur(14px);
    border-radius: 40px;
    @media screen and (min-width: 64em){
        flex-direction: row;
    }
`

export const Left = styled.div`
    width: 95%;
    @media screen and (min-width: 40em) and (max-width: 63.9em){
        width: 50%;
    }
    @media screen and (min-width: 64em){
        display: inline;
        width: 50%;
    }
`

export const Padding = styled.div`
    margin: 0 auto;
    line-height: 210px;
    display: flex;
    @media screen and (min-width: 64em){
        width: 70%;
        height: 70%;
        border-radius: 50%;
        margin: 0 auto;
        line-height: 210px;
        position: relative;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    max-width: 100%;
    width: 50%;
    margin: auto;
    @media screen and (min-width: 40em) and (max-width: 63.9em){
        width: 90%;
    }
    @media screen and (min-width: 64em){
        border-radius: 50%;
        max-width: 100%;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
`

export const Right = styled.div`
width: 90%;
@media screen and (min-width: 40em) and (max-width: 63.9em){
    width: 80%;
}
@media screen and (min-width: 64em){
    width: 50%;
}
`
