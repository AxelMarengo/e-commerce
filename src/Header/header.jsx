import "./header.css"

function Header() {
    return (
      <nav className="navbar sticky-top">
        <h3 className="px-3">Logo</h3>
        <div>
        <input type="text" placeholder="Enter filter" />
        <button type="button" className="mx-3 btn btn-primary">Search</button>
        </div>
      </nav>
    );
  }
  
  export default Header;
  