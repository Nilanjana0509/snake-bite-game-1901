import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalController from "../components/Modals/ModalController";
import {
  getResult1Data,
  completePath,
  clearGameStorage,
  getSpecificData,
} from "../utils/gameStorage";
// path 1 - 2 -5
function FinalResult1() {
  const [showStarPopup, setShowStarPopup] = useState(true);
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allResults, setAllResults] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const result = getResult1Data();
    setAllResults(result);
  }, []);

  const levelTitles = {
    level1Result: "You have come across a patient of Snake bite",
    level2Result: "Initial Management",
    level5Result: "No sign of Envenomation",
  };
  const handlepopup = () => {
    completePath();
    setShowStarPopup(false);
  };

  const handleHomeClick = () => {
    const startCount = getSpecificData("totalCompleted");
    if (startCount == 8) {
      setShowCompletionPopup(true);
    } else if (startCount == 1) {
      setShowModal(true);
    } else {
      navigate("/level2");
    }
  };
  const handleExitClick = () => {
    clearGameStorage();
    navigate("/level1");
  };
  const confirmExit = () => {
    clearGameStorage();
    navigate("/level1");
  };

  return (
    <>
      {showStarPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm text-center">
            <h2 className="text-lg sm:text-2xl font-bold text-amber-600 mb-4">
              You completed one path and achieved one star.
            </h2>
            <button
              className="bg-amber-950 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md"
              onClick={handlepopup}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
      {!showStarPopup && (
        <>
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-amber-950 mb-6">
              Game Results
            </h2>
            <p className="text-lg text-amber-600 mb-4 font-semibold">
              The options you selected since Level 1
            </p>
            <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
              {Object.entries(allResults).map(([level, result], index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {levelTitles[level] || level.replace("Result", "")}:
                  </h3>
                  {result ? (
                    <p className="text-gray-600">{result}</p>
                  ) : (
                    <p className="text-gray-400">No selection</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleHomeClick}
                className="bg-amber-800 text-white px-4 py-2 mt-6 rounded-md hover:bg-amber-900 transition"
              >
                Home
              </button>
              <button
                onClick={handleExitClick}
                className="bg-amber-800 text-white px-4 py-2 mt-6 rounded-md hover:bg-amber-900 transition"
              >
                Exit
              </button>
            </div>
          </div>
          {showWarningPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
                <h2 className="text-lg font-bold text-red-600 mb-4">
                  You'll lose all your stars you collected, if you press Exit
                  now!
                </h2>
                <div className="flex justify-center space-x-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    onClick={confirmExit}
                  >
                    Confirm Exit
                  </button>
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                    onClick={() => setShowWarningPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          {showCompletionPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
                <h2 className="text-lg font-bold text-amber-600 mb-4">
                  Congratulations! You have collected all the 8 stars and
                  successfully completed the game.
                </h2>
                <p className="text-gray-600 mb-4">
                  Now you can exit or you can start over again.
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition"
                    onClick={confirmExit}
                  >
                    Exit
                  </button>
                  <button
                    className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition"
                    onClick={confirmExit}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal && <ModalController onClose={() => setShowModal(false)} />}
        </>
      )}
    </>
  );
}

export default FinalResult1;
