import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default function Menu() {

    const [menuList, setMenuList] = useState([]);
    async function getMenus() {
        const response = await axios.get('http://localhost:3001/getMenus');
        setMenuList(response.data);
    }

    useEffect(() => {
        getMenus();
    }, []);

    function generateRandomImageLink(searchTerm) {
        const randomImageLink = `https://source.unsplash.com/random/?sushi,${searchTerm}`;
        return randomImageLink;
    }

    return (
        <div>
            <h3 className='text-center text-2xl p-6'>Menus</h3>
            <div className='flex items-center justify-around w-3/4 mx-auto text-xl'>
                <h4>Lunchs</h4>
                <h4>Plateaux</h4>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-6'>
                {menuList.map((menu) => (
                    <Card id={menu.id}
                        image={generateRandomImageLink(menu.name)}
                        name={menu.name}
                        category={menu.category}
                        description={menu.description}
                        price={menu.price} />
                ))}
            </div>
        </div>
    )
}
