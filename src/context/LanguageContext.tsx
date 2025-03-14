import React, {createContext, useContext, useState} from "react";
//Define the type for content
type LanguageContextProp={
    language: "en"| "uz";
    toggleLanguage:()=>void;

};

// Create content with default values
export const LanguageContext = createContext<LanguageContextProp|undefined>(undefined)

//Language Provider Component
export const LanguageProvider: React.FC<{children:React.ReactNode}>= ({children})=>{
    const [language,setLanguage] = useState<"en"|"uz">("en");

    const toggleLanguage = ()=>{
        setLanguage((prev)=>( prev ==="en"? "uz" : "en"));
    };

    return(
        <LanguageContext.Provider value={{language,toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use LanguageContext
export const useLanguageContext =()=>{
    const context = useContext(LanguageContext);
    if(!context) throw new Error("useLanguageContext must be used within a LanguageProvider");
    return context;
}