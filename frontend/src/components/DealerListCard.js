import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DealerListCard = ({ dealer, setTargetDealer }) => {
  const navigate = useNavigate();

  const handleDealerClick = (d) => {
    setTargetDealer(d);
    navigate(`/dealer/${d._id}`);
    console.log(`setting target to ${d.dealerName}`);
  };
  return (
    <Card
      sx={{ display: "flex", marginTop: "20px" }}
      key={dealer.dealerName}
      onClick={() => {
        handleDealerClick(dealer);
      }}
    >
      <CardActionArea>
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
};

export default DealerListCard;
