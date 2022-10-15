import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { useGetStoreItems } from '../hooks/useGetStoreItems'
import { StoreItem } from '../components/StoreItem'

export function Store() {
    const { results, getStoreItems } = useGetStoreItems()

    useEffect(() => {
        getStoreItems()
    }, [])

    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className='g-3'>
                {results?.map(item =>
                    <Col key={item?.id}>
                        <StoreItem {...item} />
                    </Col>
                )}
            </Row>
        </>
    )
}