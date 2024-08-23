'use client'
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/navigation";
function UserCard({item}) {
        const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "text.disabled" }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.firstName  +" "+  item.lastName}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
       Im {item.age} years old
       for connect to me clicking button
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.email}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => router.push('/users')}  size="small" variant="contained" color="secondary">
        connect me
      </Button>
    </CardActions>
  </Card>
  )
}

export default UserCard