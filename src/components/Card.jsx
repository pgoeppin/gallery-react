import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
    <Card className='bg-dark' border="light">
      <Card.Img variant="top" src={props.url} alt={props.alt}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    )
};
export default Cards;