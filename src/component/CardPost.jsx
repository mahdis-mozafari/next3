"use client"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation";
function CardElement({item}) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "khaki" }}>
    {/* <Image width={330} height={200} src={"/404.svg"} /> */}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
          post id :{item.id}
          </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => router.push('/posts')} size="small" variant="contained" color="secondary">
        Open
      </Button>
    </CardActions>
  </Card>
  )
}

export default CardElement