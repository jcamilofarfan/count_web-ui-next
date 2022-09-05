import { NextPage } from "next";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import Container from "../../../components/Dashboard/Container/index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

const IndexDashBoard:NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <DashboardLayout>
                <Container title="Dashboard">
                    <p>Orders</p>
                </Container>
            </DashboardLayout>
        </ThemeProvider>
    )
}

export default IndexDashBoard;