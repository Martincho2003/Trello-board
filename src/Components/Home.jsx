import { NavBar } from './NavBar';

export function Home({ appState, setAppState }) {
  
  return (
    <div>
        <NavBar appState={appState} setAppState={setAppState}/>

        <h1 className="wellcome">Wellcome to Our Trello</h1>

    </div>
  )
}