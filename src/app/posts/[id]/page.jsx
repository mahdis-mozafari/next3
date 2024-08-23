import getData from '@/utils/getData';
import { Button, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material';
import { notFound } from 'next/navigation';

async function page({params}) {
    const data =await getData(`https://dummyjson.com/posts/${params.id}`)
    if (!data) {
        notFound();
      }
  return (
    <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        <Card sx={{ maxWidth: 345, backgroundColor: "khaki" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          post id :{data.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           views : {data.views} 
           <br />
           likes:{data.reactions.likes}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            Open
          </Button>
        </CardActions>
      </Card>
    </Stack>
    </Container>
  )
}

export default page