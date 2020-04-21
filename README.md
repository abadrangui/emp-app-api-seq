# # АЖИЛТНЫ АЖЛЫН ҮНЭЛГЭЭНИЙ СИСТЕМ

## Танилцуулга

Энэ хэсгийг Тэргэл та бичиж оруулна

## Систем суулгахад шаардлагай зүйлс 

1. Node суулгасан байх 
2. MySql || PostgreSql-ийн аль нэгийг нь суулгасан байх 

## Вебийг ажиллуулах

Энэхүү төслийг татаж авсны дараагаар тухайн directory дотор дараах коммандуудыг уншуулж эхлүүлнэ.
1. `yarn` || `npm install` dependencies суулгах

үүний дараагаар `config/config.json` файлын dev хэсгийн host, database, username, password-ийг тохируулах

2. `npx sequelize db:create` database үүсгэх

3. `npx sequelize db:migrate` database-ын table-уудыг үүсгэх

4. `npx sequelize db:seed:all` database-д seed дата суулгах

5. `yarn dev` || `npm run dev` прожектийг эхлүүлэх

*болохгүй байвал `node app.js` -ээр эхлүүлж болно.