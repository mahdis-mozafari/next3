import getData from "@/utils/getData"
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Stack, Typography } from "@mui/material"
import RecepiCard from "./RecepiCard"


async function Recepies() {
    const {recipes} = await getData('https://dummyjson.com/recipes')
  
    return(

        <Container >
        <Stack direction="row" flexWrap="wrap" gap="2rem">

        {recipes.map((el, i) => (
           <RecepiCard item={el} key={i}/>
        ))}
        </Stack>
      </Container>
    )
}

export default Recepies