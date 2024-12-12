const DealerHomePage = ({ targetDealer }) => {
  console.log(`target on Homepage ${targetDealer}`);

  return <div>{targetDealer && targetDealer.dealerName}</div>;
};

export default DealerHomePage;
