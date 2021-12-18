import { Container, Content, Logo, Navbar, Search } from "./styles";

import { RiSearchLine} from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Content>
                <Logo href="#">MOVIEHOUSE</Logo>

                <Navbar>
                    <ul>
                        <li>
                            <a href="#">Top Movies</a>
                        </li>
                        <li>
                            <a href="#">Categories</a>
                        </li>
                        <li>
                            <a href="#">New Movies</a>
                        </li>
                    </ul>
                </Navbar>
                <Search as="label">
                   <input placeholder="Search" ></input>
                   <RiSearchLine />
                </Search>
            </Content>
        </Container>
    )
}