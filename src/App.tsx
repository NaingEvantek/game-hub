import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectedItem = (item: string) => {
    return <Alert>Hello World</Alert>;
  };
  return (
    <div>
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
