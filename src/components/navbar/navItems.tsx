/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import { slide as Menu } from "react-burger-menu"
import { useMediaQuery } from "react-responsive"
import { SCREENS } from "../responsive"
import menuStyles from "./menuStyles"

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    lg:text-black
  `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-xl
      mb-3
      text-white
      focus: text-white
    `};
    `};
`

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>Home</NavItem>
          <NavItem menu>Cars</NavItem>
          <NavItem menu>Services</NavItem>
          <NavItem menu>Contact Us</NavItem>
        </ListContainer>
      </Menu>
    )

  return (
    <ListContainer>
      <NavItem menu>Home</NavItem>
      <NavItem menu>Cars</NavItem>
      <NavItem menu>Services</NavItem>
      <NavItem menu>Contact Us</NavItem>
    </ListContainer>
  )
}
