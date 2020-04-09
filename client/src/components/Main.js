import React, { useEffect, useState } from 'react';
import LeftNav from './LeftNavigation';
import Content from './Content';


import { useParams, useHistory } from 'react-router-dom';
import API from '../utils/API';

export default function Main() {
  const [user, setUser] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { id } = useParams();
  console.log('Main id', id);
  // if (!id){
  //   history.push("/Login");
  // }

  useEffect(() => {
    if (id) {
      API.getUser(id)
        .then(res => {
          console.log('Main use effect res', res);
          setUser(res.data.user_name);
          setGender(res.data.gender);
          setAge(res.data.age);
          setWeight(res.data.weight);
          setEmail(res.data.email);
        })
        .catch(err => console.log(err));
    }
  }, []);
  return (
    <div>
      <LeftNav id={id} name={user}></LeftNav>
      <Content
        id={id}
        name={user}
        gender={gender}
        age={age}
        weight={weight} 
        email={email}
      ></Content>
    </div>
  );
}
