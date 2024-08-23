'use client'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Image from 'next/image';
import { useRouter } from "next/navigation";

function RecepiCard({item}) {
    const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "error.main" }}>
         <Image width={330} height={200} src={item.image} />

        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         recipes {item.id} : {item.name}
        </Typography>
   
        </CardContent>
        <CardActions>
           <Button onClick={() => router.push('/recipes')} size="small" variant="contained" color="secondary">
             see detiles
           </Button>
      </CardActions>
 </Card>
   
)}

export default RecepiCard