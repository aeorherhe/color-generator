/* eslint-disable react/prop-types */

export const Form = ({ displayColors, colorInput, setColorInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    displayColors(colorInput);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="color"
        className="color-input"
        value={colorInput}
        onChange={(e) => setColorInput(e.target.value)}
      />
      <input
        type="text"
        name="color-code"
        id="color-code"
        maxLength={7}
        placeholder="#974785"
        value={colorInput}
        onChange={(e) => setColorInput(e.target.value)}
      />
      <button type="submit" className="btn" style={{ background: colorInput }}>
        generate
      </button>
    </form>
  );
};
