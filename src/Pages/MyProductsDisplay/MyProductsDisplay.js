import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Taka from '../../assets/icons/taka.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { RevolvingDot } from 'react-loader-spinner';

const MyProductsDisplay = ({ products }) => {

    const { user } = useContext(AuthContext);

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        if (isLoading) {
            <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        }
    }

    const [deleteProduct, setDeleteProducts] = useState(data)
    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName, _id } = products;

    //Handle of Changing Sold 
    const handleMakeSold = id => {
        const status = {
            status: "Sold"
        }

        fetch(`http://localhost:5000/makesold/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Status Changed")
                }
            })
    }

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

    //Handle Make Advertise
    const handleAdvertise = id => {
        const makeAdvertise = {
            advertiseStatus: "Advertised"
        }

        fetch(`http://localhost:5000/makeadvertise/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeAdvertise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Status Changed")
                    refetch()
                }
            })
    }
    return (
        <div>
            <div>
                {
                    data.map(product => <div className='shadow-xl p-10 rounded-lg bg-accent w-[400px] mb-5'>
                        <img className='w-80 mb-5 rounded-xl' src={picture} alt="" />
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl font-semibold text-primary mb-5'>{name}</p>
                            <button onClick={() => handleMakeSold(_id)} disabled={product.status === "Sold"} className={`px-5 py-2 text-white ${`product.status ? "Sold" bg-green-500 : bg-red-500`} `}>{products.status}</button>
                        </div>
                        <p className='mb-1'>Location: <span className='font-semibold'>{location}</span></p>
                        <p className='flex mb-1'>Resale Price: <span className='flex items-center ml-2 font-semibold'>{resealablePrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
                        <p className='flex mb-1'>Original Price: <span className='flex items-center ml-2 font-semibold'>{originalPrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
                        <p className='mb-1'>Year of Uses: <span className='font-semibold'>{yearOfUse}</span></p>
                        <p className='mb-1'>Posted: <span className='font-semibold'>{postTime}</span></p>
                        <p>Seller Name: <span className='font-semibold'>{sellersName}</span></p>
                        <div className='flex gap-10 mt-10'>
                            <Link to='/dashbaord/editproduct/'><button className="btn btn-active">Edit</button></Link>
                            <button onClick={() => handleAdvertise(_id)} className={`btn btn-success ${`bg-green-700 text-white`}`} disabled={product.advertiseStatus === "Advertised"}>Advertise</button>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>

                        </div>
                    </div>)
                }
            </div>

        </div>

    );
};

export default MyProductsDisplay;