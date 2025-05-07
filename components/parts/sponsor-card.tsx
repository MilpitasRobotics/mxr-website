import React from "react";

const FrostedSponsorCard = () => {
  return (
    <>
      <style>{`
        .frosted-card {
          backdrop-filter: blur(1px);
          background: none;
          border: 4px solid white;
          border-radius: 10px;
          padding: 0px;
          padding-top: 20px;
          padding-bottom: 30px;
          text-align: center;
          transition: transform 0.3s ease, background 0.3s ease;
          cursor: pointer;
          width: 400px;
        }

        .frosted-card:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.15);
        }

        .frosted-card h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          background: none;
          -webkit-text-fill-color: white;
          font-size: 40px;
        }

        .frosted-card h2 {
          font-family: 'Roboto', sans-serif;
          font-weight: normal;
          margin-top: 20px;
          position: relative;
          background: none;
          -webkit-text-fill-color: white;
          font-size: 20px;
        }

        .frosted-card h2::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -12px;
          transform: translateX(-50%);
          height: 4px;
          width: 0%;
          background-color: white;
          transition: width 0.3s ease;
        }

        .frosted-card:hover h2::after {
          width: 80%;
        }
      `}</style>

      <div className="frosted-card">
        <h1>Sponsor Us!</h1>
        <h2>View our sponsorship prospectus →</h2>
      </div>
    </>
  );
};

export default FrostedSponsorCard;