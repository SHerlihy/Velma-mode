import './App.css'
import {VelmaMode, useModeContext} from './VelmaCompound'

function App() {
	const {
        perscription, 
        setPerscription,
        setIsActive
    } = useModeContext();

	return (
		<>
			<button onClick={()=>{console.log(setPerscription)}}>BUTOON TO PRINT</button>
			{!setPerscription ? null :
				(<>
					<button 
                        onClick={()=>{setPerscription(perscription+1)}}
                    >Increase</button>
					<button 
                        onClick={()=>{setPerscription(perscription-1)}}
                    >Decrease</button>
				</>)
			}


			{!setIsActive ? null :
				(<>
					<button 
                        onClick={()=>{setIsActive(true)}}
                    >Increase</button>
					<button 
                        onClick={()=>{setIsActive(false)}}
                    >Decrease</button>
				</>)
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
