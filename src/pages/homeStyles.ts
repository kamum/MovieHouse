import styled from "styled-components";

export const Main = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

`;

export const Section = styled.section`
    background: var(--gray-500);
    
    border-radius: 0.25rem;
    margin-bottom: 2rem;

    position: relative;
    overflow: hidden;

        
`;

export const Panel = styled.div`
    padding: 1rem;
    text-align: center;

    img {
        cursor: pointer;
    }

`;

export const InfoBox = styled.div`
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        max-width: 200px;

        strong {
            font-size: 1.1rem;
        }
    }
    span {
        background: var(--background);
        color: #71bf50;
        font-weight: 800;
        padding: .5rem;
        border-radius: .5rem;
    }
`;

export const Overview = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    border-radius: .5rem .5rem 0 0 ;
    padding: 1rem;
    max-height: 100%;
    max-width: 400px;
    transform: translateY(200%);
    transition: transform 0.9s ease-in;

    Section:hover & {
        transform: translateY(0)
    }
`;

export const ResumeBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`;