import FoodCard from '@/components/FoodCard';
import React from 'react';

const getFoods = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods',{cache : 'force-cache'})
    return res.json() ;
}

const FoodsPage = async () => {
    const data = await getFoods() ;
    // console.log(data) ;
    const foods = data.data ;
    console.log(foods) ;
    return (
        <div className='container mx-auto grid grid-cols-2 gap-5'>
            
        {
            foods.map((food) => (
                <FoodCard key={food.id} food ={food}/>
            ))
        }
        </div>
    );
};

export default FoodsPage;