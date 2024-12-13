import { useNavigate } from "react-router-dom";
import CreateNewDealer from "./CreateNewDealer";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = ({
  loggedInLockedInUser,
  userDealers,
  setTargetDealer,
  targetDealer,
}) => {
  const navigate = useNavigate();

  const handleDealerClick = (d) => {
    setTargetDealer(d);
    navigate(`/dealer/${d._id}`);
    console.log(`setting target to ${d.dealerName}`);
  };
  console.log(targetDealer);
  return (
    <Container maxWidth="sm">
      {userDealers &&
        userDealers.map((dealer) => {
          return (
            <Card
              sx={{ display: "flex", marginTop: "20px" }}
              key={dealer.dealerName}
              onClick={() => {
                handleDealerClick(dealer);
              }}
            >
              <CardActionArea>
                {/* this should be it's own Component */}
                <Box>
                  <CardContent>
                    <Typography component="div" variant="h6">
                      {dealer.dealerName}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          );
        })}
      <Card sx={{ display: "flex", marginTop: "20px" }}>
        <Box>
          <CardContent>
            <CreateNewDealer loggedInLockedInUser={loggedInLockedInUser} />
            <Typography>Create New Dealer + Icon</Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default HomePage;
