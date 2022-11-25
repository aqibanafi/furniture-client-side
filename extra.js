//Handle Edit Products
const handleEditProduct = event => {
    event.preventDefault()
    const form = event.target;

    const name = form.productname.value;
    const email = form.email.value;
    const location = form.location.value;
    const resealablePrice = form.resealablePrice.value;
    const originalPrice = form.originalPrice.value;
    const yearOfUse = form.yearOfUse.value;
    const postTime = form.postTime.value;
    const sellersName = form.sellersName.value;

    const products = {
        name,
        email,
        picture,
        location,
        resealablePrice,
        originalPrice,
        yearOfUse,
        postTime,
        sellersName
    }
    fetch(`http://localhost:5000/myproducts/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(products)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success("Product Successfully Edited")
            }
        })
}


<form>
    <input type="text" name='productname' defaultValue={name} className="input input-bordered w-full mb-5" />
    <input type="text" name='location' defaultValue={location} className="input input-bordered w-full mb-5" />
    <input type="text" name='resealablePrice' defaultValue={resealablePrice} className="input input-bordered w-full mb-5" />
    <input type="text" name='originalPrice' defaultValue={originalPrice} className="input input-bordered w-full mb-5" />
    <input type="text" name='yearOfUse' defaultValue={yearOfUse} className="input input-bordered w-full mb-5" />
    <input type="text" name='postTime' defaultValue={postTime} className="input input-bordered w-full mb-5" />
    <input type="text" name='sellersName' defaultValue={sellersName} className="input input-bordered w-full mb-5" />
</form>