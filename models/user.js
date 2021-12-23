

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {firstName:DataTypes.STRING,lastName:DataTypes.STRING});
  
    User.associate = (models) => {
    //   User.hasMany(models.group);
    };
    return User;
  }

  