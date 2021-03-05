import react from 'react'
import { Redirect } from 'react-router-dom'

const tripData=[
    {
    id:"1",
    depature: "Nyagatare",
    destination: 'Kigali',
    status : 'alived',
    action: <button>delete</button>
    },

    {
        id:"2",
        depature: "Musanze",
        destination: 'Rwamagana',
        status : 'depatured',
        action: <button>delete</button>
        
    }
]

const ViewTrips =()=>{
    return(
        <div className="viewTrips">
       <table border="1">
        <thead>
        <tr>
        <td>ID</td>
        <td>Depature</td>
        <td>Destination</td>
        <td>Status</td>
        <td>Action</td>
        </tr>
        </thead>
        <tbody>
         {tripData.map((trip)=>{
            return (
                <tr key={trip.id}>
                    <td>{trip.id}</td>
                    <td>{trip.depature}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.status}</td>
                    <td>{trip.action}</td>
                </tr>
            )
         })}
            </tbody>

       </table>
        </div>
    )
}

export default ViewTrips