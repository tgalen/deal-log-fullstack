import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import axios from "axios";
import { DEALERS_API } from "../constants/constants";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "90%",
  marginLeft: "auto",
  marginRight: "auto",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

const CreateNewDealer = ({ loggedInLockedInUser }) => {
  const [addNewDealerOpen, setAddNewDealerOpen] = useState(false);
  const [formData, setFormData] = useState({
    dealerName: "",
    dealerGroup: "",
    dealerNumber: "",
  });

  const { dealerName, dealerGroup, dealerNumber } = formData;

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInLockedInUser.token}`,
    },
  };

  const createNewDealer = async () => {
    const response = await axios.post(DEALERS_API, formData, config);

    if (response.data) {
      console.log(response);
      // addTodoToGroupLocally();
      setAddNewDealerOpen(false);
      setFormData({
        dealerName: "",
        dealerGroup: "",
        dealerNumber: "",
      });
    } else {
      console.log("failed");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Tooltip
        onClick={(e) => setAddNewDealerOpen(true)}
        title="Add Group"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addNewDealerOpen}
        onClose={() => setAddNewDealerOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={350} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Dealer
          </Typography>
          <Box>
            <UserBox>
              <Typography variant="span" fontWeight={500}>
                {loggedInLockedInUser.firstName} {loggedInLockedInUser.lastName}
              </Typography>
            </UserBox>
            <Box component="form" margin={1}>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Dealer Name"
                variant="standard"
                name="groupName"
                value={dealerName}
                onChange={onChange}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Dealer Group"
                variant="standard"
                name="description"
                value={dealerGroup}
                onChange={onChange}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Dealer Number"
                variant="standard"
                name="dealerNumber"
                value={dealerNumber}
                onChange={onChange}
              />
              <Box sx={{ width: "100%", textAlign: "right", marginTop: 3 }}>
                <Fab
                  variant="extended"
                  color="primary"
                  onClick={createNewDealer}
                >
                  Submit
                </Fab>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default CreateNewDealer;
