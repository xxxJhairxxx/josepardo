import { Container } from '../globals'

interface props {
  listTitle: Array<string>
  activePage: number
}

const ProgressBar = ({ listTitle, activePage }: props) => {
  const numeros = Array.from(
    { length: listTitle.length },
    (_, index) => index + 1
  )

  return (
    <Container className='progressBar'>
      <ul className='progressBar_listNameSteps'>
        {listTitle.map((title, index) => (
          <li
            key={index}
            className={`${index + 1 === activePage ? 'active' : ''} ${
              index + 1 < activePage ? 'completed' : ''
            } ${activePage === listTitle.length ? 'last' : ''}`}
          >
            {title}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ProgressBar
