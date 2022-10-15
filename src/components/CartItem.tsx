import { Button, Stack } from "react-bootstrap"

import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatMoney } from "../utils/formatMoney"
import './CartItem.scss'

type CartItemProps = {
    id: number
    quantity: number
}

function getStoreItems(id: number) {
    return storeItems?.find(i => i.id === id)
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = getStoreItems(id)

    if (item == null) return null

    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} className='cart-item-img' />
            <div className='me-auto'>
                <div>
                    {item.name}
                    {(quantity > 1) && <span className='ms-2 cart-item-quantity-counter text-muted'>{quantity}x</span>}
                </div>
                <div className='text-muted cart-item-price'>
                    {formatMoney(item?.price)}
                </div>
            </div>
            <div>{formatMoney(item?.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>X</Button>
        </Stack>
    )
}