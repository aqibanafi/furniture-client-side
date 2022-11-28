import React from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AllBuyersDisplay = ({ buyerInfo, refetch, setDeleteProducts, deleteProduct }) => {

    //Sweet Alert For Delete Review 
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn bg-red-500 font-bold hover:bg-primary border-0 text-white ml-5',
            cancelButton: 'btn border-0 bg-primary text-white font-bold hover:bg-gray-600'
        },
        buttonsStyling: false
    })

    //Handle Delete Product

    const handleDelete = id => {
        console.log(id)
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result)
                fetch(`https://the-personal.vercel.app/deleteuser/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('thePersonal')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = deleteProduct.filter(singleReview => singleReview._id !== id)
                            setDeleteProducts(remaining)
                            toast.error(`${buyerInfo.name} is Deleted!`)
                            refetch()
                        }
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Role</th>
                        <th>Details</th>
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
                            </div>
                        </td>
                        <td>{buyerInfo.name}</td>
                        <td>
                            {buyerInfo.email}
                            <br />
                        </td>
                        <td>{buyerInfo.location}</td>
                        <td>{buyerInfo.role}</td>
                        <td><button onClick={() => handleDelete(buyerInfo._id)} className="btn bg-red-600 border-0 hover:bg-red-800 text-white btn-xs">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyersDisplay;