const Checkbox = ({ label, id, name, checked, onChange }) => {
    return (
      <div className="mb-4 flex items-center">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mr-2 leading-tight"
        />
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
    );
  };

export default Checkbox;