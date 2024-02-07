import { ReactElement } from "react"
import {vertflex} from "./vertflex.module.css"

export const VertFlex = ({children, classes}: {children: ReactElement[], classes?: string}) => {
    const allClassNames = `${vertflex} ${classes}`

    return (
    <div className={allClassNames}>
            {children}
    </div>
    )
}
