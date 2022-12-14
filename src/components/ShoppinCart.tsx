import { Offcanvas, Stack } from "react-bootstrap";

import { useGetStoreItems } from "../hooks/useGetStoreItems";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatMoney } from "../utils/formatMoney";
import { CartItem } from "./CartItem";

type ShoppinCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppinCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    const { results: storeItems } = useGetStoreItems()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={4}>
                    {cartItems?.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total {formatMoney(cartItems?.reduce((total, cartItem) => {
                            const item = storeItems?.find(i => i?.id === cartItem?.id)
                            return total + (item?.price || 0) * cartItem?.quantity
                        }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}