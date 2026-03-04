/// <reference path="../../globals.d.ts" />

import {createRoot} from 'react-dom/client';
import Table from './components/Table';

const tableElement: HTMLElement = document.getElementById('table');

const root: any = createRoot(tableElement);



const products: Array<Product> = [
    {id: 1, name: 'Tovar1', count: 10, price: 11},
    {id: 2, name: 'Tovar2', count: 11, price: 22},
    {id: 3, name: 'Tovar3', count: 12, price: 33},
    {id: 4, name: 'Tovar4', count: 13, price: 44},
    {id: 5, name: 'Tovar5', count: 5, price: 5},
    {id: 6, name: 'Tovar6', count: 6, price: 6},
    {id: 7, name: 'Tovar7', count: 7, price: 7},
    {id: 8, name: 'Tovar8', count: 8, price: 8},
    {id: 9, name: 'Tovar9', count: 9, price: 9},
    {id: 10, name: 'Tovar10', count: 10, price: 292},   
    {id: 11, name: 'Tovar11', count: 107, price: 262},
    {id: 12, name: 'Tovar12', count: 310, price: 232},
    {id: 13, name: 'Tovar13', count: 150, price: 252},
    {id: 14, name: 'Tovar14', count: 160, price: 202},
    {id: 15, name: 'Tovar15', count: 180, price: 262},
    {id: 16, name: 'Tovar16', count: 180, price: 222},
    {id: 17, name: 'Tovar17', count: 150, price: 62},
    {id: 18, name: 'Tovar18', count: 107, price: 227},
    {id: 19, name: 'Tovar19', count: 107, price: 52},
    {id: 20, name: 'Tovar20', count: 104, price: 32}
]

root.render(<Table products={products}/>);