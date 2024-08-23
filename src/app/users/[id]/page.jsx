import getData from "@/utils/getData";
import { Button, Card, CardActions, CardContent, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";


async function page({ params }) {
    const data = await getData(`https://dummyjson.com/users/${params.id}`)
    if (!data) {
      notFound()
    }
    return (
        <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        
       <Card sx={{ maxWidth: 345, backgroundColor: "text.disabled" }}>
        {/* <Image width={330} height={200} src={data.image} /> */}
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {data.firstName  +" "+  data.lastName}
         </Typography>
         <Typography gutterBottom variant="h6" component="div">
          gender:{data.gender} 
         </Typography>
         <Typography gutterBottom variant="h6" component="div">
          age:{data.age} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {data.email}
          <br />{data.phone} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {data.address.address}
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small" variant="contained" color="secondary">
           connect me
         </Button>
       </CardActions>
     </Card>
        </Stack>
      </Container>
    );
  }
  
  export default page;