import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import PostBottom from "./PostBottom";

const Post = () => {
    return(
        <Wrapper>
            <PostWrapper>
                <AvatarWrapper>
                    <Avatar />
                    <DetailWrapper>
                    <PostUsername>Username</PostUsername>
                    <UserTags>User Tags</UserTags>
                    </DetailWrapper>
                    </AvatarWrapper>
                    <PostDetails>
                        <PostText>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus nisl nisi, nec fringilla mi ullamcorper eu. Vestibulum lobortis ex non consectetur tempor. Nunc dolor eros, cursus sit amet ultricies ut, convallis vel enim. Quisque a tincidunt tellus. Curabitur vel luctus nulla, vitae rhoncus lacus. Fusce non dolor tincidunt, dapibus eros semper, maximus erat. Donec hendrerit sollicitudin nisl, vitae tristique felis vestibulum vitae. Integer fringilla libero eget lectus ornare sagittis. Donec volutpat ipsum nec augue auctor condimentum. Curabitur vitae tortor vel neque tincidunt bibendum quis sed nisi. Mauris ac semper lacus, et ullamcorper ante.

Maecenas sollicitudin hendrerit arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus viverra tortor id viverra porttitor. Etiam accumsan varius vulputate. Duis sapien dui, porttitor vel quam placerat, sagittis semper ipsum. Aliquam ac quam vel turpis dignissim varius sed eget elit. Vivamus molestie eros ut justo porttitor, ut mollis magna commodo.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Curabitur feugiat orci at leo imperdiet, in hendrerit libero congue. Integer nec nunc convallis, malesuada risus ut, facilisis lacus. Curabitur ac lorem ut lorem maximus elementum. Fusce tempor augue quis ante tincidunt, at mattis turpis malesuada. Nunc eu mi ut erat placerat convallis eu id enim. Duis et ex congue, blandit magna vel, imperdiet sem. In luctus odio in enim auctor, nec mollis tortor varius. Integer lobortis aliquet urna, at efficitur nulla aliquam eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis est leo. Mauris at dignissim magna.

Aenean at ultrices elit, id pulvinar nisl. Vestibulum sodales eleifend urna, pretium facilisis tellus finibus ac. Nam vel erat sed nulla efficitur finibus. Nullam volutpat efficitur fermentum. Maecenas id rhoncus urna. Fusce faucibus erat vel scelerisque sollicitudin. Nam non molestie est, eget facilisis mauris. Nunc tempus semper tincidunt. Proin sed sem sed felis euismod accumsan eget in nulla. Donec vehicula libero quis semper commodo.

Praesent odio purus, faucibus eleifend ullamcorper quis, tempus vitae mauris. Maecenas at volutpat eros. Pellentesque semper, justo a aliquam dapibus, turpis purus convallis odio, at rutrum quam velit vitae nibh. Nunc cursus fringilla accumsan. Morbi bibendum iaculis nulla, dictum auctor elit suscipit et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut blandit ligula in sapien accumsan, et viverra arcu tincidunt. Curabitur suscipit condimentum lacinia. Donec pulvinar varius mi sit amet vulputate. Phasellus metus turpis, euismod eget dignissim non, viverra ac orci. Nam turpis mauris, auctor a posuere a, condimentum at lacus. Aenean vitae erat suscipit, sodales massa at, pellentesque quam. 

</PostText>
                        </PostDetails>
    </PostWrapper>
    <PostBottomWrapper>
        <PostBottom />
    </PostBottomWrapper>
    </Wrapper>
    )

}

export default Post;


const PostBottomWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 40px;
background-color: #333;
border-top-style: solid;
border-top-color: gray;
border-top-width: 1px;
`

const PostText = styled.div`
padding: 6px;
color: white;
`

const PostDetails = styled.div`
background-color: #222;
width: 100%;
height: 100%;
padding: 6px;
color: white;
`

const DetailWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 6px;
`

const UserTags = styled.div`
color: gray;
font-size: 12px;
padding: 6px;
`

const PostUsername = styled.div`
color: white;
font-size: 16px;
`

const Avatar = styled.div`
width: 100px;
height: 100px;
background-color: blue;
`

const AvatarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 180px;
height:100%;
border-style: solid;
border-width: 1px;
border-color: gray;
padding: 6px;
`

const PostWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #111;
height: 100%;
width: 100%;
padding: 6px;
`

const Wrapper = styled.div`
background-color: black;
position: relative;
width: 100%;
height: 100%;
padding: 6px;
`