import React, { useContext, useEffect } from "react";

import Shape from "./shape";
import Logo from "./logo";
import LogoWhite from "./LogoWhite";
import { testContext } from "@/context/Provider";
import { transContext } from "@/context/TransProvider";

const Top = () => {
  const { userCash } = useContext(testContext);
  const { sumTrans } = useContext(transContext);
  useEffect(() => {}, [userCash]);
  return (
    <section className="flex flex-col lg:flex-row gap-5 items-center justify-center mt-10">
      <div className=" relative lg:w-1/3  w-full lg:h-64 rounded-2xl bg-second bg-[url('../Noise.png')] p-10 flex flex-col justify-between">
        <LogoWhite />
        <div className="flex justify-between items-center">
          <div>
            <p className=" text-gray-400 text-xl">cash</p>
            <p className="font-medium text-3xl text-white">{userCash}</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="mt-7"
          >
            <path
              d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z"
              fill="white"
            />
            <path
              d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z"
              fill="white"
            />
            <path
              d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0">
          <Shape />
        </div>
      </div>
      <div className="lg:w-1/3 w-full  bg-white lg:h-64 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#84CC16" />
          </svg>
          <span>Your Income</span>
        </div>
        <div className="p-5 flex lg:block justify-between">
          <div className="tooltip" data-tip={sumTrans?.inc}>
            <h2 className="text-5xl font-medium truncate">{sumTrans?.inc}</h2>
          </div>

          <p className="font-light text-gray-400 lg:my-5">Your Income Amount</p>
          <div className="flex items-center gap-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                fill="#84CC16"
              />
            </svg>
            <span>32% from last month</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 w-full  bg-white lg:h-64 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 font-bold p-4 border-b-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#0166FF" />
          </svg>
          <span>Total Expenses</span>
        </div>
        <div className="p-5 flex lg:block justify-between">
          <div className="tooltip" data-tip={sumTrans?.exp}>
            <h2 className="text-5xl font-medium truncate">-{sumTrans?.exp}</h2>
          </div>
          <p className="font-light text-gray-400 my-5">Your Expense Amount</p>
          <div className="flex items-center gap-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97982 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43735 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46928 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6218 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19903 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32865 12.3601 8.24959 12.551 8.24959 12.75C8.24959 12.949 8.32865 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6218 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
                fill="#84CC16"
              />
            </svg>
            <span>32% from last month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
