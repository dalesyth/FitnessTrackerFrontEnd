import { useState } from "react";
import { createActivity } from "./ApiCalls";
import { useNavigate } from "react-router-dom";

const CreateActivity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleCreateActivity = async () => {
      try {
        const response = await createActivity(name, description);

        console.log(`Response in handleCreateActivity: ${response}`);
      } catch (error) {
        console.error(error);
      }
    };
    handleCreateActivity(name, description);
    setName("");
    setDescription("");
    navigate("/Activities");
  };

  return (
    <div className="Container w-1/2 h-3/4 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">
          Create New Activity
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="title">
              Activity Name
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="title"
              id="title"
              value={name}
              onChange={handleName}
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="description"
              id="description"
              value={description}
              onChange={handleDescription}
              required
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

export default CreateActivity;
