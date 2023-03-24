import NewChat from "./NewChat";
export const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div className="">
          <NewChat />
        </div>
      </div>
    </div>
  );
};
