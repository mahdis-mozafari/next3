
import getData from "@/utils/getData";
import { Container, Stack} from "@mui/material";
import UserCard from "./UserCard";


export default async function Users() {
    const {users} = await getData('https://dummyjson.com/users')
    return(

        <Container>
        <Stack direction="row" flexWrap="wrap" gap="2rem">
        {users.map((el,i) => (
       <UserCard item={el} key={i}/>
        ))}
        </Stack>
      </Container>
    )
}