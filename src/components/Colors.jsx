/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Colors = ({ colors }) => {
  return (
    <section className="colors-ctn">
      {colors.map((color, index) => {
        // console.log(color);
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default Colors;

const SingleColor = ({ color, index }) => {
  const { weight, hex } = color;
  //   console.log(hex);
  //   console.log(index);

  const saveToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success(`#${hex} copied to clipboard`);
    } catch (error) {
      toast.error(`Error copying to clipboard`);
    }
  };

  return (
    <div
      className="color"
      style={{
        backgroundColor: `#${hex}`,
        color: index > 10 ? "white" : "black",
      }}
      onClick={saveToClipboard}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </div>
  );
};
