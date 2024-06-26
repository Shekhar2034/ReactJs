import { useContext } from "react";
import { AuthContext } from "./context/auth.context";


function Home(){
    
   const{state} = useContext(AuthContext);
    return(
        <div>Home : {state?.user?.name}</div>
    )
}

export default Home;