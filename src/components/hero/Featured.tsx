import lapTop from '../../assets/images/laptop.jpeg'

const Featured = () => {
    const featuredProducts =[
        {
            id: 1,
            name: "Premium Laptop Pro",
            price: "$1,299",
            image:  lapTop       
        },
         {
            id: 1,
            name: "Premium Laptop Pro",
            price: "$1,299",
            image:  lapTop       
        }, {
            id: 1,
            name: "Premium Laptop Pro",
            price: "$1,299",
            image:  lapTop       
        }
    ]

  return (
    <>
        <h2 className="text-4xl font-bold text-primary pt-5 text-center mb-5">Featured Products</h2> 
        <div className='w-full md: flex items-center justify-between gap-4 mt-3'>
            {
                featuredProducts.map((product)=>(
                    <div key={product.id} className='card w-full md:flex bg-blue-50  shadow-sm items-center pb-3  space-y-4'>
                        
                        <img src={product.image}  alt="Laptop" className='w-100 h-40 object-cover ' />
                        
                        <h2 className='text-slate-900 text-2xl font-bold'>{product.name}</h2>
                        <h3 className='text-slate-700 text-1xl'>{product.price}</h3>
                        <button className="btn btn-active btn-primary">Primary</button>
                    </div>
                ))
            }
        </div>             
    </>
  )
}

export default Featured
