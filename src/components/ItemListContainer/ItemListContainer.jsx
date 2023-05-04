import Tarjeta from "../Tarjeta/Tarjeta"
import './ItemListContainer.css'
export default function IntemListContainer(props) {

    return (
        <main>
        <h1>{props.greeting}</h1>
        <Tarjeta img="2Personas" title="Cena 2 personas" description="Esta romantica comida hara que enamores a la persona a quien invitas. Podras comer desde la mejor carne a el mejor postre" price="2000$"/>
        </main>
    )
}