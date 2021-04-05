interface FooterProps {
  email: string
  phone: string
}

const Footer = ({ email, phone }: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
      <p>{email}</p>
      <p>{phone}</p>
    </footer>
  )
}

export default Footer
