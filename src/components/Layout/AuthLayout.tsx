import { LayoutProps } from "../../types/LayoutProps";
import { Container, Content } from "./Layout.styles";

export default function LayoutDashBoard({children}: LayoutProps) {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    )
}