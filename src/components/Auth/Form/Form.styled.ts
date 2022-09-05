import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h3`
    font-size: 50px;
    font-weight: bold;

    text-align: center;
    margin-bottom: 30px;
`

export const FormControl = styled.input`
    margin: -1px;
    width: 75%;
    font-size: 20px;
    background-color: transparent;
    padding: 2rem;
    color: white;
    border-color: ${(props) => props.theme.colors.secondary};
    :nth-child(2) {
        margin-top: 2rem;
        border-radius: 50px 50px 0 0;
    }
    :nth-last-child(2) {
        border-radius: 0 0 50px 50px;
        margin-bottom: 2rem;
    }
`

export const Button= styled.button`
    margin-top: 30px;
    background: ${(props) => props.theme.colors.secondary};
    padding: 0.5rem 2rem;
    border-radius: 50px;
    border: 0;
    font-size: 30px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textDark};
    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.textLight};
    }
    &:disabled{
        background: ${(props) => props.theme.colors.greyBg};
        color: ${(props) => props.theme.colors.textDark};
        border: 2px solid ${(props) => props.theme.colors.greyBg};
        cursor : default;
    }
`