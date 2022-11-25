import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Sellers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Role</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(buyerInfo => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={buyerInfo.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{buyerInfo.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {buyerInfo.name}
                                    <br />
                                </td>
                                <td>{buyerInfo.location}</td>
                                <td>{buyerInfo.role}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;