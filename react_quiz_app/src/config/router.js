import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import Admin from "../screens/admin";

export default function AppRouter () {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="/" element={<Admin />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}