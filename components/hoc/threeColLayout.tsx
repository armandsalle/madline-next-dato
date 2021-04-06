interface ThreeColLayoutProps {
  children: React.ReactNode
}

const ThreeColLayout = ({ children }: ThreeColLayoutProps): JSX.Element => {
  return <section className="three-col">{children}</section>
}

export default ThreeColLayout
