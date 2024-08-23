import getData from "@/utils/getData";
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Stack, Typography } from "@mui/material";
import CardElement from "./CardPost";
// import Image from "next/image";



export default async function Posts() {
    const {posts} = await getData('https://dummyjson.com/posts')
   
    return(

        <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {posts.map((el,i) => (
          <CardElement item={el} key={i}/>
        ))}
        </Stack>
      </Container>
    )
}