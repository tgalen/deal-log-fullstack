const DealerHomePage = ({ userDealers }) => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split("/");
  const dealerID = splitURL[splitURL.length - 1];

  const userDealer =
    userDealers && userDealers.filter((dealer) => dealer._id === dealerID);
  return <div>{userDealers && userDealer[0].dealerName}</div>;
};

export default DealerHomePage;
