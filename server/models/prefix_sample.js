module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Sample', {
        sample_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: "The unique identifier of a sample"
        },
        sample_acronym: {
            type: DataTypes.STRING(10),
            allowNull: true,
            comment: "The used acronym of the sample"
        },
        sample_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            comment: "The complete name of the sample"
        },
        sample_geocoded_address: {
            type: "POINT",
            allowNull: true,
            comment: "The geocoded address of the sample, as a point with latitude and longitude attributes"
        }
    }, {
        tableName: 'prefix_sample'
    });
};