import { ReactElement } from "react"

export const VertFlex = ({children, givenClassNames}: {children: ReactElement[], givenClassNames?: string}) => {
    const allClassNames = `vertflex ${givenClassNames}`

    return (
    <div className={allClassNames}>
            {children}
    </div>
    )
}
