/*1) Inserción y actualización de un registro.*/
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
class Ejercicio1 extends Model {}
Ejercicio1.init({
  idNumber:Sequelize.INTEGER,
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,  modelName: 'ejercicio1'});
                        
sequelize.sync()
  .then(() => Ejercicio1.create({
    idNumber:1,
    firstName: 'Miriam',
    lastName: 'Olson'
  }))
  .then(jane => {
    console.log(jane.toJSON());})
  .then(()=>actualizar());
 

  
//actualiza registro
const actualizar = () =>{
Ejercicio1.update({ firstName: "Corregido" }, {
  where: {
    idNumber:1
  }
}).then(() => {
  console.log("Modificado");
});
}