import cn from 'classnames'

interface TitleProps {
  text: string
  home?: boolean
}

const Title = ({ text, home }: TitleProps): JSX.Element => {
  return (
    <div className={cn('title', home && 'title--home')}>
      <h1 className="h1">{text}</h1>
    </div>
  )
}

export default Title
