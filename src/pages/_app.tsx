import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import LayoutDashboard from "../components/Layout/DashboardLayout";
import LayoutDefault from "../components/Layout/DefaultLayout";
import LayoutAuth from "../components/Layout/AuthLayout";
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import type { NextComponentType } from 'next'


type CustomAppProps = AppProps & { Component: NextComponentType & {layout: string}}


const layouts:any ={
  Dashboard: LayoutDashboard,
  Default: LayoutDefault,
  Auth: LayoutAuth
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = layouts[Component.layout] || layouts.Default;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>
  )
}

export default MyApp
