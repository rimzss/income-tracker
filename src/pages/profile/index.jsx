import React from "react";
import Nav from "../components/Nav";
import Avatar from "@mui/material/Avatar";
import { MdModeEdit } from "react-icons/md";
import TextField from "@mui/material/TextField";

const Profile = ({ open, setOpen }) => {
  return (
    <main className="bg-base w-screen h-screen">
      <Nav setOpen={setOpen} open={open} />
      <article className="px-20 py-5">
        <h3 className="font-medium text-2xl">Edit profile</h3>
        <section className="mt-16">
          <div className=" w-screen flex justify-center">
            <div className="relative">
              <Avatar
                className=" -translate-x-24"
                sx={{ width: 100, height: 100 }}
              />
              <button className=" w-7 h-7 bg-second rounded-full absolute bottom-0 -left-5 px-[6px]">
                <MdModeEdit color="white" />
              </button>
            </div>
          </div>
          <div className="w-screen flex justify-center -translate-x-8">
            <div className="flex flex-col mt-10 gap-5 w-3/4 max-w-xl">
              <div className="w-full">
                <h3>Your name:</h3>
                <TextField
                  id="outlined-basic"
                  placeholder="Your name"
                  variant="outlined"
                  className="w-full"
                />
              </div>

              <div className="w-full flex gap-5 justify-between">
                <div className="w-1/2">
                  <h3>Your Email:</h3>
                  <TextField
                    id="outlined-basic"
                    placeholder="LoginEmail@mail.com"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
                <div className="w-1/2">
                  <h3>Confirm Email:</h3>
                  <TextField
                    id="outlined-basic"
                    placeholder="LoginEmail@mail.com"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Profile;
