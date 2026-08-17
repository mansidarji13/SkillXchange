function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = true,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-200"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-violet-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/10"
      />
    </div>
  );
}

export default AuthInput;