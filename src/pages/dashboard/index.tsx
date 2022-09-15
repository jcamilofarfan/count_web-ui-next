import { NextPageWhithLayout } from "../../types/NextPageWhithLayout";
import Container from "../../components/Dashboard/Container/index";

const IndexDashBoard:NextPageWhithLayout = () => {
    return (
        <Container title="Dashboard">
            <p>Dashboard</p>
        </Container>
    )
}

IndexDashBoard.layout = "Dashboard"
export default IndexDashBoard;