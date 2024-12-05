type FormInputBoxType = {
  name: string;
  label?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
};

export const FormInputBox: React.FC<FormInputBoxType> = ({
  name,
  label,
  type,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div className=" flex flex-col max-w-[100%]">
      <p className="font-futuraLight tracking-wider font-thin text-sm md:text-[13px]">
        {label}
      </p>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="px-3  placeholder:font-futuraLight font-futuraLight placeholder:tracking-wider md:py-3 py-1 outline-none border-[0.5px] border-black bg-[#FAFAFA]"
      />
    </div>
  );
};
