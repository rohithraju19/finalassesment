//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';


const Home = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/blogs').then((res) => {
          setRows(res.data);
        });
      }, []);
      const handleDelete = (id) => {
       alert('deleted succesfully')
      };
      const handleUpdate = (id) => {
        alert('updated succesfully')
       };

  return (
    // <div>Home</div>
    <Box sx={{ flexGrow: 1, mt: 4 }}>
    <Grid container spacing={3}>
            {rows.map((row)=>(
    <Grid item xs={3}>

    <Card key={row.title} sx={{ width: 345, height: 450, display: 'flex', flexDirection: 'column' }}>
    
    <CardMedia
         sx={{ height: 200 }}
        image={row.img_url}
        title={row.title}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {row.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {row.content}
        </Typography>
        <button
                                        color="inherit"
                                        style={{ color: 'red' }}
                                        onClick={() => handleDelete()}
                                    >
                                        DELETE
                                    </button>
                                    <button
                                      color="inherit"
                                      style={{ color: 'green' }}
                                      onClick={() => handleUpdate()}
                                    >
                                        UPDATE
                                    </button>
    </CardContent>
    
   
    </Card>
    </Grid>
        ))}
        </Grid>
        
        </Box>

  )
}

export default Home

//Write your code here