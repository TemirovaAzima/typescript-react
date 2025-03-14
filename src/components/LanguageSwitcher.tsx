import React from 'react'
import {useLanguageContext} from "../context/LanguageContext.tsx";

const LanguageSwitcher: React.FC = () => {
   const  {language, toggleLanguage} = useLanguageContext()
    return (
         <button onClick={toggleLanguage} className="language-btn">
             {language === "en" ? "Switch to Uzbek" : "Ingliz tiliga o'tish" }
         </button>
    )
}
export default LanguageSwitcher
