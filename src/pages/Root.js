import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from './Root.module.css';
import Card from "../components/Card";
import Footer from "../components/Footer";
import MovingLine from "../components/MovingLine";
import MainFooter from "../components/MainFooter";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
            <Outlet />
            </main>
            <Card />
            <Card />
            <Card />
            <MovingLine />
            <Footer />
            <MainFooter />
        </>
    )
}

export default RootLayout;