import { createContext, useContext, useState, ReactElement, useEffect } from "react";
import { HorizFlex } from "../containers/HorizFlex";
import {container, modeButtons} from "./velmaCompound.module.css"

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
    classes?: string;
}

export const VelmaMode = ({ children, classes }: IVelmaModeProps) => {
   const {
        isActive,
        perscription,
        setPerscription
    } = useModeContext();

    const [localActive, setLocalActive] = useState(false)
    const [localMod, setLocalMod] = useState(1)

    const minusMod = () =>{
        if (!localActive) {
            return
        }
        
        setLocalMod((prev)=>prev-1)
        setPerscription!(localMod-1)
    }

    const plusMod = () =>{
        if (!localActive) {
            return
        }
        
        setLocalMod((prev)=>prev+1)
        setPerscription!(localMod+1)
    }

    const toggleActive=()=>{
        if (!isActive) {
            return
        }
        
        setLocalActive((prev)=>!prev)
    }

    useEffect(()=>{
        if (localActive) {
            setLocalMod(perscription)
        }
    }, [localActive])

    useEffect(()=>{
        if (!isActive) {
            setLocalActive(false)
        }
    }, [isActive])

    const propClasses = `${container} ${classes}`

    return (
        <div className={propClasses}>
            {isActive &&
            <HorizFlex classes={modeButtons}>
                <button onClick={toggleActive}>I/O</button>
                <button onClick={minusMod}>-</button>
                <button onClick={plusMod}>+</button>
            </HorizFlex>
            }
            {!localActive ?
                children :
                <EnhancedText perscription={localMod}>
                    {children}
                </EnhancedText>
            }
        </div>
    )
}
