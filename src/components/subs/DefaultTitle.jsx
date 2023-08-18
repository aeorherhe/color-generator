/* eslint-disable react/prop-types */
const DefaultTitle = ({ title, colorInput }) => {
  return (
    <>
      <h1 className="default-title">{title || "Default Title"}</h1>
      <div className="title-underline" style={{ background: colorInput }}></div>
    </>
  );
};
export default DefaultTitle;
