// import { useState } from "react";
import { Container, Content, PageContainer } from "./Layout.styles";

type Props = {
    children: React.ReactNode,
}

export default function LayoutDashBoard({children}: Props) {
    // const [isOpened, setIsOpened] = useState(false);
    // const toggleDrawer = () => {
    //     setIsOpened((prev) => !prev);
    // }
    return (
        <>
            <Container>
                    <Content>
                        {/* <PageContainer> */}
                            {children}
                            {/* </PageContainer> */}
                    </Content>
            </Container>
        </>
    )
}