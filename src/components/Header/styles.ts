import styled from 'styled-components';

export const Container = styled.header`
    background: black;
`;

export const Logo = styled.a`
    font-family: 'Audiowide', cursive;
    font-size: x-large;
    color: #f4c844;

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const Navbar = styled.nav`

    ul {
        display: flex;
        gap: 1rem;

        li {

            a {
                font-size: 1rem;
                color: var(--text-title)
            }

            &:hover{
                color: #f4c844;
            }
            
        }
    }

`;

export const Search = styled.div`
    width: 200px;
    background: var(--gray-500);
    border-radius: 100px;
    padding: .4rem;
    

    input {
        margin: auto 0.2rem;
        color: white;
        border: none;
        background: inherit;
        outline: none;

    }
    input::placeholder {
        color: white;
    }

`;