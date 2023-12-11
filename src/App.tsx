import { HorizFlex } from './containers/HorizFlex';
import { VertFlex } from './containers/VertFlex';
import { VelmaMode, useModeContext } from './VelmaCompound'

function App() {
    const {
        perscription,
        setPerscription,
        setIsActive
    } = useModeContext();

    return (
		<>
            <button onClick={() => { console.log(setPerscription) }}>BUTOON TO PRINT</button>
            {!setPerscription ? null :
                (
                    <>
                        <HorizFlex>
                            <p>Perscription</p>
                            <hr/>
                            <p>{perscription}</p>
                        </HorizFlex>
                        <VertFlex>
                                <button
                                    onClick={() => { setPerscription(perscription + 1) }}
                                >Increase</button>
                                <button
                                    onClick={() => { setPerscription(perscription - 1) }}
                                >Decrease</button>
                        </VertFlex>
                    </>
                )
			}


                        {!setIsActive ? null :
                            (
                                <>
                                    <p>Enable VelmaMode</p>
                                    <VertFlex>
                                        <button
                                            onClick={() => { setIsActive(true) }}
                                        >Enable</button>
                                        <button
                                            onClick={() => { setIsActive(false) }}
                                        >Disable</button>
                                    </VertFlex>
                                </>
                            )
                        }

                        <div className="App">
                            <VelmaMode>
                                <p>
                                    Text you can't see
                                </p>
                            </VelmaMode>
                        </div>
                    </>

                )
            }

            export default App
