import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (        
    <Stack direction='row' justifyContent='center' alignItems='center' height='100vh' width="100%" >
      <CircularProgress />
    </Stack>

  )
}
export default Loader