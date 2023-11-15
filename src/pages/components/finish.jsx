import React from "react";
import Link from "next/link";

const Finish = ({ nextStep }) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 gap-10 mt-40">
      <div className=" w-12 h-12 bg-second rounded-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M28.7071 9.70745L12.7071 25.7074C12.6142 25.8004 12.5039 25.8742 12.3825 25.9245C12.2611 25.9748 12.131 26.0007 11.9996 26.0007C11.8682 26.0007 11.738 25.9748 11.6166 25.9245C11.4952 25.8742 11.385 25.8004 11.2921 25.7074L4.29208 18.7074C4.10444 18.5198 3.99902 18.2653 3.99902 17.9999C3.99902 17.7346 4.10444 17.4801 4.29208 17.2924C4.47972 17.1048 4.73422 16.9994 4.99958 16.9994C5.26494 16.9994 5.51944 17.1048 5.70708 17.2924L11.9996 23.5862L27.2921 8.29245C27.4797 8.1048 27.7342 7.99939 27.9996 7.99939C28.2649 7.99939 28.5194 8.1048 28.7071 8.29245C28.8947 8.48009 29.0001 8.73458 29.0001 8.99995C29.0001 9.26531 28.8947 9.51981 28.7071 9.70745Z"
            fill="white"
          />
        </svg>
      </div>
      <h3 className="text-3xl font-medium">Good Job!</h3>

      <p className="max-w-lg text-stone-400 mt-4">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
      <Link href="./" className="w-full max-w-lg">
        <button
          onClick={nextStep}
          className="btn w-full rounded-3xl bg-second hover:bg-blue-400 text-white"
        >
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Finish;
