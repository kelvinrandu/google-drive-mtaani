import React from "react";
import AddIcon from '@material-ui/icons/Add';
import  '../../styles/NewFile.css';
import firebase from 'firebase'
import {storage,db} from '../../firebase'
import { makeStyles } from '@material-ui/core/styles';
import  Modal  from '@material-ui/core/Modal';

const NewFile = () => {
  return (
    <div className="newFile">
      <div className="newFile__container">
          <AddIcon />
          <p>New</p>
      </div>
    </div>
  );
};

export default NewFile;
