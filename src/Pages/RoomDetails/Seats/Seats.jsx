import React from 'react';
import SeatItem from './SeatItem';

const Seats = ({data , loadedData}) => {
   

    return (
         <div className="container mx-auto max-w-screen-lg">
        <div className="w-full overflow-x-auto">
            <table className="min-w-full border rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-2 text-center">Room Number</th>
                        <th className="px-4 py-2 text-center">Status</th>
                        <th className="px-4 py-2 text-center">Price</th>
                        <th className="px-4 py-2 text-center">Input</th>
                        <th className="px-4 py-2 text-center">Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value,num)  =>  <SeatItem key={num} loadedData={loadedData} num={num} data={value} style={'bg-gray-100'}></SeatItem>)
                    }
                   
                </tbody>
            </table>
        </div>
    </div>

    );
};

export default Seats;