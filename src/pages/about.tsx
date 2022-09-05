import { NextPageWhithLayout } from "../types/NextPageWhithLayout";

const About:NextPageWhithLayout = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        </div>
    );
}
About.layout = "Dashboard"
export default About;