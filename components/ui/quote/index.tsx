import Link from 'next/link'
import Arrow from '@/components/ui/quote/arrow'

interface QuoteProps {
  content: string
}

const Quote = ({ content }: QuoteProps): JSX.Element => {
  return (
    <section className="quote">
      <p className="quote_content">{content}</p>

      <Link href="/contact" passHref>
        <a href="contact" className="quote_link">
          Contactez moi <Arrow />
        </a>
      </Link>
    </section>
  )
}

export default Quote
