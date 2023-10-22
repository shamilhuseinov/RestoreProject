// import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
// import agent from "../../app/api/agent";
// import { useState } from "react";

// export default function AboutPage(){
//     const [validationErrors, setValidationErrors]=useState<string[]>([]);

//     function getValidationError(){
//         agent.TestErrors.getValidationError()
//             .then(()=>console.log('should not see this'))
//             .catch(error=>setValidationErrors(error));
//     }
//     return (
//         <Container>
//             <Typography gutterBottom variant = 'h2'>Errors for testing purposes</Typography>
//             <ButtonGroup fullWidth>
//                 <Button variant="contained" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))} >Test 400 Error</Button>
//                 <Button variant="contained" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))} >Test 401 Error</Button>
//                 <Button variant="contained" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))} >Test 404 Error</Button>
//                 <Button variant="contained" onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))} >Test 500 Error</Button>
//                 <Button variant="contained" onClick={getValidationError} >Test Validation Error</Button>
//             </ButtonGroup>
//             {validationErrors.length>0 && 
//                 <Alert severity="error">
//                     <AlertTitle>Validation Errors</AlertTitle>
//                     <List>
//                         {validationErrors.map(error =>(
//                             <ListItem key={error}>
//                                 <ListItemText>{error}</ListItemText>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Alert>
//             }
//         </Container>
//     )
// }






// Import necessary React and Material-UI components
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Define the component's styles using styled
const RootPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const ContentTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
}));

const AboutPage = () => {
  return (
    <Container>
      <RootPaper>
        <HeaderTypography variant="h1">
          About Our Store
        </HeaderTypography>
        <ContentTypography>
          Welcome to FashionStore, your one-stop destination for the latest fashion trends and high-quality clothing.
          We're passionate about helping you look and feel your best, whether you're dressing up for a special occasion or seeking
          comfortable, everyday styles.
        </ContentTypography>
        <ContentTypography>
          Our team of fashion experts is dedicated to curating a collection of clothing that reflects your unique style.
          We offer a wide range of clothing items, from casual wear to formal attire, all carefully selected for their quality
          and style.
        </ContentTypography>
        <ContentTypography>
          At FashionStore, we value our customers' satisfaction above all else. We provide excellent customer service,
          quick and reliable shipping, and a hassle-free return policy to ensure your shopping experience is as enjoyable as
          possible.
        </ContentTypography>
        <ContentTypography>
          Thank you for choosing us for your fashion needs. We look forward to helping you express your personal style and
          keep you looking your best.
        </ContentTypography>
      </RootPaper>
    </Container>
  );
};

export default AboutPage;

