module.exports = (sequelize, DataTypes) => {
    return sequelize.define('FAQ', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    question: {
        type: DataTypes.STRING,
        allowNull: false
      } 
    
    ,answer: {
        type: DataTypes.STRING,
        allowNull: false
    } 
    ,productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
    ,picture: {
      type: DataTypes.STRING,
      allowNull: true
    } 
    ,pdfId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
    ,nation: {
      type: DataTypes.STRING,
      allowNull: true
    }
    },{
      //freezeTableName: true,
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