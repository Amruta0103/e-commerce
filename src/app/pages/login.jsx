import "./pages.css";
import React from "react";
import { useUser } from "../context/userContext";
// import { useAuth } from "../context/authContext";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/authContext";


export default function Login() {
  // eslint-disable-next-line 
  const { email, setEmail, passWord, setPassWord} = useUser();
  const {isLoggedIn, setLoggedIn} = useAuth();
  // console.log("isLoggedIn", isLoggedIn);
  // console.log("temp",email, passWord, isLoggedIn);
  return (
    <div className="Login">
      {isLoggedIn === true ? (
        <div> You are logged in</div>
      ):(
        <div className="loginBox">
          <legend>Email</legend>
          <input onChangeCapture={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter your name email"></input>
          <legend>PASSWORD</legend>
          <input onChangeCapture={(e)=>setPassWord(e.target.value)} type="password" placeholder="Pass..."></input>
          <br /><br />
          <Link to="/products" onClick={()=> console.log("isLoggedIn", isLoggedIn)}>
            <button className="login-btn" onClick={() => !setLoggedIn}>
              Log In
            </button>
            {/* {console.log("isloggedIN", isLoggedIn)} */}
          </Link>
          <br />
        </div>
      )
      }
      <div>
        <h4>New here, Sign Up&nbsp;
          <Link to="/signup">here</Link>
        </h4>
      </div>
    </div>
  );
}




/* <div className="loginBox">
      <legend>ADDRESS</legend>
      <textarea placeholder="Enter your address"></textarea>
      <legend>PINCODE</legend>
      <input type="text"></input>
    </div> */


    // import AuthForm from "@/components/AuthForm";
    // import Footer from "@/components/Footer";
    // import Navbar from "@/components/Navbar/Navbar";
    // import SEO from "@/components/SEO";
    // import Wrapper from "@/components/Wrapper";
    // import { Box, Flex, Heading, VStack, Stack, Image } from "@chakra-ui/react";
    
    // export default function LoginPage() {
    //   return (
    //     <Flex flexDirection="column">
    //       <SEO pageTitle="Subscribe" />
    //       <Navbar />
    //       <Wrapper>
    //         <Stack
    //           direction={["column-reverse", "column-reverse", "row"]}
    //           width="100%"
    //           minHeight="77vh"
    //           alignItems="center"
    //           px={[4, 4, 0]}
    //           py={[4, 4, 8]}
    //           spacing={[8, 8, 16]}
    //         >
    //           <Box width={["100%", "100%", "50%"]}>
    //             <VStack
    //               bgColor="brand.50"
    //               height="100%"
    //               width={"100%"}
    //               spacing={16}
    //               px={6}
    //               py={12}
    //             >
    //               <Box width="100%">
    //                 <Heading size="lg" textAlign="center" width="100%">
    //                   Welcome back to Wyzr!
    //                 </Heading>
    //                 <Image
    //                   src="/spaceman.png"
    //                   alt="Spaceman"
    //                   width="50%"
    //                   mx="auto"
    //                 />
    //               </Box>
    //             </VStack>
    //           </Box>
    //           <AuthForm />
    //         </Stack>
    //       </Wrapper>
    //       <Footer />
    //     </Flex>
    //   );
    // }