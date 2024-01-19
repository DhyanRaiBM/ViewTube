import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//*Creating Global Context :
const GlobalContext =createContext();


//*Custom Hook To Grab The Values Easily :
export const useGlobalContext = () =>{
    return useContext(GlobalContext);
}

//*AppContext Component Which Has App Component As The Child :
export const AppContext = ({ children }) =>{
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [isLoading,setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    const value ={
        isLoading,
        setIsLoading,
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos,
    }

    return (
        //*Wrapping The Children(App Component) in the GlobalContext.Provider
        <GlobalContext.Provider value={value}>
            { children }
        </GlobalContext.Provider>
    )

}