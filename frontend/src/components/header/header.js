const Header= (props) => {
  return (
    <nav>
      {/* logo section */}
      <div>
        <a> Logo </a>
      </div>

      {/* link lists */}
      
      <ul>
        <li><a href='/account/register'> Register </a></li>
        <li><a href='/account/login'> Login </a></li>
      </ul>
    </nav>
    
  );
}
export default Header;