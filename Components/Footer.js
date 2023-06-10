
function Footer({props}) {
  return (
    <div className="Footer">
       
      <div className="forma">
      <form>
      <h2>User Registration</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        required
      />
<br/>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        required
      />
<br/>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        required
      />
<br/>
      <button type="submit">Register</button>
    </form>
      </div>
      <div className="props">
        {props.mjesto}
        <br />
        {props.broj}
        <br />
        {props.mail}
        </div>
    </div>
  );
}

export default Footer;
