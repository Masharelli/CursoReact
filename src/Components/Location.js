import React from 'react';


/*estos son breakpoint para que nos ayuden a ver que imprime   

console.log(props);
debugger;

*/
//al igual le puedes pasar el parametro directo a la arrotw functions
const Location = ({city}) =>{
    //Desctructuring tecnica, nombre
    
    /*Esta es otra forma
    const {city} = props;
   */

    /*valor del parametro que le paso de otro componente
    const city = props.city;
    */
return(
<div>
    <h1>
        {city}
    </h1>
</div>
)};

export default Location;