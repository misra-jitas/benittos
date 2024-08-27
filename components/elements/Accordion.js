/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

<div className="accordion" id="accordionFAQ">
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
            <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>1. ¿Qué es la consultoría en la nube y por qué mi empresa podría necesitarla?</button>
        </h2>
        <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">La consultoría en la nube es un servicio que ayuda a las empresas a planificar, implementar y gestionar su migración a la nube. Puede ser necesario para aprovechar los beneficios de la nube, como la escalabilidad y la eficiencia.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
            <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>2. ¿Cuáles son los principales beneficios de migrar a la nube?</button>
        </h2>
        <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body"><p>La migración a la nube ofrece varios beneficios clave para las empresas:</p>

<ul>
  <li><strong>Reducción de Costos:</strong> Al migrar a la nube, elimina la necesidad de invertir en infraestructura costosa en las instalaciones, como servidores y centros de datos. En su lugar, paga por los recursos que realmente utiliza, lo que puede resultar en ahorros significativos.</li>

  <li><strong>Escalabilidad:</strong> La nube le permite escalar sus recursos de manera rápida y sencilla según sus necesidades. Puede aumentar o disminuir la capacidad de almacenamiento, la potencia de procesamiento y otros recursos de manera flexible.</li>

  <li><strong>Accesibilidad desde cualquier lugar:</strong> Con la nube, sus datos y aplicaciones están disponibles en línea, lo que facilita el acceso desde cualquier lugar y desde dispositivos con conexión a Internet. Esto promueve la colaboración y la productividad.</li>

  <li><strong>Mejora de la Seguridad de Datos:</strong> Los proveedores de servicios en la nube implementan medidas de seguridad avanzadas, como el cifrado de datos y la autenticación de usuarios, para proteger sus datos. Esto puede ser más efectivo que administrar la seguridad por sí mismo.</li>

  <li><strong>Copia de Seguridad y Recuperación Simplificadas:</strong> La nube ofrece soluciones eficientes de copia de seguridad y recuperación de datos. Sus datos se respaldan automáticamente y puede restaurarlos en caso de fallos o pérdida de datos.</li>

  <li><strong>Actualizaciones y Mantenimiento Automatizados:</strong> Los proveedores de servicios en la nube se encargan de las actualizaciones de software y el mantenimiento de la infraestructura, liberándole de esa carga.</li>
</ul>

<p>En resumen, la migración a la nube puede mejorar la eficiencia operativa, reducir costos, aumentar la flexibilidad y mejorar la seguridad de los datos, lo que la convierte en una opción atractiva para muchas empresas.</p>
</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
            <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>3. ¿Cuáles son los riesgos potenciales de la adopción de la nube?</button>
        </h2>
        <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">Los riesgos pueden incluir la seguridad de datos, el tiempo de inactividad no planificado y la dependencia de proveedores de servicios en la nube. Un consultor en la nube puede ayudar a mitigar estos riesgos.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
            <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>4. ¿Qué servicios de consultoría en la nube ofrecen para la migración?</button>
        </h2>
        <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body"><p>4. ¿Qué servicios de consultoría en la nube ofrecen para la migración?</p>

<p>Ofrecemos una amplia gama de servicios de consultoría en la nube que van más allá de la simple migración. Nuestros servicios incluyen:</p>

<ul>
  <li><strong>Implementación de Culturas Ágiles:</strong> Aceleramos la entrega de proyectos mediante la implementación de culturas ágiles, lo que mejora la colaboración y la eficiencia de los equipos de trabajo.</li>

  <li><strong>Prácticas de DevOps:</strong> Adoptamos prácticas de DevOps para mejorar la colaboración entre los equipos de desarrollo y operaciones, lo que resulta en un ciclo de desarrollo más rápido y eficiente.</li>

  <li><strong>Gestión Integral de Proyectos en la Nube:</strong> Proporcionamos servicios completos de gestión de proyectos en la nube para garantizar una implementación exitosa y una operación continua sin problemas.</li>
</ul>

<p>Estos son solo algunos ejemplos de los servicios que ofrecemos para facilitar su migración a la nube y maximizar los beneficios que puede obtener de ella.</p>
</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
            <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>5. ¿Cómo se elige entre una nube pública, privada o híbrida?</button>
        </h2>
        <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">La elección depende de las necesidades específicas de su empresa. Una nube pública es económica, una privada ofrece más control y una híbrida combina ambas opciones.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(6)}>
            <button className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>6. ¿Cómo garantizan la seguridad de mis datos en la nube?</button>
        </h2>
        <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">Implementamos medidas de seguridad avanzadas, como cifrado de datos, autenticación de usuarios y monitoreo constante para proteger sus datos en la nube.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(7)}>
            <button className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>7. ¿Cuáles son los costos asociados con la consultoría en la nube?</button>
        </h2>
        <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">Los costos varían según el alcance del proyecto, pero generalmente incluyen tarifas de consultoría y los gastos de migración y mantenimiento en la nube.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(8)}>
            <button className={isActive.key == 8 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>8. ¿Ofrecen capacitación para nuestro equipo durante la transición a la nube?</button>
        </h2>
        <div className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">Sí, proporcionamos capacitación personalizada para asegurarnos de que su equipo esté preparado para utilizar eficazmente los servicios en la nube.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(9)}>
            <button className={isActive.key == 9 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>9. ¿Cómo se realiza el monitoreo y la gestión continua de nuestra infraestructura en la nube?</button>
        </h2>
        <div className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
        ```
<div className="accordion-body">Utilizamos herramientas de monitoreo en tiempo real y ofrecemos soporte constante para garantizar un rendimiento óptimo y resolver cualquier problema que surja.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" onClick={() => handleToggle(10)}>
            <button className={isActive.key == 10 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>10. ¿Cuáles son los pasos iniciales para comenzar con la consultoría en la nube?</button>
        </h2>
        <div className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
            <div className="accordion-body">El primer paso es una consulta inicial para comprender sus necesidades y objetivos. A partir de ahí, desarrollamos un plan personalizado para su migración a la nube.</div>
        </div>
    </div>
</div>
```


        </>
    )
}

export default Accordion;