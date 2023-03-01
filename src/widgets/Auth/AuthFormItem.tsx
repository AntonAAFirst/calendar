interface AuthFormItemProps {
  text: string;
  value: string;
  setValue: Function;
}

export default function AuthFormItem({
  text,
  value,
  setValue,
}: AuthFormItemProps) {
  return (
    <div className="auth-form__item">
      <div className="auth-form__item__text">{text}</div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="auth-form__item__input"
      />
    </div>
  );
}
