import SortablePage from "../components/SortableTable";

const sortableItems = [
  { name: "Apple", color: "bg-red-500", score: 3 },
  { name: "Banana", color: "bg-yellow-300", score: 1 },
  { name: "Lime", color: "bg-green-400", score: 5 },
  { name: "Orange", color: "bg-orange-400", score: 2 },
];
const sortableConfig = [
  {
    label: "Name",
    render: (item) => item.name,
    sortBy: (item) => item.name,
  },
  {
    label: "Color",
    render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>,
  },
  {
    label: "Score",
    render: (item) => item.score,
    sortBy: (item) => item.score,
  },
];

const fixItems = [
  { name: "Seat", brand: "Ibiza", value: 1500 },
  { name: "Opel", brand: "Corsa", value: 2000 },
  { name: "Nissan", brand: "Qashqai", value: 5000 },
  { name: "Mini", brand: "Cooper", value: 2250 },
];
const fixConfig = [
  {
    label: "Car",
    render: (item) => item.name,
  },
  {
    label: "Brand",
    render: (item) => item.brand,
  },
  {
    label: "Cost",
    render: (item) => item.value,
  },
];

const keyFn = (item) => item.name;

const TablePage = () => {
  return (
    <div>
      <p>Sortable Table</p>
      <SortablePage
        items={sortableItems}
        config={sortableConfig}
        keyFn={keyFn}
      />
      <br />
      <p>Fix Table</p>
      <SortablePage items={fixItems} config={fixConfig} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
