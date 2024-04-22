const Select = ({ label, id, name, options, value, onChange }) => {
    return (
      <div className="mb-4">
        {label && <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
        <div className="inline-block relative w-full">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.092 7.328a.5.5 0 01.708 0l3.201 3.2a.5.5 0 01-.707.708L5.5 8.037l-2.694 2.693a.5.5 0 11-.708-.707l3-3z" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  export default Select;