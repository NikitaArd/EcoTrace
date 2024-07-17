import { Outlet } from "react-router-dom";
import GoHomeButton from "../components/GoHomeButton";


export default function RootLayoutWithHomeButton(){
    return (
        <main className="bg-green-50">
            <Outlet />
            <GoHomeButton />
        </main>
        
    );
}