import { TextField } from '@mui/material';
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import classes from './Home.module.css';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <ResponsiveAppBar />
      <div className={classes.container}>
        <ul>
          <li>
            <h1>Search</h1>
          </li>
          <li>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
