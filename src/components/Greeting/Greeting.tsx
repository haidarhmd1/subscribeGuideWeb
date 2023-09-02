export function Greeting() {
  return (
    <div className="greeting pb-4 w-full flex">
      <div>
        <h1 className=" text-4xl font-semibold">Welcome, Haidar</h1>
        <p className="font-light">Manage your subscriptions</p>
      </div>
      <div className="ml-auto">
        <button className="text-xs py-2 px-2 text-white rounded-md border-0 font-light bg-blue-400 hover:bg-blue-200 transition-all">
          Export as CSV
        </button>
      </div>
    </div>
  );
}
