import  produceData  from '../mockData/produce.json'


const POPULATE = 'produce/POPULATE';


export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData    
    }
}



export default function producerReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            console.log('action', action)
            console.log('state', state)
            return { ...state, ...action.produce}
        default:
            return state;
    }
}