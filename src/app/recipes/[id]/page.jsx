import getData from '@/utils/getData'
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';


async function page({params}) {
    const data = await getData(`https://dummyjson.com/recipes/${params.id}`)
    if (!data) {
        notFound();
      }
  return (
    <Container>
    <Stack direction="row" flexWrap="wrap" gap="2rem">
        <Card  sx={{ maxWidth: 345, backgroundColor: "text.disabled" }}>
        <Image width={330} height={200} src={data.image} />
    
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        recipes {data.id} : {data.name}
       </Typography>
    <Typography gutterBottom variant="h5" component="div">
    recipes is : 
     <List>
     {data.instructions.map((item)=>{
         return <ListItem>{item}</ListItem>
     })}
     </List>
    </Typography>
       </CardContent>
       <CardActions>
          <Button  size="small" variant="contained" color="secondary">
            see detiles
          </Button>
     </CardActions>
    </Card>

</Stack>
</Container>
  )
}

export default page