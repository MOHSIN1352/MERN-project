import { Box, Typography,useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
    return (<Box>
        <Box width="100%"
            backGroundColor={theme.palette.background.alt} 
            p="1rem 6%"
            textAlign={"center"}>
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"   
        >
          @Winkle
        </Typography>
        </Box>

        <Box
            width= {isNonMobileScreens ? "50%" : "93%"}
            p = "2rem"
            m = "2rem auto"
            borderRadius="1.5rem"
            backGroundColor={theme.palette.background.alt }
            >
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                Lets Wink Together!!
            </Typography>
            <Form />
        </Box>

    </Box>);
};

export default LoginPage;
