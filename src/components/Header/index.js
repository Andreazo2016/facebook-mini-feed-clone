import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import facebook from './../../assets/images/facebook.svg'
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
        <img src={facebook} alt="logo facebook"  />

        <div>
            <span>Meu perfil</span>
            <MdAccountCircle  size={20} color="#fff"/>
        </div>
    </Container>
  );
}
