import Link from 'next/link'

interface NavProps {
  logoUrl: string
}

const Nav = ({ logoUrl }: NavProps): JSX.Element => {
  return (
    <nav className="nav">
      <Link href="/">
        <a>
          <img src={logoUrl} alt="logo" title="logo" />
        </a>
      </Link>

      <Link href="/">
        <a>Portfolio</a>
      </Link>
      <Link href="/about">
        <a>A propos</a>
      </Link>
    </nav>
  )
}

export default Nav
