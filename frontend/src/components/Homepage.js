import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Homepage = ({ loggedInLockedInUser }) => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex" }}>
        {/* this should be it's own Component */}
        <Box>
          <CardContent>
            <Typography component="div" variant="h6">
              Faulkner Toyota
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default Homepage;
