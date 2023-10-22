import React from "react";
import { Divider, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

const SocialButton = ({ href, icon, label }:{href:string,icon:any,label:string}) => (
  <motion.button
    whileHover={{
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 },
    }}
    onHoverStart={() => {
      rotate: 90;
    }}
  >
    <a href={href} target="_blank">
      <Icon as={icon} cursor="pointer" boxSize={['8','10']} />
    </a>
  </motion.button>
);

const Social: React.FC = () => {
  return (
    <HStack
      h="5vh"
      w={['90%','70%']}
      marginRight='auto'
      justifyContent="center"
      alignItems="center"
      marginTop="5vh"
      marginBottom={['10vh','15vh']}
      
    >
      <Divider bg={useColorModeValue('black','#735F32')} orientation="horizontal" height="1px"/>
      <HStack color={useColorModeValue('gray.800','#735F32')} marginLeft="30px" marginRight="30px" spacing={5}>
        <SocialButton href="https://github.com/then00bprogrammer" icon={FaGithub} label="GitHub" />
        <SocialButton href="https://www.linkedin.com/in/nikhil-ranjan-tnp/" icon={FaLinkedin} label="LinkedIn" />
        <SocialButton href="https://leetcode.com/then00bprogrammer/" icon={SiLeetcode} label="Leetcode" />
        <SocialButton href="https://codeforces.com/profile/then00bprogrammer" icon={SiCodeforces} label="Codeforces" />
        <SocialButton href="https://twitter.com/NikhilRanjan02" icon={FaTwitter} label="Twitter" />
        <SocialButton href="" icon={FaEnvelope} label="Email" />
      </HStack>
      <Divider bg={useColorModeValue('black','#735F32')} orientation="horizontal" height="1px" />
    </HStack>
  );
};

export default Social;
