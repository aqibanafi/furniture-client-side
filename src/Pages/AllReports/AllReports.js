import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllReports = () => {

    const { data = [] } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reports')
            const data = res.json()
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
                                Product Name
                            </th>
                            <th>Seller</th>
                            <th>Product Quality</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(report => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.productName} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.seller}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {report.productQuality}
                                    <br />
                                </td>
                                <td>{report.message}</td>
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

export default AllReports;