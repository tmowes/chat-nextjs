import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Nav = styled.nav`
  height: 6rem;
  border-bottom: 1px solid orangered;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: sticky;
  z-index: 100;
`
const navText = css`
  color: whitesmoke;
  font-size: 32px;
`

export const Logo = styled(Link)`
  p {
    ${navText}
    text-decoration: none;
  }
`

export const MenuBars = styled.i`
  display: none;
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
`

export const NavLink = styled(Link)``

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.4rem;
  width: 9rem;
`
