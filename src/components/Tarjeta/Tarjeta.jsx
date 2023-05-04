import './Tarjeta.css'
export default function Tarjeta(props) {

    return (
        <div className="tarjeta">
          <img src={"./src/img/"+props.img+".jpg"} alt=""/>
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
          <h4 className="precio">{props.price}</h4>
          <div className="cantidad">
            <button className="cantidad__contador">-</button>
            <h4>3</h4>
            <button className="cantidad__contador">+</button>
          </div>
        </div>
    )
}