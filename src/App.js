import AcUnitIcon from '@mui/icons-material/AcUnit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div>
      <h1>Hello World...</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Outlined</Button>
        <AcUnitIcon />
      </Stack>
    </div>
  );
}

export default App;
