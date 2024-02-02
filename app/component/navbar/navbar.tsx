export default function navbarBooks() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="">
          <button className="btn">Login</button>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">BookStore</a>
      </div>
      <div className="navbar-end">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
