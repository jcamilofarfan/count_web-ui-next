/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ContainerProps } from "../../types/ContainerProps";
import styles from "./auth.module.scss";
import { Container, Box, Left, Padding, Image, Right } from './Auth.styles';

const AuthContainer = ({title, children }: ContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nextjs Dashboard Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box>
          <Left>
            <Padding>
              <Image
                src="/img/20944201.jpg"
                alt="Image by vectorjuice"
              />
            </Padding>
          </Left>
          <Right>
            {children}
          </Right>
        </Box>
        <ToastContainer />
      </Container>
    </>
  );
};

export default AuthContainer;
