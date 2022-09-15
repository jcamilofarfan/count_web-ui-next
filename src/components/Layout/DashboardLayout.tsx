
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import * as storeMemoryService from "../../services/storeMemory.Service";
import { MEMORY_KEYS } from "../../utils/enums/memory-keys";
import Footer from "../Dashboard/Footer";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import { Container, Content, PageContainer, Loading ,ContainerLoader} from "./Layout.styles";
import { LayoutProps } from "../../types/LayoutProps";

export default function LayoutDashBoard({children}: LayoutProps) {
    const [loading, setLoading] = useState(true)
    const [isOpened, setIsOpened] = useState(false);
    const router = useRouter()
    const secretKey = "990740ffef4569f75894c351750ce084179d8ceeb86fe68227ea0216f6d241f2"

    useEffect( ()=>{
        const token = storeMemoryService.getLocalItemByKey(MEMORY_KEYS.TOKEN);
        if(!token){
            router.push("/auth")
        }
        const decodeJwt = async () =>{
            try {
                await jwt.verify(token, secretKey)
                setLoading(false)
            } catch (error) {
                storeMemoryService.removeItemLocalItemByKey(MEMORY_KEYS.TOKEN)
                router.push("/auth")
            }
        }
        decodeJwt();
    }, [loading, router])
    const toggleDrawer = () => {
        if(!loading){
            setIsOpened((prev) => !prev);
        }
    }

    return (
        <Container>
            <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
                {loading ? (
                    <ContainerLoader>
                        <Loading>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Loading>
                    </ContainerLoader>
                ) : (
                    <>
                        <Content>
                            <Sidebar isOpened={isOpened} />
                            <PageContainer>
                                {children}
                            </PageContainer>
                        </Content>
                    </>
                )}
            <Footer />
        </Container>
    )
}