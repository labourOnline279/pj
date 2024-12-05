type FormRadioButtonType = {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const FormRadioButton: React.FC<FormRadioButtonType> = ({
  name,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="accent-black w-[20px] h-[20px]"
      />
      <label htmlFor={name} className="text-xs font-futuraLight">
        {label}
      </label>
    </div>
  );
};
