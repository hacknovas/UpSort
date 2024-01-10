// "use client";
import Main from "./component/Main";

export default function Home() {
  return (
    <>
      <nav className="container p-4 d-flex justify-content-center">
        <div>Logo</div>
        {/* <div>Items</div> */}
      </nav>
      <header className="container text-center">Info</header>
      <div>
        <Main />
      </div>

      <footer className="d-flex justify-content-center">footer</footer>
    </>
  );
}
