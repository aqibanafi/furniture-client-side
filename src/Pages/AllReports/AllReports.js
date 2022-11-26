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
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Products Report ({data.length})</h1>
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
                                    {report.productName}
                                </td>
                                <td>
                                    {report.seller}
                                </td>
                                <td>
                                    <p className={`${report.productQuality === "Excellent" && 'bg-green-600 text-center p-2 text-white'} ${report.productQuality === "Not Recommended" && "Bad" && 'bg-red-600 text-center p-2 text-white'} ${report.productQuality === "Good" && "Average" && 'bg-yellow-500 text-center p-2 text-white'}`}>{report.productQuality}</p>
                                    <br />
                                </td>
                                <td>{report.message}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReports;