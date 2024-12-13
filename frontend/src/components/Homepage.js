import CreateNewDealer from "./CreateNewDealer";
import DealerListCard from "./DealerListCard";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = ({ loggedInLockedInUser, userDealers, setTargetDealer }) => {
  return (
    <Container maxWidth="sm">
      {userDealers &&
        userDealers.map((dealer) => {
          return (
            <DealerListCard dealer={dealer} setTargetDealer={setTargetDealer} />
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
