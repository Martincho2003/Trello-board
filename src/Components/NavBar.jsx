import { Navbar, Container, Nav} from 'react-bootstrap';
import { AddBoard } from './AddBoard';


export function NavBar({ appState, setAppState}) {

  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Trello</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboards">Dashboards</Nav.Link>
              <Nav.Link href="/recents">Recently addded tasks</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <AddBoard appState={appState} setAppState={setAppState} />
      </Container>
    </Navbar>
  )
}