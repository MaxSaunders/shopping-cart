import { useEffect, useState } from "react";

import storeData from '../data/items.json'

type StoreItem = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function useGetStoreItems() {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState<StoreItem[]>([])
    
    async function getStoreItems() {
        setLoading(true)
        await setResults(storeData)
        setLoading(false)
    }
    
    useEffect(() => {
        getStoreItems()
    }, [])

    return {
        loading,
        results,
        getStoreItems
    }
}