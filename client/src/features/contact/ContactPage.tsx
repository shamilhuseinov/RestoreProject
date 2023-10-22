// import { Button, ButtonGroup, Typography } from "@mui/material";
// import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
// import { decrement, increment } from "./counterSlice";

// export default function ContactPage(){
//     const dispatch = useAppDispatch();
//     const{data, title} = useAppSelector(state => state.counter);
//     return (
//         <>
//             <Typography variant="h2">
//                 {title}
//             </Typography>
//             <Typography variant="h5">
//                 The data is: {data}
//             </Typography>
//             <ButtonGroup>
//                 <Button onClick={()=>dispatch(decrement(1))} variant="contained" color="error">Decrement</Button>,
//                 <Button onClick={()=>dispatch(increment(1))} variant="contained" color="primary">Increment</Button>,
//                 <Button onClick={()=>dispatch(increment(5))} variant="contained" color="secondary">Increment by 5</Button>
//             </ButtonGroup>
//         </>
//     )
// }





import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const ContactPage = () => {
  const RootPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  }));

  const HeaderTypography = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  }));

  const ContentForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  }));

  const classes = { RootPaper, HeaderTypography, ContentForm }; // Define your classes

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You can implement the logic to submit the form data here (e.g., sending an email or saving to a database).
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
      <RootPaper>
        <HeaderTypography variant="h1">
          Contact Us
        </HeaderTypography>
        <ContentForm onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </ContentForm>
      </RootPaper>
    </Container>
  );
};

export default ContactPage;

