import React from 'react'
import { Flex, Divider, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactMe from '../components/ContactMe'

type Props = {}

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Head>Nikhil's Portfolio</Head>
      <Navbar />
      {children}
      <ContactMe/>
    </>
  )
}

export default Layout
