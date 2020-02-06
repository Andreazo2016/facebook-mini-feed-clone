import React from 'react';
import logo from '../../assets/images/logo.svg'
import { Container, CommentList, CommentArea } from './styles';

export default function Comment() {
    return (
        <Container>
            <CommentList>
                <li>
                    <div id="user-info">
                        <img src={logo} alt="perfil" />

                        <div>
                            <strong>Julio Alcantara</strong>
                            <span>04 jun 2019</span>
                        </div>

                    </div>
                    <p>Pessoal,  alguém sabe dizer se a Rocketseat está contratando?</p>
                    <CommentArea>
                        <img src={logo} alt="logo" />
                        <p>
                            <span>Diego Rocketseat</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.
                        </p>

                    </CommentArea>

                </li>
                <li>
                    <div id="user-info">
                        <img src={logo} alt="perfil" />

                        <div>
                            <strong>Julio Alcantara</strong>
                            <span>04 jun 2019</span>
                        </div>

                    </div>
                    <p>Pessoal,  alguém sabe dizer se a Rocketseat está contratando?</p>
                    <CommentArea>
                        <img src={logo} alt="logo" />
                        <p>
                            <span>Diego Rocketseat</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.
                        </p>

                    </CommentArea>

                </li>
                <li>
                    <div id="user-info">
                        <img src={logo} alt="perfil" />

                        <div>
                            <strong>Julio Alcantara</strong>
                            <span>04 jun 2019</span>
                        </div>

                    </div>
                    <p>Pessoal,  alguém sabe dizer se a Rocketseat está contratando?</p>
                    <CommentArea>
                        <img src={logo} alt="logo" />
                        <p>
                            <span>Diego Rocketseat</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book.
                        </p>

                    </CommentArea>

                </li>
            </CommentList>
        </Container>
    );
}
