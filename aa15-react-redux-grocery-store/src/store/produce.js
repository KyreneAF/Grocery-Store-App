import  produceData  from '../mockData/produce.json'
console.log(produceData)

const POPULATE = 'produce/POPULATE';


export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData    
    }
}



export default function producerReducer(state = {}, action) {
    console.log('action', action)
    switch (action.type) {
        case POPULATE:
    console.log('state', state)
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState;
        default:
            return state;
    }
}