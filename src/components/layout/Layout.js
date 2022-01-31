import "./Layout.scss";
import {MainNav} from "./MainNav";

export const Layout = ({children}) => {

    return (
        <div >
            <MainNav />
            <main className={"main"}>
                {children}
            </main>
        </div>
    )
}