import { Alignment, Button, Navbar } from "@blueprintjs/core";

function Nav() {
  return (
    <Navbar className="bp3-dark">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Routine Planner</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button icon="home" text="Home" />
        <Navbar.Divider />
        <Button icon="grid-view" text="Routine" />
      </Navbar.Group>
    </Navbar>
  );
}

export default Nav;
