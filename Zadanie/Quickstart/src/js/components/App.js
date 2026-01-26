import Counter from './Counter';
import Paragraph from './Paragraph';
import Button from './Button';
import Title from './Title';
import Card from './Card';

const products = [
    {id:1, name:'Название товара 1', image: 'https://flowertimes.ru/wp-content/uploads/2021/10/buk-derevo.jpg', text: 'какой-то текст'},
    {id:2, name:'Название товара 2', image: 'https://flowertimes.ru/wp-content/uploads/2021/10/buk-derevo.jpg', text: 'какой-то текст'},
    {id:3, name:'Название товара 3', image: 'https://flowertimes.ru/wp-content/uploads/2021/10/buk-derevo.jpg', text: 'какой-то текст'},
    {id:4, name:'Название товара 4', image: 'https://flowertimes.ru/wp-content/uploads/2021/10/buk-derevo.jpg', text: 'какой-то текст'},
];

function App () {
    const tovary = products.map((product) => {
        return(
            <Card key={product.id} title={product.name} image={{src: product.image, alt: product.name}}>
            {product.text}
        </Card>
        )
    });


    return (
        <>
        <Counter />
        <Button label='Нажми меня!' handClick={() => alert('Кнопка нажата!')}  />
        <Title level={1} text={'Это заголовок'}/>
        {tovary}
        </>
    )
}

 export default App;




// function App() {
//     return (
//     <>
//     <Paragraph>
//         hjhjjjhj rgrgkgfj dlfgff ldfkflgkflgkflgk f;gk;fkg;flg
//     </Paragraph>
//     <Paragraph>
//         hjhjjjhj rgrgkgfj dlfgff ldfkflgkflgkflgk f;gk;fkg;flg
//     </Paragraph>
//     {/* <button disabled={null}>кнопка</button> */}
//     </>
    
//     );
// }

// export default App;