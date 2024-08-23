import getData from '@/utils/getData'
import { Button, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material'

async function PostRote() {
    const {posts}=await getData('https://dummyjson.com/posts')
  return (
    <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
    {posts.map((el)=>( 
        <Card sx={{ maxWidth: 345, backgroundColor: "khaki" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {el.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          post id :{el.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           views : {el.views} 
           <br />
           likes:{el.reactions.likes}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {el.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            Open
          </Button>
        </CardActions>
      </Card>
    ))}
    </Stack>
    </Container>
  )
}

export default PostRote