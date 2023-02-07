const Input = ({ ...props }) => {
  const { type, id, placeholder, className, value, onChange, htmlFor } = props;
  return (
    <>
      <label htmlFor={id}>{htmlFor}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`outline-sky-400 ${className}`}
      />
    </>
  );
};

export default Input;
