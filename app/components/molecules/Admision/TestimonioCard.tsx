import Thumb from "@/components/atoms/Thumb";
import { Picture } from "@/interfaces";


interface props {
    imagen: Picture;
    comentario: string;
    nombre: string;
    ocupacion: string;

}

const TestimonioCard = ({ imagen, comentario, nombre, ocupacion }: props) => {

    return (
        <article className="testimonioCard">
            <Thumb className="testimonioCard__perfil" full image={imagen} />

            <blockquote className="testimonioCard__comentario">
                <p>{comentario}</p>
            </blockquote>

            <footer className="testimonioCard__footer">
                <p className="testimonioCard__footer__text">
                    <strong className="testimonioCard__footer__text__name">{nombre}</strong>
                    <span className="testimonioCard__footer__text__job">{ocupacion}</span>
                </p>
            </footer>

        </article>
    )
}

export default TestimonioCard

