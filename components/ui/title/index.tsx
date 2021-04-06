interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps): JSX.Element => {
  return (
    <div className="title">
      <h1 className="h1">{text}</h1>
    </div>
  )
}

export default Title
