import { FC, useState } from "react";
import { PageCheckbox } from "./components/page-checkbox";

const App: FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [pageCheckboxes, setPageCheckboxes] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setPageCheckboxes(pageCheckboxes.map(() => !selectAll));
  };

  const handlePageCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...pageCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setPageCheckboxes(updatedCheckboxes);
    if (updatedCheckboxes.every((checkbox) => checkbox)) {
      setSelectAll(true);
    } else if (updatedCheckboxes.every((checkbox) => !checkbox)) {
      setSelectAll(false);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center font-montserrat text-sm">
      <div className="shadow-card border py-3.5 px-6 rounded-md max-w-[370px] w-full flex flex-col gap-y-2.5">
        <div className="flex justify-between items-center py-3.5">
          <p>All Pages</p>
          <input
            type="checkbox"
            className="h-6 w-6 rounded-md"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </div>
        <hr className="h-px border-0 bg-[#CDCDCD]" />
        <ul className="">
          {[1, 2, 3, 4].map((item, index) => (
            <PageCheckbox
              key={item}
              id={item}
              checked={pageCheckboxes[index]}
              onChange={() => handlePageCheckboxChange(index)}
            />
          ))}
        </ul>
        <hr className="h-px border-0 bg-[#CDCDCD]" />
        <button className="px-6 py-3.5 w-full bg-[#FFCE22] hover:bg-[#FFD84D] rounded">
          Done
        </button>
      </div>
    </main>
  );
};

export default App;
