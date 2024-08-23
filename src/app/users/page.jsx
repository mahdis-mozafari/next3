import getData from "@/utils/getData";
import { Button, Card, CardActions, CardContent, Container, Stack, Typography} from "@mui/material";


export default async function UsersRote() {
    const {users} = await getData('https://dummyjson.com/users')
    return(

        <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {users.map((el,i) => (
       <Card key={i} sx={{ maxWidth: 345, backgroundColor: "text.disabled" }}>
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {el.firstName  +" "+  el.lastName}
         </Typography>
         <Typography gutterBottom variant="h6" component="div">
          gender:{el.gender} 
         </Typography>
         <Typography gutterBottom variant="h6" component="div">
          age:{el.age} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {el.email}
          <br />{el.phone} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {el.address.address}
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small" variant="contained" color="secondary">
           connect me
         </Button>
       </CardActions>
     </Card>
        ))}
        </Stack>
      </Container>
    )
}