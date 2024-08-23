import getData from '@/utils/getData'
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Stack, Typography } from '@mui/material'
import Image from 'next/image'


async function RecepiesRote() {
    const {recipes}= await getData('https://dummyjson.com/recipes')
  return (
    <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {recipes.map((el,i) => (
            <Card key={i} sx={{ maxWidth: 345, backgroundColor: "text.disabled" }}>
            <Image width={330} height={200} src={el.image} />
        
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            recipes {el.id} : {el.name}
           </Typography>
        <Typography gutterBottom variant="h5" component="div">
        recipes is : 
         <List>
         {el.instructions.map((item)=>{
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
        ))}
  
</Stack>
</Container>
  )
}

export default RecepiesRote