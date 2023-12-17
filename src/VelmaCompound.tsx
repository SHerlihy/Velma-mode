import { createContext, useContext, useState, ReactElement } from "react";

interface IProvider {
    children: ReactElement;
}

interface IActiveContext {
    isActive: boolean;
    setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPerscriptionContext {
    perscription: number;
    setPerscription?: React.Dispatch<React.SetStateAction<number>>;
};

const ModeContext = createContext<IActiveContext&IPerscriptionContext>({
    perscription:1,
    isActive:true,
})

export const ModeProvider = ({ children }: IProvider) => {
    const [perscription, setPerscription] = useState(1);
    const [isActive, setIsActive] = useState(false);

    return (
        <ModeContext.Provider value={{
            perscription,
            setPerscription,
            isActive,
            setIsActive
        }}>
            {children}
        </ModeContext.Provider>
    );
}

export const useModeContext = () => {
    return useContext(ModeContext)
}

const HighlightableText = ({ children, onMouseEnter, onSelect }: { children: ReactElement, onMouseEnter: () => void; onSelect?: () => void }) => {
    return (
        <button 
            onMouseEnter={onMouseEnter} 
            onClick={onSelect} 
            className="no_button"
        >
            {children}
        </button>
    )
}

const EnhancedText = ({ children, perscription }: { children: ReactElement; perscription: number }) => {

    return (
        <div style={{ fontSize: '1em' }}>
            <div style={{ fontSize: `${perscription}em` }}>
                {children}
            </div>
        </div>
    )
}

interface IVelmaModeProps {
    children: ReactElement;
}

export const VelmaMode = ({ children }: IVelmaModeProps) => {
    const [enhanced, setEnhanced] = useState(false);
    const { isActive, perscription } = useModeContext();

    if (!isActive) {
        return children
    }


    return (
        <HighlightableText 
            // wolud like false on mouse leave
            onMouseEnter={() => { setEnhanced(true) }} 
            onSelect={() => { setEnhanced((prev) => !prev) }}
        >
            {!enhanced ? children :
                <EnhancedText perscription={perscription}>
                    {children}
                </EnhancedText>}
        </HighlightableText>
    )
}
