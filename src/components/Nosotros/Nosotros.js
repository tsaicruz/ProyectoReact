import "./Nosotros.scss"
import Imagen1 from './imagen1.jpg'
import Imagen2 from './imagen2.jpg'
import Imagen3 from './imagen3.jpg'

const Nosotros = () => {
        return (
          <div className='my-5' > 
          <h2>NOS INTERESA TU MASCOTA!</h2>
          <div className="box1">
            <img src={Imagen1} alt="Imagen de mascota y su dueño"/>
            <p><strong>En nuestro emprendimiento de mascotas, nos apasiona brindarle a tus compañeros peludos la mejor atención y cuidado. Ofrecemos una variedad de servicios para satisfacer todas sus necesidades, desde el cuidado diario en nuestra guardería para mascotas, hasta el entrenamiento personalizado para ayudarlos a alcanzar su máximo potencial. Además, contamos con una amplia gama de productos de alta calidad para asegurarnos de que tu mascota reciba los mejores alimentos, juguetes y accesorios. Nuestro equipo de expertos en mascotas está dedicado a proporcionar un ambiente seguro, feliz y acogedor para tu amigo de cuatro patas, ¡y nos aseguramos de que siempre se sientan como en casa!{/*  */}</strong></p>
          </div>
          <div className="box2">
            <img src={Imagen2} alt="Imagen de mascota y su dueño" />
            <p><strong>Cuidar a tus mascotas es importante porque son miembros valiosos de tu familia. Además de brindarte compañía y amor incondicional, tus mascotas dependen de ti para satisfacer sus necesidades básicas, como una alimentación adecuada, agua fresca, un refugio cómodo y atención veterinaria regular. También necesitan ejercicio diario, estimulación mental y amor y afecto por parte de sus dueños. Si no se les brinda un cuidado adecuado, las mascotas pueden sufrir de enfermedades, malnutrición, comportamientos no deseados y problemas emocionales. Además, un cuidado inadecuado de las mascotas puede tener un impacto negativo en la salud y seguridad de tu hogar y comunidad. En resumen, cuidar a tus mascotas no solo es importante para su bienestar físico y emocional, sino que también es tu responsabilidad como dueño responsable y amante de los animales.</strong></p>         
          </div>
          <div className="box3">
            <img src={Imagen3} alt="Imagen de mascota y su dueño"/>
            <p><strong>Comprar comida de alta calidad para tu mascota es esencial para mantener una buena salud y bienestar general. Los alimentos de calidad contienen los nutrientes necesarios para apoyar la salud y el crecimiento óptimo de tu mascota, lo que puede ayudar a prevenir enfermedades y aumentar su esperanza de vida.

Al elegir alimentos de alta calidad, debes buscar aquellos que estén diseñados específicamente para las necesidades nutricionales de tu mascota, basados en su edad, tamaño, raza y nivel de actividad. Los alimentos de alta calidad utilizan ingredientes de mejor calidad, lo que puede ayudar a prevenir alergias alimentarias, problemas digestivos y otros problemas de salud relacionados.

Además, al comprar alimentos de calidad, puedes estar seguro de que estás proporcionando a tu mascota una dieta equilibrada y completa. Los alimentos de calidad a menudo contienen proteínas de alta calidad, vitaminas y minerales esenciales, y pueden ser libres de aditivos, conservantes y otros ingredientes no deseados.

En resumen, la compra de alimentos de calidad para tu mascota es esencial para su salud y bienestar general. Una dieta equilibrada y completa puede ayudar a prevenir enfermedades y mantener a tu mascota en buena forma física y mental a largo plazo.</strong></p>
          </div>        
          </div>

        );

      }
      
      export default Nosotros;