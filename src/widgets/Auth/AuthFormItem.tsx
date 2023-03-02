interface AuthFormItemProps {
  text: string;
  value: string;
  setValue: Function;
  arrayOptions: any[];
}

export default function AuthFormItem({
  text,
  value,
  setValue,
  arrayOptions,
}: AuthFormItemProps) {
  return (
    <div className="auth-form__item">
      <div className="auth-form__item__text">{text}</div>

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="auth-form__item__input"
      >
        {arrayOptions.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}
