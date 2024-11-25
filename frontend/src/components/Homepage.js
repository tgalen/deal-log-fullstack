const Homepage = ({ loggedInLockedInUser }) => {
  return (
    <div>
      Homepage <br />
      {`Welcome ${loggedInLockedInUser.firstName} ${loggedInLockedInUser.lastName}`}
    </div>
  );
};

export default Homepage;
