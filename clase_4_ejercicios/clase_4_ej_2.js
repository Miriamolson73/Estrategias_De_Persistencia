/*2) inserción y eliminación de un registro.*/
const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



const Model = Sequelize.Model;
class Ej2 extends Model {}
Ej2.init({
  idNumber:Sequelize.INTEGER,
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {  sequelize,  modelName: 'ejercicio2'});
                        
sequelize.sync()
  .then(() =>  Ej2.create({
    idNumber:2,
    firstName: 'Susana',
    lastName: 'Pereyra'}))
  .then(jane => {
    console.log(jane.toJSON());})
     
  
  .then(() =>  eliminar())




// con funciones corre pero no los pude sincornizar
 const crear  =()=> {
  
    Ej2.create({
      idNumber:2,
      firstName: 'Susana',
      lastName: 'Pereyra'})
    .then(jane => {
      console.log(jane.toJSON());})
    } 

 /* async function eliminar(){
    try{
      Ej2.destroy({
        where: {   idNumber:2  } })
     }
     catch(err){
       console.log("no se borró")
     }
    }*/
  
 const eliminar = () =>{
   Ej2.destroy({
    where: {   idNumber:2  } })
  
  .then(() => {console.log("Elimine Registro");  });
  
 }
