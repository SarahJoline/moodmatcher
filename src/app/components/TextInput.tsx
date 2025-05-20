type TextInputProps = {
  onChange?: () => void;
};

function TextInput({ onChange }: TextInputProps) {
  return (
    <input
      onChange={onChange}
      type="text"
      className="border bg-[#ffffff] pl-2 max-w-xs rounded-sm w-full py-2"
    />
  );
}

export default TextInput;
