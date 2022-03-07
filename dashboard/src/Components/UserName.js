import React from "react";
import { Avatar } from "@chakra-ui/react";

function UserName() {
  return (
    <div className="flex justify-evenly">
      <div className="p-2">PLANT</div>
      <div className="p-2">BELL</div>
      <div className="p-2">
        <div className="flex">
          <div>
            <Avatar name="Dan Abrahmov" src="" />{" "}
          </div>

          <div>
            <div className=" pl-3 font-medium">
              <h3>Verified</h3>
            </div>
            <div>
              <h3 className=" pl-3">Huss Smith</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserName;
