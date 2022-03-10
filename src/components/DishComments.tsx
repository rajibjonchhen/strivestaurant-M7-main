import ListGroup from 'react-bootstrap/ListGroup'
import { IPasta } from '../types/IPasta'

interface DishCommentsProps {
 selectedDish: IPasta
}
const DishComments = ({selectedDish}:DishCommentsProps) => (
  <ListGroup>
    {selectedDish? (
      selectedDish?.comments?.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
