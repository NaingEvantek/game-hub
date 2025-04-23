import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Click with Children
      </Button>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Numbers"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
