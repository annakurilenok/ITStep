import Header from './components/Heder';
import {List} from './MainPage';

function ListPunct() {
      const tasks = [
  { title: 'Встать в 5.00', isFruit: false, id: 1 },
  { title: 'Заглянуть в план задач', isFruit: false, id: 2 },
  { title: 'Выучить JavaScript', isFruit: true, id: 3 },
];

    return (<div className="todo">
        <Header headerTegName="h1" headerText= "Список задач"/>
    </div>);

    
}


export default ListPunct;