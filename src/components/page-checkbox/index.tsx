import { FC } from "react";

export const PageCheckbox: FC<PageCheckboxProps> = ({
  id,
  checked,
  onChange,
}) => (
  <li key={id} className="flex justify-between items-center py-3.5">
    <p>Page {id}</p>
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="h-6 w-6 rounded-md"
        checked={checked}
        onChange={onChange}
      />
    </label>
  </li>
);
