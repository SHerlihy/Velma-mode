import { ReactElement } from "react"
import {horizflex} from "./horizflex.module.css"

export const HorizFlex = ({children, classes}: {children: ReactElement[], classes?: string}) => {
    const allClassNames = `${horizflex} ${classes}`

    return (
    <div className={allClassNames}>
            {children}
    </div>
    )
}
