module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      username: {
        type: DataTypes.STRING,   
        unique:{
          msg: "Le nom est déjà pris."
        }     
      },
      userlib: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
      ,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
    },{
      freezeTableName: false
    })
  } 