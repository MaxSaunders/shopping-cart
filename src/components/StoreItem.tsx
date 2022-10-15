import { Button, Card, CardImg, Container, Row, Col } from 'react-bootstrap'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'

import { formatMoney } from '../utils/formatMoney'
import './StoreItem.scss'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className='h-100'>
            <CardImg className='store-item-img' variant='top' src={imgUrl} height='200px' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatMoney(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity < 1 ? (
                        <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                    ) : (
                        <Container>
                            <Row xs={12} className='d-flex'>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <Button onClick={() => decreaseCartQuantity(id)}> <AiOutlineMinus /></Button>
                                </Col>
                                <Col xs={4} className='d-flex align-items-center justify-content-center'>
                                    <span className='fs-3'>{quantity}</span>
                                    <span className='ms-2'>in cart</span>
                                </Col>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <Button onClick={() => increaseCartQuantity(id)}><AiOutlinePlus /></Button>
                                </Col>
                                <Col sm={{ offset: .5 }} />
                                <Col xs={2} className='ml-auto d-flex justify-content-end'>
                                    <Button onClick={() => removeFromCart(id)} variant='danger'>Remove</Button>
                                </Col>
                            </Row>
                        </Container>
                    )}
                </div>
            </Card.Body>
        </Card >
    )
}