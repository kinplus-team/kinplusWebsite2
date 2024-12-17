const CookieOption = ({
  id,
  label,
  description,
  checked,
  onChange,
  disabled,
}) => (
  <div className="flex items-center">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
      disabled={disabled}
      className="mr-2 h-4 w-4"
    />
    <div>
      <label
        htmlFor={id}
        className="font-medium"
      >
        {label}
      </label>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);


export default CookieOption