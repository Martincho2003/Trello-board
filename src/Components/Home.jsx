export function Home() {

  return(
    <div>
      <div className="menu" style={{display: "flex", width: "100%"}}>
        <h2>Trello</h2>
        <a href="/dashboards">Dashboards</a>
        <a href="/recents">Recently addded tasks</a>
        <button>Add dashboard</button>
      </div>
    </div>
  )
}