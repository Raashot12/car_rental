import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import { BookCard } from "../../components/bookCard"
import Navbar from "../../components/navbar"
import AboutUs from "./aboutUs"
import { BookingSteps } from "./bookingSteps"
import TopSection from "./topSection"

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  items-center
  overflow-x-hidden

  `}
`

export function HomePage() {
  return (
    <PageContainer style={{ height: "100%" }}>
      <Navbar></Navbar>
      <TopSection></TopSection>
      <BookCard />
      <BookingSteps />
      <AboutUs />
    </PageContainer>
  )
}
