import styled from 'styled-components'

export const Background = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GiftListContainer = styled.div`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    /* background: ; */
`

export const GiftTitle = styled.h1`
    margin: 1rem auto;
`
export const InputBoxContainer = styled.form`
    display: flex;
    gap: 1rem;
`
export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid gray;
`
export const Button = styled.button`
    width: 40px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #d10e0e;
    color: white;
`


export const GiftUl = styled.ul`
    /* display: flex;
    flex-direction: column; */
    
`

export const DeleteBtn = styled.button`
    width: 100%;
    background-color: #d10e0e;
    color: white;
    border-radius: 5px;
    border: none;
    height: 30px;
    margin-top: 1rem;
`