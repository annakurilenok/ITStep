import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Menu from './pages/Menu';
import Portfolio from './pages/Portfolio';
import Sites from './pages/Sites';

function App() {
    let urls = [
        {path: '/', element: <Main />},
        {path: '/о нас', element: <About />},
        {path: '/каталог', element: <Catalog />},
    ];

    let routes = urls.map(url => {
        return(<Route path={url.path} element={url.element} />)
    })
    return(
        <>
            
            <BrowserRouter>
            <Menu links={urls} />
                <Routes>
                    {routes}
                    <Route path='/portfolio' element={<Portfolio />}>
                        <Route path='sites' element={<h2>Cайты</h2>}/>
                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                    {/* <Route path='/' element={<Main />} />
                    <Route path='/о нас'element={<About />} />
                    <Route path='/каталог' element={<Catalog />} />
                    <Route path='/*' element={<NotFound />} /> */}
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;