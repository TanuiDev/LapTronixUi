import lapTop from '../../assets/images/laptop.jpeg'
import headPhones from  '../../assets/images/headPhones.jpeg'
import monitor from  '../../assets/images/monitor.jpeg'

const Featured = () => {
    const featuredProducts =[
        {
            id: 1,
            name: "Premium Laptop Pro",
            price: "Ksh33,299",
            image:  lapTop       
        },
         {
            id: 1,
            name: "Wireless Headphones",
            price: "Ksh1,299",
            image:  headPhones      
        }, {
            id: 1,
            name: "4K Monitor Ultra",
            price: "Ksh8,299",
            image:  monitor       
        }
    ]

  return (
    <>
        <h2 className="text-4xl font-bold text-primary pt-5 text-center mb-5">Featured Products</h2> 

        <div className='w-full md: flex items-center justify-between gap-4 mt-3 p-5'>
            {
                featuredProducts.map((product)=>(
                    <div key={product.id} className='card  bg-blue-50  shadow-sm items-center pb-3  space-y-4'>
                        
                        <img src={product.image}  alt="Laptop" className='w-100 h-70 object-cover ' />                        
                        <h2 className='text-slate-900 text-2xl font-bold'>{product.name}</h2>
                        <h3 className='text-slate-700 text-1xl'>{product.price}</h3>

                        <button className="btn btn-active  w-3/4 btn-primary ">Add to Cart</button>
                    </div>
                ))
            }
        </div>             
    </>
  )
}

export default Featured
