import React from 'react'

const InventoryContext = React.createContext({})

export const InventoryProvider = InventoryContext.Provider
export const InventoryConsumer = InventoryContext.Consumer
export default InventoryContext