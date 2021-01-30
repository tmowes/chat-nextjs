import Link from 'next/link'
import { menuData } from '~/data'
import * as C from '~/components'
import * as S from './styles'

const NavBar: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Nav>
        <C.CustomLink href="/" label="PIKTEW" variant="white" font="xl" />
        <S.MenuBars />
        <S.NavMenu>
          {menuData.map(({ title, link }) => (
            <C.CustomLink
              href={link}
              key={title}
              label={title}
              variant="white"
            />
          ))}
        </S.NavMenu>
        <S.NavButton>
          <Link href="/contact">
            <C.Button>Contact</C.Button>
          </Link>
        </S.NavButton>
      </S.Nav>
      {children}
    </S.Container>
  )
}

export default NavBar
