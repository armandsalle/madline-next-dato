import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import cn from 'classnames'

const Nav = (): JSX.Element => {
  const router = useRouter()

  return (
    <nav className="nav">
      {[
        { href: '/', title: 'Portfolio' },
        { href: '/about', title: 'À propos' },
        { href: '/services', title: 'Services' },
        { href: '/contact', title: 'Contact' },
      ].map((l, i) => (
        <div key={i} className={cn('nav-link', router.pathname === l.href && 'active')}>
          <Link href={l.href}>
            <a>{l.title}</a>
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default Nav
