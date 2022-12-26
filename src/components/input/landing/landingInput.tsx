import { FC } from "react";

 type props= {
    title: string;
    name: string;
    required?: boolean;
    type:string;
}

const Input: FC<props> = ({ title,name,required,type }) => {
    return (
        <input
            name={name}
            className="border-b-2 border-azure text-azure placeholder:text-azure outline-0 text-lg pl-2 w-full"
            placeholder={title}
            required={required}
            type={type}
            autoComplete="new-password"
      />
    );
}
export default Input;