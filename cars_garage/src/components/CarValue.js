import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ carsSlice: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.length > 0
      ? filteredCars.reduce((sum, car) => (sum = sum + car.cost), 0)
      : 0;
  });

  return <div className="car-value">Total Cost - €{totalCost}</div>;
};

export default CarValue;
