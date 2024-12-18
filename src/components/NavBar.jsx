import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { searchProfiles } from "../redux/actions/searchProfiles";
import { changeUser } from "../redux/actions/changrUser";
import prime from "../assets/prime.svg";

const NavBar = () => {
  const dispatch = useDispatch();

  // Load data from Redux
  const profile = useSelector((state) => state.profile.data);
  const loading = useSelector((state) => state.profile.loading);

  const searchResults = useSelector((state) => state.profile.searchResults);
  const searchLoading = useSelector((state) => state.profile.searchLoading);

  // Local state for search data entry
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  // SearchBar handle
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() !== "") {
      dispatch(searchProfiles(value));
    }
  };

  // Handle user selection from search results
  const handleUserSelect = (userId) => {
    dispatch(changeUser(userId));
    setQuery("");
  };

  useEffect(() => {
    if (query.trim() !== "" && searchResults) {
      const filtered = searchResults.filter((result) => {
        const fullName = `${result.name || ""} ${
          result.surname || ""
        }`.toLowerCase();
        return fullName.includes(query.toLowerCase());
      });
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [query, searchResults]);

  return (
    <Container className="p-0 m-0">
      <Navbar bg="white" expand="md" className=" border-bottom px-md-5">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Logo"
              style={{ width: "35px", height: "35px" }}
            />
          </Navbar.Brand>

          {/* Navbar Toggle for Mobile */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* Collapsible Navbar */}
          <Navbar.Collapse id="navbarScroll">
            {/* Search Bar */}
            <Form className="position-relative d-flex ms-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "280px" }}
                value={query}
                onChange={handleSearch}
              />
              {/* Search Results */}
              {query && (
                <div
                  className="position-absolute bg-white shadow rounded"
                  style={{
                    top: "100%",
                    width: "280px",
                    maxHeight: "200px",
                    overflowY: "auto",
                    zIndex: "1000"
                  }}
                >
                  {searchLoading ? (
                    <div className="p-2 text-muted">Loading...</div>
                  ) : filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <div
                        key={result._id}
                        className="p-2 border-bottom d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleUserSelect(result._id)}
                      >
                        <img
                          src={result.image || "https://via.placeholder.com/35"}
                          alt={result.name}
                          className="rounded-circle me-2"
                          style={{ width: "35px", height: "35px" }}
                        />
                        <div>
                          <strong>
                            {result.name} {result.surname}
                          </strong>
                          <div className="text-muted">{result.title}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-muted">No results found</div>
                  )}
                </div>
              )}
            </Form>

            {/* Navigation Links */}
            <Nav className="d-flex ms-auto mb-2 mb-md-0">
              <Nav.Link href="/home" className=" text-center mx-2">
                <i className="bi bi-house-fill"></i>
                <div className="small">Home</div>
              </Nav.Link>
              <Nav.Link href="/network" className="text-center mx-2">
                <i className="bi bi-people-fill"></i>
                <div className="small">My Network</div>
              </Nav.Link>
              <Nav.Link href="/jobs" className="text-center mx-2">
                <i className="bi bi-briefcase-fill"></i>
                <div className="small">Jobs</div>
              </Nav.Link>
              <Nav.Link href="/messaging" className="text-center mx-2">
                <i className="bi bi-chat-dots-fill"></i>
                <div className="small">Messaging</div>
              </Nav.Link>
              <Nav.Link href="/notifications" className="text-center mx-2">
                <i className="bi bi-bell-fill"></i>
                <div className="small">Notifications</div>
              </Nav.Link>
              <Nav.Link href="/profile" className="text-center mx-2">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <img
                      src={profile?.image || "https://via.placeholder.com/35"}
                      alt="Profile"
                      className="rounded-circle"
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover"
                      }}
                    />
                    <div className="small">{profile?.name || "Me"}</div>
                  </>
                )}
              </Nav.Link>
            </Nav>
            {/* Right Side: Additional Buttons */}
            <div className="d-flex align-items-center ms-3 border-start px-1">
              <div className="d-flex flex-column align-items-center">
                <Nav.Link href="/" className="text-center mx-2">
                  <i
                    className="bi bi-grid-3x3-gap-fill"
                    style={{ color: "rgb(144, 141, 141)", fontSize: "1.8rem" }}
                  ></i>
                </Nav.Link>
                <Nav.Link href="/business" className="text-dark small">
                  For Business
                </Nav.Link>
              </div>
              <div className="d-flex flex-column align-items-center mx-2">
                <img
                  src={prime}
                  alt=""
                  style={{ width: "30px", height: "25px" }}
                  className="my-1 mb-1"
                />
                <Nav.Link href="" className="text-decoration-none mt-1 small">
                  Try Premium for €0
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
