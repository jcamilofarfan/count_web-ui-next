
import { useState } from "react";
import Footer from "../Dashboard/Footer";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import { Container, Content, PageContainer } from "./Layout.styles";

type Props = {
    children: React.ReactNode,
}

export default function LayoutDashBoard({children}: Props) {
    const [isOpened, setIsOpened] = useState(false);
    const toggleDrawer = () => {
        setIsOpened((prev) => !prev);
    }
    return (
        <>
            <Container>
                <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
                    <Content>
                        <Sidebar isOpened={isOpened} />
                        <PageContainer>{children}</PageContainer>
                    </Content>
                <Footer />
            </Container>
        </>
    )
}