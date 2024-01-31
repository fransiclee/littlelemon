import React from 'react';
import recipes from '../recipes'
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder = (id)=>{
        Swal.fire({
            title: "Are you sure you want to order this item?",
            text: "Click yes to confirm the order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your food has been ordered.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className='menu-container'>
            <div className='Menu-header'>
                <h2>This weeks Specials!</h2>
                <button>Order Menu</button>
            </div>
            {/* menu cards */}
            <div className='cards'>
                {
                    recipes.map(recipe =><div key = {recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn' onClick={()=>handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default Menu;