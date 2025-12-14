import { useEffect, useState } from "react";
import api from "../api/api";

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets")
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Pets Available for Adoption</h2>

      {pets.length === 0 && <p>No pets available</p>}

      <ul>
        {pets.map(pet => (
          <li key={pet._id}>
            {pet.name} - {pet.breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Adopt;