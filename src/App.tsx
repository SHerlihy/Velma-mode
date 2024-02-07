import { HorizFlex } from './containers/HorizFlex';
import { VertFlex } from './containers/VertFlex';
import { VelmaMode, useModeContext } from './velmaWrapper/VelmaCompound'

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
            <VertFlex classes="fill_dimensions-row">
            <HorizFlex classes="horiz_flex-space_around">
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

            <HorizFlex classes='horiz_flex-space_around'>
            </HorizFlex>
                <VelmaMode>
                    <p>
                        Text you can't see
                    </p>
                </VelmaMode>
                <VelmaMode>
                    <p>
                        Text you can't see 2 
                    </p>
                </VelmaMode>
                <VelmaMode>
                    <p>
                        Text you can't see 3
                    </p>
                </VelmaMode>
            </VertFlex>
        </main>

    )
}

export default App
