const express = require('express');  
const multer = require('multer');  
const upload = multer({ dest: 'stolen-photos/' }); // Папка для фото  
const app = express();  

app.post('/upload', upload.single('file'), (req, res) => {  
    console.log('Фото сохранено:', req.file.filename);  
    res.send('успех 🚀');  
});  

app.listen(3000, () => console.log('Сервер в сети на порту 3000'));  