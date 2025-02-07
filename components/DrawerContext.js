import { createContext, useContext } from "react";

//create context
const DrawerContext = createContext();

// hook to use the context
export const useDrawer = () => useContext(DrawerContext);

// provider component to wrap your drawer navigator
export const DrawerProvider = ({children, navigation}) =>{
    
    return(
        <DrawerContext.Provider value={{openDrawer : navigation.openDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}