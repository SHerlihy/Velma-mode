import { ReactElement } from "react"

export const HorizFlex = ({children, givenClassNames}: {children: ReactElement[], givenClassNames?: string}) => {
    const allClassNames = `horizflex ${givenClassNames}`

    return (
    <div className={allClassNames}>
            {children}
    </div>
    )
}
