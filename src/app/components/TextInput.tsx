type TextInputProps = {
  onChange?: () => void;
};

function TextInput({ onChange }: TextInputProps) {
  return (
    <input
      onChange={onChange}
      type="text"
      className="border bg-[#ffffff] rounded-md"
    />
  );
}

export default TextInput;
