import React from 'react';
import toast from 'react-hot-toast';

const AllSellersDisplay = ({ buyerInfo, refetch }) => {

    //Handle Seller Verify
    const handleMakeVerify = id => {
        const makeVerify = {
            verify: "Verified"
        }
        fetch(`http://localhost:5000/sellerverify/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeVerify)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Verify")
                    refetch()
                }
            })
    }
    return (
        <div>
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
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                                <button onClick={() => handleMakeVerify(buyerInfo._id)} disabled={buyerInfo.verify === "Verified"} className={`text-white px-2 py-1  border-0 ${buyerInfo.verify === "Verified" ? 'bg-green-500' : 'bg-red-500'}`}>{buyerInfo.verify}</button>
                            </th>
                            <th>
                                <button className="btn bg-red-600 border-0 btn-xs hover:bg-red-900 text-white">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellersDisplay;