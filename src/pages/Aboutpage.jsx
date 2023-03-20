import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is demo website about react-router-dom library</p>

      <ul>
        <li>
          <Link to="contacts">Our Contacts</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}

      <Outlet />
    </div>
  );
};

export { About };
