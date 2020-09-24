import React from 'react'

const EffectsContext = React.createContext({})

export const EffectsProvider = EffectsContext.Provider
export const EffectsConsumer = EffectsContext.Consumer
export default EffectsContext