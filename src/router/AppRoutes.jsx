import { Route, Routes } from "react-router-dom";
import SplashScreen from "../pages/SplashPage";
import MainScreen from "../pages/MainScreen";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/main" element={<MainScreen/>}/>
        </Routes>
    )
    
}

export default AppRoutes;