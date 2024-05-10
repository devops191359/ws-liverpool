const express = require('express');
const axios = require('axios');
const app = express();
const port = 3010; 
var request = require('request');
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.post('/api/liverpool/:folio', async function(req, res) {

    try {
        const response = await axios.get('http://localhost:10410/msliverpool/v1/liverpool/test', {
            params: {
               folio: req.params.folio
            }
        });
        const responseData = response.data;
        res.json(responseData.resultado);
    } catch (error) {
        console.error('Error :', error);
        res.status(500).json({ error: 'Error en api' });
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
