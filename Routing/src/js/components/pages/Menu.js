import { NavLink } from "react-router-dom"

export default function Menu({links}) {
    let hrefs = links.map(function(link){
        return <NavLink to={link.path} className={({isActive}) => (isActive ? 'active' : '')}> {link.title}</NavLink>;
    });

    return (
        <div className="menu">
            {hrefs}
            <NavLink to='/portfolio' className={({isActive}) => (isActive ? 'active' : '')}>Портфолио</NavLink>
        </div>
    )
    // return(
    //     <>
    //     {/* <div className='menu'>
    //         <a href='/'>Главная</a>
    //         <a href='/о нас'>О нас</a>
    //         <a href='/каталог'>Каталог</a>
    //     </div> */}
    //     </>
    // )
}