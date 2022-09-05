import { NextPage } from "next";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import Container from "../../../components/Dashboard/Container/index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { useRouter } from "next/router";
import { get } from "../data";

const IndexDashBoard:NextPage = () => {

    const router = useRouter();
    const { asPath } = router;
    const section = asPath.split("/")[2]
    const info = get(section);

    return (
        <ThemeProvider theme={theme}>
            <DashboardLayout>
                <Container title="Dashboard">
                    <p dangerouslySetInnerHTML={{ __html: info }}/>
                </Container>
            </DashboardLayout>
        </ThemeProvider>
    )
}

export default IndexDashBoard;