import { TextField } from '@mui/material';
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar';
import classes from './Home.module.css';
import { SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import {
  changeLanguage,
  changeLanguageAsync
} from '../../state/user/userSlice';

type Props = {};

const Home = (props: Props) => {
  const [textInput, setTextInput] = useState('');
  const language = useSelector((state: RootState) => state.user.language);
  const dispatch = useDispatch<AppDispatch>();

  const handleTextInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTextInput(event.target.value);
  };
  return (
    <>
      <ResponsiveAppBar />
      <div className={classes.container}>
        <ul>
          <li>
            <h1>Search</h1>
          </li>
          <li>
            <p>Current Language: {language}</p>
          </li>
          <li>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  // code here
                  console.log('changed thing to ' + textInput);
                  dispatch(changeLanguageAsync(textInput));
                }
              }}
              onChange={handleTextInputChange}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
