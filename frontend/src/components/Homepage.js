import { useState, useEffect } from "react";
import CreateNewDealer from "./CreateNewDealer";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { DEALERS_API } from "../constants/constants";

const HomePage = ({ loggedInLockedInUser }) => {
  const [userDealers, setUserDealers] = useState(null);
  const config = loggedInLockedInUser && {
    headers: {
      Authorization: `Bearer ${loggedInLockedInUser.token}`,
    },
  };

  const getUserDealers = async () => {
    const response = await axios.get(DEALERS_API, config);

    if (response) {
      setUserDealers(response.data);
    }
  };

  useEffect(() => {
    loggedInLockedInUser && getUserDealers();
  }, []);
  console.log(userDealers);

  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex", marginTop: "20px" }}>
        {/* this should be it's own Component */}
        <Box>
          <CardContent>
            <Typography component="div" variant="h6">
              Faulkner Toyota
            </Typography>
          </CardContent>
        </Box>
      </Card>
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
