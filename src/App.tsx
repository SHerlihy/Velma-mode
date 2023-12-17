import { HorizFlex } from './containers/HorizFlex';
import { VertFlex } from './containers/VertFlex';
import { VelmaMode, useModeContext } from './VelmaCompound'

function App() {
    const {
        perscription,
        isActive,
        setPerscription,
        setIsActive
    } = useModeContext();

    if (!setPerscription || !setIsActive) {
        return (

            <div className="App">
                <VelmaMode>
                    <p>
                        Text you can't see
                    </p>
                </VelmaMode>
            </div>
        )
    }

    return (
        <main className="App">
            <VertFlex givenClassNames="fill_dimensions-row">
            <HorizFlex givenClassNames="horiz_flex-space_around">
                <>
                    <HorizFlex>
                        <p>Perscription: {perscription}</p>
                        <></>
                    </HorizFlex>
                    <HorizFlex>
                        <button
                            onClick={() => { setPerscription(perscription + 1) }}
                        >Increase</button>
                        <button
                            onClick={() => { setPerscription(perscription - 1) }}
                        >Decrease</button>
                    </HorizFlex>
                </>


                <>
                    <p>VelmaMode: {isActive ? "Enabled" : "Disabled"}</p>
                    <HorizFlex>
                        <button
                            onClick={() => { setIsActive(true) }}
                        >Enable</button>
                        <button
                            onClick={() => { setIsActive(false) }}
                        >Disable</button>
                    </HorizFlex>
                </>
            </HorizFlex>

            <HorizFlex givenClassNames='horiz_flex-space_around'>
                    <></>
            <VelmaMode>
                <p>
                    Text you can't see
                </p>
            </VelmaMode>
            </HorizFlex>
            </VertFlex>
        </main>

    )
}

export default App
