import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Users from "./data-files/users.json";
import Loading from "./components/Loading";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  const isPageLoaded = pageLoaded;

  return (
    <React.Fragment>
      {!isPageLoaded && <Loading />}
      <div className="cards">
        {isPageLoaded &&
          Users.map((user) => {
            return (
              <Card
                name={user.name}
                key={user.id}
                mailId={user.email}
                contact={user.phone}
                website={user.website}
                username={user.username}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default App;
