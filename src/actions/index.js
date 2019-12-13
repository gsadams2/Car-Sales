export const BUY_ITEM = "BUY_ITEM"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const buyItemAction = (props) => ({
    type: 'BUY_ITEM',
    payload: {
        price: props.feature.price,
        feature: props.feature.name,
        additionalFeatures: props.feature.name

    }
})


export const deleteFeatureAction = (props) => ({
    type: 'REMOVE_FEATURE',
    payload: {
        price: props.feature.price,
        feature: props.feature.name,
        additionalFeatures: props.feature.name

    }
})