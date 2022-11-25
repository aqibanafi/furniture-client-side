import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllProductsDisplay = ({ product, refetch, deleteProduct, setDeleteProducts }) => {


    //Sweet Alert For Delete Review 
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn bg-red-500 font-bold hover:bg-primary border-0 text-white ml-5',
            cancelButton: 'btn border-0 bg-primary text-white font-bold hover:bg-gray-600'
        },
        buttonsStyling: false
    })
    //Handle Delete Review
    const handleDelete = id => {
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
                fetch(`http://localhost:5000/deleteproduct/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = deleteProduct.filter(singleReview => singleReview._id !== id)
                            setDeleteProducts(remaining)
                            toast.error("Product Deleted")
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
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Location</th>
                            <th>Official Price</th>
                            <th>Update Product</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w-10'>
                                {product.name}
                            </td>
                            <td>
                                {product.email}
                                <br />
                            </td>
                            <td>{product.location}</td>
                            <td>{product.officialPrice}</td>
                            <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                            <Link to='/dashbaord/editproduct/'><td><button>Update</button></td></Link>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProductsDisplay;