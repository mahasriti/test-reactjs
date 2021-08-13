import React from 'react'
import { getEvent } from '../data/data';
import Comment from './commentaires';
const Content =({match})=> {
  const {id:index}= match.params;
  console.log(index)
  
    return (
      <div>
        <Comment/>
       </div>
      );
};
 
export default Content;