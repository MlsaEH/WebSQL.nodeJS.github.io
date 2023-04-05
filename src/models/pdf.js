module.exports = (sequelize, DataTypes) => {
    return sequelize.define('pdf', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
    ,filename: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,pdf: {
      type: DataTypes.BLOB('long'),
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
//Requete SQL
//INSERT INTO pdfs (created,pdf)
//SELECT '20230310', BulkColumn
//FROM OPENROWSET(BULK 'C:\temp\fichier.pdf', SINGLE_BLOB) as pdf