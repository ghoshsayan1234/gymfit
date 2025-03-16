import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from './Root.module.css';
import Card from "../components/Card";

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
        </>
    )
}

export default RootLayout;