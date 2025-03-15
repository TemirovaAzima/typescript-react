import React from "react";

const Copy: React.FC = () => {
    const copyRights = (event: React.ClipboardEvent<HTMLParagraphElement>) => {
        event.preventDefault();
        console.log("Text ko‘chirish mumkin emas");
    };

    return (
        <p onCopy={copyRights}>
            Viris purus graeco omittam adolescens movet maximus oporteat viverra efficiantur instructior sententiae
            posidonium appareat quam pertinax sonet suas maximus alienum penatibus numquam unum congue posidonium
            molestiae urna consectetur salutatus quidam.
        </p>
    );
};

export const App: React.FC = () => {
    return (
        <section>
            <Copy />
        </section>
    );
};

export default App;
