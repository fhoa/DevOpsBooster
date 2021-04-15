import React from 'react'
import styled from '@emotion/styled'
import YouTube from 'react-youtube';
import Theme from '../../shared/theme/theme';


const HeaderContainer = styled.div`
    height: 400px;
    width: 100%;
    background-image: url("https://www.tv2lorry.dk/files/styles/16_9_large_2x/public/images/crop/2020/03/12/1584007447_20190522-120601-7-1920x1280we.jpg?itok=25-MqYLC");
`

const DescriptionContainer = styled.div`
    height: 450px;
    padding: 1rem;
    display: flex;
    background: ${Theme.color.background.layout};
`

const VideoContainer = styled.div`
    min-width: 380px;
    flex: 1;
`

const YoutubeVid = styled(YouTube)`
    width: 100%;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
`

const Content = styled.div`
    min-width: 380px;
    flex: 1;
    padding-top: 50px;
`
const About = styled.div`
margin-top: 2rem;
    p {
        margin-top: 0;
        line-height: 1.5;
    }

`

const ProfileImg = styled.img`
height: 250px;
width: 200px;
top: 200px;
left: 80px;
object-fit: cover;
position: relative;
border-radius: 50px;
border: 5px solid lightgrey;
cursor: pointer;
`

type Props = {
    name: string
    location: string
    online: boolean
    description: string
    profileImgUrl: string
    videoUrl: string
}

const Description: React.FC<Props> = ({name, location, online, description, profileImgUrl, videoUrl}) => {

    return (
        <>
            <HeaderContainer>
                <ProfileImg src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/14203365_10210943198162858_2242823975532672968_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=r2SjkVuQylwAX9AjcHv&_nc_ht=scontent-cph2-1.xx&oh=cf8346a38d350db3e70b1b8bf26ef822&oe=5EEC5C57"/>
            </HeaderContainer>
            <DescriptionContainer>
                <Content>
                <h2>John doe</h2>
                <p>København / Online</p>
                <About>
                    <b>Beskrivelse</b>
                    <p>Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Lectus sit amet est placerat in egestas erat. Eget lorem dolor sed viverra ipsum. Neque vitae tempus quam pellentesque. Diam in arcu cursus euismod. Suscipit tellus mauris a diam.</p>
                </About>
                </Content>
                <VideoContainer>
                    <YoutubeVid videoId="rF-hq_CHNH0"/>
                </VideoContainer>
            </DescriptionContainer>
        </>
    )
}

export default Description
