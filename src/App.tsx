import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleCloseAlert = () => {
    setAlertVisibility(!alertVisible);
  };
  return (
    <div>
      {alertVisible && <Alert onClose={handleCloseAlert}>My alert</Alert>}
      <Button color="primary" onClick={handleCloseAlert}>
        Click with Children
      </Button>
      {/* 
      <ListGroup
        items={items}
        heading="Numbers"
        onSelectedItem={handleSelectedItem}
      /> */}
    </div>
  );
}

export default App;
