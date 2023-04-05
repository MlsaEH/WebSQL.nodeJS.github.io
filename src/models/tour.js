module.exports = (sequelize, DataTypes) => {
    return sequelize.define('T_Tourne', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //     },
    toucode: {
        type: DataTypes.STRING,
        allowNull: false
      },
    toulib: {
        type: DataTypes.STRING,
        allowNull: false
      } 
      ,
    toujou: {
        type: DataTypes.INTEGER,
        allowNull: false
      } 
    },{
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
    // }, {
    //   timestamps: true,
    //   createdAt: 'created',
    //   updatedAt: false
    // })
  }