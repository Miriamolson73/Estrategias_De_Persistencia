/*3) inserción y actualización de varios registros */
const { dir } = require('console');
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
class Ej3 extends Model {}
Ej3.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,  modelName: 'ejercicio3'});
                        
sequelize.sync()
  .then(() => crearusuario())
  .then(()  => modificar());
 

const crearusuario =()=>{
  Ej3.create({
    firstName: 'Miriam',
    lastName: 'Zarate'}
    
  )
  .then(jean => {
    console.log("datos cargados",jean.toJSON())})
  }



// ELIMINAR 
const modificar = () =>{
    Ej3.update({ firstName: "Zxxxxx" }, {
        where: {
          lastName: 'Zarate'
        }
      }).then(() => {
        console.log("Done");
      });
    }      
    
   