import Link from 'next/link'
import Nav from '@/components/ui/nav'

interface HeaderProps {
  logoUrl: string
}

const Header = ({ logoUrl }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">
          <img src={logoUrl} alt="logo" title="logo" />
        </a>
      </Link>

      <Nav />
    </header>
  )
}

export default Header
