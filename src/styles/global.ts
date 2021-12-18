import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #110f0f;
        --text-body: #ffffff;
        --text-red: #f44336;
        --gray-500: #5e5858;

    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px) {
            // 16 * 0.9375 = 15px
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            // 16 * 0.875 = 14px
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text-body);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;