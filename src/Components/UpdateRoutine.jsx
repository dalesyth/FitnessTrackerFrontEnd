import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateRoutine } from "./ApiCalls";

const UpdateRoutine = () => {
  // const [isPublic, setIsPublic] = useState(true);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const routineId = localStorage.getItem("routineId");

  // const handleIsPublic = (event) => {
  //   setIsPublic(event.target.checked);
  //   console.log(`isPublic from handleIsPublic: ${isPublic}`);
  // };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked)
  };

  const handleName = (event) => {
    setName(event.target.value);
    console.log(`name from handleName: ${name}`);
  };

  const handleGoal = (event) => {
    setGoal(event.target.value);
    console.log(`goal from handleGoal: ${goal}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleUpdateRoutine = async () => {
      try {
        const response = await updateRoutine(
          routineId,
          token,
          isChecked,
          name,
          goal
        );

        console.log(`Result in handleUpdateRoutine: ${response}`);
      } catch (error) {
        console.error(error);
      }
    };
    handleUpdateRoutine();
    setName("");
    setGoal("");
    navigate("/MyRoutines");
  };

  return (
    <div className="Container w-1/2 h-3/4 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">Update Routine</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block mb-2" htmlFor="title">
              Title
            </label> */}
            <input
              className="w-full rounded shadow-lg"
              type="text"
              id="name"
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
              id="goal"
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
              checked={isChecked}
              // value={isPublic}
              onChange={handleCheckbox}
            ></input>
          </div>

          <div className="mb-4">
            <button
              className="w-full shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              type="submit"
            >
              SUBMIT CHANGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoutine;
