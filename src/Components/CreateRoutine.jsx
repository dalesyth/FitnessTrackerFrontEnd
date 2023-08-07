import { useState } from "react";
import { createRoutine } from "./ApiCalls";
import { useNavigate } from "react-router-dom";

const CreateRoutine = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleIsPublic = (event) => {
    setIsPublic(event.target.value);
    console.log(`isPublic from handleIsPublic: ${isPublic}`)
  };

  const handleName = (event) => {
    setName(event.target.value);
    console.log(`name from handleName: ${name}`)
  };

  const handleGoal = (event) => {
    setGoal(event.target.value);
    console.log(`goal from handleGoal: ${goal}`)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleCreateRoutine = async () => {
      try {
        const response = await createRoutine(isPublic, name, goal);

        console.log("response in handleCreateRoutine: ", Object.keys(response), Object.value(response));
      } catch (error) {
        console.error(error);
      }
    };
    handleCreateRoutine(isPublic, name, goal);
    setName("");
    setGoal("");
    navigate("/MyRoutines");
  };

  return (
    <div className="Container w-1/2 h-3/4 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">
          Create New Routine
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block mb-2" htmlFor="title">
              Activity Name
            </label> */}
            <input
              className="w-full rounded shadow-lg"
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Routine Name"
              required
            ></input>
          </div>
          <div className="mb-4">
            {/* <label className="block mb-2" htmlFor="description">
              Description
            </label> */}
            <input
              className="w-full rounded shadow-lg"
              type="text"
              value={goal}
              onChange={handleGoal}
              placeholder="Goal"
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="description">
              Make this routine public?
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="checkbox"
              value={isPublic}
              onChange={handleIsPublic}
              defaultChecked="true"
            ></input>
          </div>
          <div className="mb-4">
            <button
              className="w-full shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              type="submit"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoutine;
