interface TextProps {
  children: string
}

const Text = ({ children }: TextProps): JSX.Element => {
  return <div className="text" dangerouslySetInnerHTML={{ __html: children }} />
}

export default Text
