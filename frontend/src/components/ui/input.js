export function Input({ type, name, value, onChange, required, min }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      className="border rounded px-2 py-1 w-full"
    />
  );
}
