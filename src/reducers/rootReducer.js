import {
    BUY_ITEM, 
    REMOVE_FEATURE
} from '../actions'



const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            let addedFeatures = state.additionalFeatures.filter(item => {
                return item.name === action.payload.feature
            })
            let subtractedFeatures = state.additionalFeatures.filter(item => {
              return item.name !== action.payload.additionalFeatures 
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                  price: state.car.price,
                  features: [...state.car.features].concat(addedFeatures)
                },
                additionalFeatures: subtractedFeatures
            };
        case REMOVE_FEATURE:
            let featuresToRemove = state.car.features.filter(item => {
              return item.name === action.payload.feature
          })
          let remainingFeatures = state.car.features.filter(item => {
            return item.name !== action.payload.additionalFeatures 
          })
          return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                  price: state.car.price,
                  features: remainingFeatures
                },
                additionalFeatures: [...state.additionalFeatures].concat(featuresToRemove)
          };
        default:
          return state;
      }
    }


export default rootReducer;