interface TextProps {
  children: string
}

const Text = ({ children }: TextProps): JSX.Element => {
  return <p className="text">{children}</p>
}

export default Text
