import { useState } from "react";

import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3005/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading trips...</div>}
      {error && <div> Problem fetching the data </div>}
      <ul>
        {!isPending &&
          trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3005/trips?location=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3005/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
