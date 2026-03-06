import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/Modals/LogInModal";
function IndexPage() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const images = [
    { src: "/616653.png", link: "/level1" },
    { src: "/Epidemiology.png", link: "/game2" },
    { src: "/BMWsymbol.jpg", link: "/game3" },
    { src: "/Family.jpg", link: "/game4" },
    { src: "/Syndromeclinic.jpg", link: "/game5" },
  ];

  // Show login modal after 1 second
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      const timer = setTimeout(() => {
        setShowLogin(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <img
              src={item.src}
              alt={`image-${index}`}
              className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Login Modal */}
      {showLogin && <LoginModal onBack={() => setShowLogin(false)} />}
    </div>
  );
}

export default IndexPage;
