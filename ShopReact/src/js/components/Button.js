// import { useState } from 'react';

// function Button({startCount, btnClass, step}) {
//    const [count, setCount] = useState(startCount);
//     // let buttonClass = 'btn-danger';

//     function handleClick() {
//       setCount(count + step);

//     // alert('You clicked me!');
//   }
//   return (
//     // <button className={buttonClass} onClick={handleClick}>Кнопка нажата {count} раз</button>
//     <button className={btnClass} onClick={handleClick}>Кнопка нажата {count} раз</button>
//   );
// }

// export default Button;


import { useState } from 'react';

function Button({startCount, btnClass, step}) {
    const [count, setCount] = useState(startCount);

    function handleClick() {
      setCount(count + step);
    } 

    return (
      <button className={btnClass} onClick={handleClick}>Кнопка нажата {count} раз</button>
    );
}

export default Button;