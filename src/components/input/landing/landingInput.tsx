type inputProps = {
  title: string;
  name: string;
  required?: boolean;
  type: string;
  pattern?: string;
  autocomplete?: string;
};

const Input = ({
  title,
  name,
  required,
  type,
  pattern,
  autocomplete,
}: inputProps) => {
  return (
    <input
      name={name}
      className="border-b-2 border-azure text-azure placeholder:text-azure outline-0 text-lg pl-2 w-full bg-transparent lg:w-3/6"
      placeholder={title}
      required={required}
      type={type}
      pattern={pattern}
      autoComplete={autocomplete}
    />
  );
};
export default Input;
