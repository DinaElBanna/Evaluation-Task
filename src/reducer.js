
const initialRecords = {
    records: [
        {
            id: 1,
            date: "Mon,Jun 10,2019",
            param: [
                {
                    id: 10,
                    name: "[001]Toyota Avanza",
                    image: "image4.png",
                    state: "Active",
                    time: "10:23 AM",
                    totalDistance: 17.845,
                    volume: 123.35,
                    cost: "Rp 625.000",
                    costPerItr: "Rp 9,879/Itr"
                },
                {
                    id: 11,
                    name: "[005]Daihatsu Xenia",
                    image: "image2.png",
                    state: "In shop",
                    time: "09:34 PM",
                    totalDistance: 20.201,
                    volume: 170.30,
                    cost: "Rp 950.000",
                    costPerItr: "Rp 10,200/Itr"
                }
            ]
        },
        {
            id: 2,
            date: "Mon,Jun 09,2019",
            param: [
                {
                    id: 13,
                    name: "[001]Toyota Avanza",
                    image: "image4.png",
                    state: "Active",
                    time: "10:23 AM",
                    totalDistance: 17.845,
                    volume: 123.35,
                    cost: "Rp 625.000",
                    costPerItr: "Rp 9,879/Itr"
                },
                {

                    id: 14,
                    name: "[005]Daihatsu Xenia",
                    image: "image2.png",
                    state: "In shop",
                    time: "09:34 PM",
                    totalDistance: 20.201,
                    volume: 170.30,
                    cost: "Rp 950.000",
                    costPerItr: "Rp 10,200/Itr"
                },
                {
                    id: 15,
                    name: "[001]Toyota Avanza",
                    image: "image4.png",
                    state: "Active",
                    time: "10:23 AM",
                    totalDistance: 17.845,
                    volume: 123.35,
                    cost: "Rp 625.000",
                    costPerItr: "Rp 9,879/Itr"
                },
            ]
        },
        {
            id: 3,
            date: "Mon,Jun 8,2019",
            param: [
                {
                    id: 16,
                    name: "[001]Toyota Avanza",
                    image: "image4.png",
                    state: "Active",
                    time: "10:23 AM",
                    totalDistance: 17.845,
                    volume: 123.35,
                    cost: "Rp 625.000",
                    costPerItr: "Rp 9,879/Itr"
                }
            ]
        },
    ]
}
export function secondLevelReducer(state =[], action){
    console.log("state " + JSON.stringify(...state))
    return {

        ...state,
        param:{
            ...state.param,
            records:state.param.filter(s => s.id != action.payload)

        }

      
    }
}

export function reducer (state = initialRecords, action) {
    switch (action.type) {
        case "DELETE":
            
            return{
                
                ...state,
                param:{
                    ...state.records,
                    param: secondLevelReducer(state.records, action)

                }
              
                
            }

        case "EDIT":
            return {
                records: state.records
            };
        default:
            return state
    }

}