import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 z-0 h-screen w-[300px] xl:w-[350] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h4 className="text-heading4-bold text-light-1">Following</h4>
        <div className="flex flex-col gap-4">maping users</div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-heading4-bold text-light-1">Suggested people</h4>
        <div className="flex flex-col gap-4">maping users</div>
      </div>
    </div>
  );
};

export default RightSideBar;
