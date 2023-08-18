import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Colors from "./components/Colors";
import { Form } from "./components/Form";
import Values from "values.js";
import DefaultTitle from "./components/subs/DefaultTitle";

function App() {
  const [colors, setColors] = useState(new Values("#974785").all(10));
  const [colorInput, setColorInput] = useState("");

  console.log(colors[0]);

  const displayColors = (color) => {
    try {
      // let newColors = new Values(color).all(10);
      // setColors(newColors);
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error("Invalid Color");
    }
  };

  return (
    <main className="main">
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        limit={5}
      />
      <DefaultTitle title={"color generator"} colorInput={colorInput} />
      <Form
        displayColors={displayColors}
        colorInput={colorInput}
        setColorInput={setColorInput}
      />
      <Colors colors={colors} />
    </main>
  );
}

export default App;
