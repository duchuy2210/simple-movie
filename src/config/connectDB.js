const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

//KHI DÙNG POSTGRES thì phải cài thưu viện node-postgres --> npm pg

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions:
      process.env.DB_SSL === 'true'
        ? {
            ssl: {
              require: true,
              // Tùy chọn để vô hiệu hóa kiểm tra xác thực chứng chỉ
              rejectUnauthorized: false,
            },
          }
        : {},
    //KẾT QUẢ TRẢ RA SẼ LÀ 1 MẢNG ĐỐI TƯỢNG JAVASCRIPT
    query: {
      raw: true,
    },
    timezone: '+07:00',
  }
);

//TEST CONNECTION
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
export default connectDB;