import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  InfoCircleOutlined,
  SearchOutlined
} from '@ant-design/icons';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SimCardDownloadRoundedIcon from '@mui/icons-material/SimCardDownloadRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Input } from 'antd';
import { Avatar, Space } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Typography } from 'antd';
import { Card } from 'antd';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton } from '@mui/material';

// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';








const { Title } = Typography;
const { Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const Payments = () => {
  const [open, setOpen] = useState(false);



















  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "hidden",
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: '90vh',
          backgroundColor: "#1E2640"

        }}
      >
        <div className="demo-logo-vertical" style={{ display: "flex", padding: "5%", paddingTop: "10%" }}>
          <Avatar shape="square" size={55} icon={<UserOutlined />} style={{ marginRight: '10px' }} />                    {/* <div >

        <Text strong style={{color:"white"}}>Nishyan</Text>
        <Link href="https://ant.design" target="_blank"></Link>
        </div> */}
          <Space direction="vertical">
            <Text strong style={{ color: "white" }}>Nishyan</Text>
            <Link href="https://ant.design" target="_blank" style={{ color: "white", fontSize: "12px", textDecoration: "underline" }}>
              Visit store
            </Link>
          </Space>
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} style={{ backgroundColor: "#1E2640" }} />
        <div style={{ backgroundColor: "#353C53", marginTop: "76%", height: "10%", width: "90%", marginLeft: "3.9%", marginRight: "6%", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", marginTop: "5%" }}>
            <Avatar shape="square" size={43} icon={<UserOutlined />} style={{ marginRight: '10px', marginTop: "6%" }} />


            <Space direction="vertical">
              <Text style={{ color: "white" }}>Available credits</Text>
              <Link href="https://ant.design" target="_blank" style={{ color: "white", fontSize: "20px" }} strong>
                222.10
              </Link>
            </Space>
          </div>

        </div>

      </Sider>
      <Layout
      // style={{
      //   marginLeft: 0,
      // }}
      >
        <Header
          // style={{
          //   padding: 0,
          //   margin: 0,
          //   background: colorBgContainer,
          // }}
          style={{
            // marginTop:"-3%",
            marginLeft: "13%",
            height: "50px",
            zIndex: "5",

            display: "flex",


            // padding:"4%",
            // width: '100%',
            background: colorBgContainer,
          }}
        >
          {/* <div >
          <div  style={{display:"flex",marginTop:"-3%",marginLeft:"12%"}}>

           <Title level={1.7}>Payments
           <InfoCircleOutlined style={{fontSize:"60%",marginLeft:"8px"}}>

           <Typography level={6}>HOW IT WORKS</Typography>
           </InfoCircleOutlined>
          
           </Title>
          </div>
          
          </div> */}
          {/* <div style={{marginTop:"-2%",display:"flex",width:"50%"}}> */}
          <Space direction="horizontal" style={{ alignItems: "center" }}>
            {/* <div style={{display:"flex",width:"360px"}}> */}

            <Title level={2} strong style={{ marginTop: "-1% " }}>Payments
            </Title>
            <div style={{ display: "flex", width: "300px" }}>

              <InfoCircleOutlined style={{ fontSize: "15px", marginLeft: "2px", marginTop: "-10" }} />
              {/* </div> */}
              <Typography style={{ color: "#4D4D4D", marginTop: "-4px", marginLeft: "12px" }}>How  it  works</Typography>
            </div>
            <Input
              size="large"
              placeholder="Search features, tutorials, etc."
              style={{
                width: 420,
                backgroundColor: "#F0F0F0", // Set the background color
                color: "#4D4D4D",

              }}
              prefix={<SearchOutlined />}
            />

            <FeedbackOutlinedIcon style={{ marginLeft: "150px" }} />
            <Typography style={{ marginLeft: "2px", marginTop: "-12px" }}>Need help?</Typography>
            <SimCardDownloadRoundedIcon style={{ color: "#4D4D4D", marginLeft: "12px" }} />
            <MenuOutlinedIcon style={{ color: "#4D4D4D", marginRight: "-10%", marginLeft: "12px", }} />


          </Space>
          {/* </div> */}
          {/* <div style={{backgroundColor:"purple"}}>
            {/* <div style={{backgroundColor:'red'}}>

            </div> */}
          {/* <h1>hiii</h1>
          </div> */}
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: "flex",
              justifyContent: "center",
              overflow: 'initial'
            }}
          >
            <Card


              bordered={false}
              style={{
                width: "700px",
                marginTop: "50px",
                height: '450px',
                // backgroundColor: "red",
                marginLeft: "15%",
                overflow:"initial"

              }}
              elevation={5}
            >
              <Typography primary strong style={{ fontSize: "15px", fontWeight: "bold", letterSpacing: "0.1em", marginLeft: "-75%", lineHeight: "80px", marginTop: "-3%" }} >Payment providers</Typography>
              <Typography style={{ fontSize: "13px", marginLeft: "-40%", lineHeight: "20px", marginBottom: "5%",marginTop:"-4%" }} >Set up payment providers to accept payments from your customers.</Typography>




              <List sx={{ width: '150%', maxWidth: 500 }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img style={{ objectFit: "contain", height: "60px", width: "70px", marginRight: "10px",  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" ,marginTop:"-18%"}} src="data:image/jpeg;base64,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" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Razorpay"
                    // secondary={
                    //   <React.Fragment>
                    //     <Typography
                    //       sx={{ display: 'inline' ,color:"#1A181E"}}
                    //       component="span"
                    //       variant="body2"

                    //     >
                    //       Ali Connors
                    //     </Typography>
                    //     {" — I'll be in your neighborhood doing errands this…"}
                    //   </React.Fragment>
                    // }
                    strong
                    style={{ fontWeight: "bold" ,marginRight:"80%",width:"50px"}}
                  />
                  <ListItemButton>
                    {/* <Button type="primary" onClick={() => setOpen(true)}>
                      Open Modal of 1000px width
                    </Button> */}
                     <Button style={{color:"light blue"}}onClick={() => setOpen(true)}variant="outlined">Set up</Button>
                    <Modal
                      title="Modal 1000px width"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={800}
                    >
                      <p>some contents...</p>
                      <p>some contents...</p>
                      <p>some contents...</p>
                    </Modal>
                  </ListItemButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img style={{ objectFit: "contain", height: "60px", width: "70px", marginRight: "10px",  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" ,marginTop:"-18%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAAB9CAMAAAC/ORUrAAABC1BMVEX///8fB08Eq2H7sBYAAEQAAEIcAE0Ap1gAAD8XAEsAAEAAADwdAE6pprUAADoApVL/+fLp+fKq3cMPAEj7qwD8v0oAAEckAFfr6fBDvYOd2ry5s8b5+PvQy9p+dpY8MGHHwtKlnrbZ1eJTRXbg3ecxIFtZUHYoClmGfZvy8PbFws+ema391IsAADexrL5mXn53bpAAADI8KGZVSXWkobGSjKRuY4lHOmoyHV6OhqNDMGpeUX5mWoMlEFP+8dowF1695dGHz6gOsm0AnkFzy59cw5Da8OUwtXa45dA7KmNLOXD+7Mv915z8xFj8ym1JPWv94rT81ZD7tiv8zXj7vD8AACmck6/95Lr+79Fp1m8gAAAWCUlEQVR4nO2dfWObRrbGUQqYERhni4toQQqWlFhEFZVtSZFsZZ12u9uNtr3t7bbe/f6f5PIyZ5gZhhcJyXZy9fyVYDQM82Pezpw5I0lHHXXUUUcdddRRRx11VLn+srueNN9BF2tY/zdO1w1PT09973DZaqgP3/9w1kB/e1Imb6+0dqxJr+YP/IVtthU5UvvKP2TOdtZffjw7O3nRRGflD/D6bhh/k6HbP0T++6iVyBrVun240S21hSW7h8hRU3150oxHrOLUA3eBTC35JGVZ0fTr8d6xDFvGFkhCE7UyPUskP541BnLy96LE+2tTsQyqCFrIniz2/AbOe7U+knBC5+ZZIvm6eRV5cfKlOO3hO91q5YS+2/MrBB/rIxmareeO5O97IFLUlax0lAdyACTeq/pI1vCNIEU3TU3Wnh2S75u3WlEl+VGUtDdQRECeFslQh9px4ztRuzq78fecmab6xz7qyIsz0RA4WDJtloqsSOipkcxtTGS15zzsTfvoSF6cfC9I2bvOiKiWYhqDda+3vpU1Gz0hEm+QNqXo456zsDftpZKc/CRK+iYjIturbJLsj28nT4gEpXfK4Z6zsDf9uJd2S5TyBelHkDbnjBbd8Z5foz4SB3clVnfPWdibfmrO4+QHUUfiIJiLWB/rGZ4Cxwmq7/Kcfrfb7XN3ckic4qT6WtqSqltYw7bUsN/t7576HtqtM/EkcQrNlnVXlQnHH6+Ximnq0ZjUvp27hWDC6bJt6prWbmumvpyG2XsTJCsnvLOjlKK0Oj2f/XnfjbTC+TIu3FR04fX9cDYfLe4Gg8F0zj28O15fWrpmXS5OS8rb713GOdR083q0m43iQ1MkZz98ECbsqLiSoFcVltYHy1TkzOKEbMWcOoL7gpFO3RaPGLQb8kdA0jIUGZEb2gpTriNTURTSwclKoskp/qs/Hmi6Ist2NCqMZE2Yp19YGn66asnmrXgq4z3YbZJF1dIvd5nxfNkAycnJydlPBZN2aSzjnClVVfhNfnZv6fkuYTXJ3YfWWWG8UnOpxMUi31OPXwnsCC05RTK+asvsrFahHt7tKEz6SBM1xl1DZgxHLVXb1GiKOX3DIfnp6/r68Zt/Fhvkb2ubZt+I5vfKmr3J+1Uw6axGEt1jZc1HGZKZzP+BQrLSc6mjvBkmNPN5QPbWnQpXS06+2TaBAg3xULOlVWZJiKQls4bJgS0q7hpIWug9+VDLkIQlSHptwe9UzWff48IU3BU1X6JGuEyHQuLiN0Q3lbcmSKKZvR0341nBtt9S91xopIRlpd1WoiY/urUIiYoQ9T97CjeVIXHpWqiqNJIHIKLKWjQGgd5CtZivrUsSsNqJ6QxnYesp6aGQjPDb2/y4Ja83yFJ0+2Y0Pj2dLy6J3RhtqHvg/WRtPfO7Xd8NT3uXuvaG3ECQoKjYOpuBYcpZNwtFV9a9+1CicbGjjm1qV/hXXehGbDTue1Lgj2w8uqM/N+81ruyqtug6ktefLcFw87Bd0R0KyQ3OoOJX32r23Kxy9xfwTdpZJ+Dia9oF/UNnnK3qAhL0JuwmI7wgfE1G4dAGMoNglR0E+/gRhttNGjqnC33FR/wqGukVh0b6MI2qyCtoFt6TbC9SJgbabnH/UEhe4y9Lr25J+dH7SGZalORSWoxWsaEQkMgUtDX+TNX3dCZwdTAMNmdd3DRqfMohrj4yNU7xbcyfXAkwJZVO9hXK5alQ//r5ly/OX8b/EiL593mVvqp6AkZidHZw/9ikb2JlPQW2FJZUORESDxcJ2y0VIMGT+pbJj1pxJUG/0hcXyTdCdd0X8B3R47C3aZrotuqNX34bF2oZkm/PvyjX+f9UPMPD667q/Q5I8Oup1+QKhqQUz7xESMgHbtOteQUSvlp3oUdgrJS4L8+ehoeN6B3z46XKkRPr5/O0wBsh+bn8GZKDvRPUjzsgwaVjIHIl/SijFy6ceAmROAb2kZhSF6uQcIN2srrCPBov9ZOEHXyXzTatvTTfsl/2ui9/geJuhOQ/Zc+IFLzHSJY7IPF0jIT8FsoFaaMCA5gQCXy7Fj3vrEDCz6NwBWXGf9Hj3qlpa4az+BYPDmTWvDxO8031inm9/IKUdiMkL0uekWQZ9yXqZW0k/XhkexrGA6D021IRKbQumYVZyuR6Osv7gomRYNMn1Q1vjQS/CLrpMkqRkIHDA25rDfbXuAkuGZZIL38/54p1JyTnvxQ/gn2Tll0PiXuna0ri6KXoaG3wSKQBNclTregmecH2K2IkvcZIhirMd9q0YKqChsyDokmJSQv3+UzDyekXqqybIPlXZRmDiYtvmoV6sBXKqGLAnItCEsi81cVqWzQUMZJRYyR9obWHSOaQiGUVe639Rhf17kiqh8CkQy4bJJG37nD201YeieRwptj47yb1poeqJd3SsiZIpuVIimuJoD/YCclfK4uZ2ObLmlFcRFQFUFWq3Bkkcbus8F+sPCB/fd5ICn3HmUqyO5Lz/60q5UhvMRL1dUVnMgRblKWYcqdjmXobfoq44Xzc4cgWzSUzsBweiSpSm2u4DFsWSC+sJb/vpZZUThMTwSi4VeVKCC1ce+Gnw1unC1NFHklccOHoNurbAYthAfCDd++tjkjQvWPDmfF6fCrQ7K0k1n/Zgt4RSY3RViJsA2mh8smiA1ZVanIc6IVI0mJyB7Ck1PbxtUMhgU+rogHGX5HR2m5x5Ld9IKnVasUiS0Jy6bIiXqZgxiROBRIps8US2/+hkEjY/RsNSr+sPvZEUorqg1j/bo7k/I8aPXsqsHJF4+AyH7aVnX+VGkhgPk+WkQ+GBDpupfT7dzqY3Lrsrpy+4op3OySxqfKPKjsKrQeycqqXLGPhmYNCGyLqIMHDh8MjgXFKydwi1newZLeVT0p9JD9/ldcv3/6nyorCiiyzRQV+y3sWBj7+B0bC2FnzfUneroUL+/ANF6nt7dIG2Mc/V+1tnCjrI9mPutnkDukfQ6pYu1MTCgk3XMw36Ck8kquNz6UNyxNA4GBIpDnUdi03lKX2AnvvwObAL1h5F8WQHhuJNKc8DJCs39+N5tGIcH5jaZYFbtowCrDpanKpckgspJibsQ+l5V3AfJ+sbhwOCawXRt+NdUH18f2RTScB1SRiguY+fH+evzYnxW3ZoyOReozvVeqEItux9wjZzOAQD7wpse664ExKrlgJVEU30XIwGFyCOY+qXIdDIoXEZciQzeX01HXDce/O0C20pJPokb5TtdumtYkyem+bilW27+7xkUg94uvDKdtfQnapWZp2Hb3GoKMTjxBS46kpNKIcggyZlMkBkUgj6i1iM3TssRT7oKsMEmlAe4LF+YRdE88KiXQh3qpIIRnaqug9EiQ+3CS2IKlmNnQ+JBKRs2PyfBaJNBV4Oz4/JNJwo4mgULuw3AJqtBVZhESV6R0iB0USO/vWQCL5hiyA8tyQREV+rVu5jMpUIfWXbcGLqLKOSCWYKFwSqqWwWw0PiyQequRLG13yEydvnjdXo2fVvWN1e4Yetb5gwIs3AwwYw0O4NGkLb9xem8sxVTZO2FuaeKNBHF/CtLhFRclb6sly3xW70GsmDo067ZboX6VejjK3VoUvXxWsuXkXSSYzF0rZtFZ5I4sXDvR23NegeK+sLWvaZlzsPP9kSKTYgju/u0S2PjEnyv00zE3LozLfpBt1dNO+ns58wWsMk+04q1nodgX2JlgUZ5LuYodGn3kUvsgmEuDLYbEtaxiO7u6ViWmaE62zzr8EyA/H02icsuj1xmH5rp+nRFJPTqynzMBj6/kj+X+nI5JnpyOSZ6cjkmenI5Jnp30imeXX/A8TIPDz1j6R6HnPGEWbXM8PF3Hhs9Q+kYj21yYBAtef/bwiGPUSTfcQg+XwSCJZ5pabJT85Oe/tOKyYZe4h1t2jIGm1tMqQKZ+2HLwpoIa3c6UeCUlLqRs9+dPUc0eSLDqxC0+tlvlsI13tQ4+OpChKDSfYvvxxgLVs66TmcHsoPzM9NpKzf9RLC/ZUzrJLwzlZDv2sq8ljI3lRM5Y/IGHiAZJl9BpROj5dPTaSr2umJURCIrsgetDluLPRenN92bncrFcuO23xHCx+xYr8gb3cd8fTm9v7TudunkWsc9xx77bT6SxvBGtjtPzxenN/eb0ZucW3Bf7pajGIcrtcUI+gc9V/DeE6A5zH/KLXMD2G4zSsaC5qIBHGlhVJjAR2KKr3JG93sq7Ey57x/hiE4si0Y+oN3D+ThUR9wvc+q6v0D1eZlaY73piabKdpIVvWrVEEsj+/NxXbStMvDicXR75PMpLcpohvC9xex2zLVpqaZctmZ87AextnV4PmWU6zqP/JessH42tdb+MzDzSzswgbLfSe1D2DpAAJxBkjO3FGuUhWqmxny+PBJUQe4T5IcETHASI8907T+B2khq317nWb9VJA2kfRlxncmRZ725IzyQ1jtrzfhmqbPdpxVhgbnPH6D3pcPlXL9AuLsRqJOEq5SAVIIAqXAkhWggmMoWUOwLChjHOkBW9O8N6eTcSORXnXl6i0BfYDX84HIdTZ22yRv0/8CLKrqA6SUMn7N5U4bteoJbUP6ilA4ueQCJ3iFMIEXHW4SGp4U4cKu+Z9YVkUKbehxdVExa0xrvCDIm8yNfvKK5GMRM51TZCc/bOcA6WKWmJxtYT1G41KAwrN+xX3PkzL5cFuOUDXZdo/Vfw9Z3/nNqb0qWhpspxFUdVodAv64zHoJ6g2JFeFJBSGEmyA5Kxu3y4VIsFbq7PufWWrtqLrnevB4NYw2yQiHQlU+8DvSkheDUJgwcsMwSvXUnTT7iCddmCL49SZceQ+co3dnkM2uiDtfh66p1ObbBmmRhokvkOUmm50ZOoRZI/0WzO2N5LnWqmIGyzxsTfibEbStTiq6u5Izmp3JFIhEoiwT5qh0dVyTvYgSN0pfGYk3huE6GHCXb3hB24kKPnKT75Yx91k0dPXqbNUP/xVg5AGTCBciCdnXUPZQKRIOsQf3mmnfgz7Cagh9QiIMjScxkb59/DcHrbSw0ABdqLY1ioJhRc4fX92Y+7cvW9TR4qQBNDgkKniW+4LuchFFcE7ygyq5QIAWeoebhGoYFkPhG72Q9fGTOgYTA5uqOitxZiJamS34cEivdnwAppLpgoHMFX0uTKBiGxcGN7goXhdrwzJ2YsPhb8TSYwEYjSVTGzx3gUSNSnqenOvDc2fnW1VwEjaFOERhMCiTAUk7irlBIy7M4PprXDoSTnrmQEJHWEOWlXmaI/C2buDN49tEYKsEMnJ2Q81rY1EQiQOfLhKcaZwD6mSDeLBEn/EWct1m4uiBUjoLzPAEdQZUwEuaiqaY4ADAbJxTGBvd3ZxxneDsXDeVDocYiESPHqsEYaXSIjkm7+d/PT9h/qJYAmRQKjQslhHDn7LLMj0iG+5YA859QmLkECFY2IVQsOYVbA+BC9jpoYBbrmW5IoQCVR7jZovFiLBw0L1VfHb8xIi2VECJN4rGIuYZU4R+DvOeoAhlBlYlfFcRm1RaYuQQCsl0xsIoQxJ8hC87DUzMPZSs4GBSFkDkkv6treQHMWzuOGCMUj9JbxDICHG+eEFGYPaokoSxGd6xO//XXob1SvccCFGsTFFpvoIIRIoL536hIc4mmM2VxAFrot0y2+HFCKBMO30cwuRBB0whBu8ebVIB0DSMnB4F0XPpmMG15M44RpN9GiMrunm/fxXlSszEn8Et1zYmMKEDxci6Vt8jcjaxay8YEC9HDDCI9ksEKYQCZz4QRd/sXGezDbVaF4ib1YVOxmkwyCBkEitTBM2I90bXc7OHlVh6kwhCfBxQLjKwWc9oBIRI8GfMIOELy8wD2RL0qlwfrJNa0IkQWsbJH1mNxmyZN2e+vxNjA6CJKcJa2BamGLbEW2rAwhJywXGFJm2r+6OJHhVZLvaP5L8aRmqpRllK12PgQTpPn2bNxBtu+SR4KDTacuFjSn0LK4RkttSg9h+kUi+ofAxEVW9JNLN4ZEg7Zbt1tZABNlKHDdUtuGbpZF4OMBS0nLhtp+Ngdyg4YJAGuKoc8p+kUQdI3XyEpb9rnCaxiH5fb9IVCSbHzmrONjUkT6Yu91u1w3nN0YeCQz/45aLjCSZHqkBEjgioiDqHMnGnpBELz26jJcmqfay+JhTFknd6HNiARIr2UarafrEuBvnpiMwvH1F/QUPgtkAXLDveQjGFD549c5IwIbGD4Jz2huSOLvdsHetk9UsFRXdyCGpG35OKIzEGvWTbbR94TAcB55nd5iLkEhrbHI6BWMKt32/ARJsHOCminntE0kqfwFLCoXmeQ5J7fhzIhUY51l1uchyiYRIcJ+ObvAp0wY3t2mABE6jkStC/G2NpMaBsnCYU2F8CBbJH5UJlqkWEhzwjV1XFyLx0sUf9TVecOFtEg2QwCGo7PkjedVGEuDBSJ2T5Y0KegyS89+qEyzRNkiY00PESEjzgjtFm5v3NkBC5tRyuempNhIYw2XrC8W6rIg1RCOpE6O8TFs1XIzNC5cQhwSsv6lyx+I0QQInKrWUnO1tSBVqbSTk0EGF+/adhc9eIOvTheeXMEga9SQ1kYANkDnUA69xc2ty2fRBWNGbIJHuSMQv44KyUAbuO8pxbwskxBFKfkiRdhfp6rOpdUY+bZaG5ZbCU34oJJVHwlSpFhKIsWvQvcmDLSz1B2qab6g5f9QmSIaw/NtSZfNyMXPdcDa665gyQjsh6ZOsytr1Ynqra2lM7Wgor1qKed07TYKxjAdgXmHMdYwyJA07EqkuEnBEaMnKJg7rOBsNFDJ8Zm91qMlnPv5rIySSS/nykKhz8X3WTkikG4tKLpoTYhs2nl2hOBZS/AxS74sPYP1qb3WkLhIn892KMypTc9rcyiPlR5UfxjdDIoUFUdh2RNK3WUMWiySndvHuTYzk/PeG/UisekikUOhmmCD6jruVRBAVnaDaEInUv86dftIAiXTBvlYpErX4WIYUyfn5782riFQbScREHJYRKfwp8N498UjPJ9oUSVSKSu6coJZq74hEci36FBxAIvB1RAoqm+T/EfH49r8lN2whLXX006uQSM6NyZdFcoR93iAGAxlDzY9PvD/TvQETtptNMzFhVhWtZIVKzxWEd3Gb7HqATCBZmWyoJ83MNKACsygQYI/G3IbqYI40O/0kopTSAHjenaYr2cHPKrILNk1k+useGizQFDv6+dW3DsfXpqbg4ouDAHYWwp054BZhidYXcICQGQ3SAW9DKrXgLl3H5aNvJ/Lc+franpi6OTGNwdhn6mkfYpAwv+gVhx3w5wMjDmBnb+aksg3d8Xopx08w7cu7ec0V+KeQ13dnq/jVVqduv2jO6y0Fy4mHUFC8BWdrecK0PMHGrE9ReG1Rff3UGTkKBAb6zz3gx6cj3JUYqHBeddQjC/s4buNRe9RB5RmP1LkfVVfgK7TLyddHHUQ3Il+ho55QXXz8lXUMEPlcxPigHvUMBGeQlhz1cdTjCu+FVZd7tHUc1URBR6k48fmoR5YHht7nazk96qijjjrqqKOOOuqoo3bW/wEYVXZNrHCYXwAAAABJRU5ErkJggg==" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cash Free Payments "
                    // secondary={
                    //   <React.Fragment>
                    //     <Typography
                    //       sx={{ display: 'inline' ,color:"#1A181E"}}
                    //       component="span"
                    //       variant="body2"

                    //     >
                    //       Ali Connors
                    //     </Typography>
                    //     {" — I'll be in your neighborhood doing errands this…"}
                    //   </React.Fragment>
                    // }
                    strong
                    style={{ fontWeight: "bold" ,marginTop:"2%"}}
                  />
                  <ListItemButton>
                    {/* <Button type="primary" onClick={() => setOpen(true)}>
                      Open Modal of 1000px width
                    </Button> */}
                     <Button style={{color:"light blue",marginLeft:"115%"}}onClick={() => setOpen(true)}variant="outlined">Set up</Button>
                    <Modal
                      title="Modal 1000px width"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={800}
                    >
                      <p>some contents...</p>
                      <p>some contents...</p>
                      <p>some contents...</p>
                    </Modal>
                  </ListItemButton>
                </ListItem>
                
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img style={{ objectFit: "fit", height: "60px", width: "70px", marginRight: "10px",  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" ,marginTop:"-18%"}} src="data:image/png;base64,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" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="PhonePe Payment Gateway"
                    // secondary={
                    //   <React.Fragment>
                    //     <Typography
                    //       sx={{ display: 'inline' ,color:"#1A181E"}}
                    //       component="span"
                    //       variant="body2"

                    //     >
                    //       Ali Connors
                    //     </Typography>
                    //     {" — I'll be in your neighborhood doing errands this…"}
                    //   </React.Fragment>
                    // }
                    strong
                    style={{ fontWeight: "bold" ,marginTop:"2%"}}
                  />
                  <ListItemButton>
                    {/* <Button type="primary" onClick={() => setOpen(true)}>
                      Open Modal of 1000px width
                    </Button> */}
                     <Button style={{color:"light blue",marginLeft:"120%"}}onClick={() => setOpen(true)}variant="outlined">Set up</Button>
                    <Modal
                      title="Modal 1000px width"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={800}
                    >
                      <p>some contents...</p>
                      <p>some contents...</p>
                      <p>some contents...</p>
                    </Modal>
                  </ListItemButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img style={{ objectFit: "fit", height: "60px", width: "70px", marginRight: "10px",  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" ,marginTop:"-18%"}} src="data:image/png;base64,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" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Paytm Payment Gateway"
                    // secondary={
                    //   <React.Fragment>
                    //     <Typography
                    //       sx={{ display: 'inline' ,color:"#1A181E"}}
                    //       component="span"
                    //       variant="body2"

                    //     >
                    //       Ali Connors
                    //     </Typography>
                    //     {" — I'll be in your neighborhood doing errands this…"}
                    //   </React.Fragment>
                    // }
                    strong
                    style={{ fontWeight: "bold" ,marginTop:"2%"}}
                  />
                  <ListItemButton>
                    {/* <Button type="primary" onClick={() => setOpen(true)}>
                      Open Modal of 1000px width
                    </Button> */}
                     <Button style={{color:"light blue",marginLeft:"119%"}}onClick={() => setOpen(true)}variant="outlined">Set up</Button>
                    <Modal
                      title="Modal 1000px width"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={800}
                    >
                      <p>some contents...</p>
                      <p>some contents...</p>
                      <p>some contents...</p>
                    </Modal>
                  </ListItemButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img style={{ objectFit: "fit", height: "60px", width: "70px", marginRight: "10px",  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" ,marginTop:"-18%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX////5fwb5dgD5egD5eAD+8+r92cD4bQD5fQD5dwD5dAD5cgD5gAj90LP7tYT//vz5hRL+5NL7qW/8zK37o2L+59j6jjL+7+P/+PL7pmj+5tX8vpT+6936kyz+8OX7uIr7sHv6n1r6lkb8xaD5iif93MX6mU78wZn6nVX91br6jCL5iB/6kj37soD6iAD8yaf7sHD7q2P8wI/6jRL4YwBIAhZCAAANmklEQVR4nO1ciXLiuhI1lgBZssHsDkvMHoiT4b2b+//f9lpeZbUxCTiVySudmqkavEnH6k3d7bEsAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODvwzhUMO4/dNTahiMaHBG3g3MfnrOX0KbtzS4lDBaCxH+9Ky/go6DGMIfXz9Yhhj89LS/gJBUMLxFkfR+etpfwJFVMbxBkfwmMaWVBOspMrH86Wl/HjNkaJidgGb/QOC299PT/gI8fQ3J+2RwC/2fnvVX0NMNDd0tJ2XMf3cE8IYMDSnEMRVUcfxVi6aB6Azd0o/E3NCnn57m/VjiiKZVQZH/3kUcXXMWZYq/mOG6MqLRKZLtT8/zfiBDg2Nu0rLdX2xNdUPD9t4IofPTs3wAaOtEhlYfIYjRyIBB+7n9lSf15Q1fNAJBWxliYOtqWBmqSb/IycvXBtLHPfeOLZ6AvQ1fDreIznfDKUmup/un3eci4cni+EdwLtj4nBw4V20OKyDNDROXu+n1vS13CMtUgjFCHT4Nr+8yB0PXpoUKwfXcX9xc/M6UU3flxyPY0UQeuiBncQUxxf29/BbEQaGTnDZ3w0obNoo4Yb72shnl9Xu22duH776+rtJNERNyGRe6s6hewoQia91HcERpBb+UpDih6zt+8j50ihBbteY1w/x59Vcr+JsPJsBEvn+aIVAk43v4BVv7Gj8JMG1l9Dc8ux5TZOLqvm3N2euKMXUsxmfWUGeIEm8F6F1e8XB1/RJwzYLMmTIlTLF1jeJ/wGay19fyYCyyxtrw5L13Fbt7IreLqCfItGjJK19fRbFSUIcfldJH37UkDXPvIFGHnajl12rZnfrrKwS1yhpcmL+qpIgimk2zBEe3CGrTveDrK8wNzvNNyCqKqinqNz/m1HUMbhHUBjxUXY8pcuQXXeauWPQZhvahSYIB2l0jOOpk21VOs4IiXWgD9WiLrdybg8UMmwk+U5zQzkxH2VVMr8wRuX6/PE7bZdJRfIYgGNcG4aH0QTKIMpWSq1igCBLCGNsmmCKflAYaf1YJK7zvQ2BVgRqFcMyRIWr8S3UVuEIEznkxmC/AoWoU6U4dZync1atOkNi8yhHT+0NrjEVFyEv9C0QN/VmnF8kJlFzFGMk0m8ZKM+D6KrJScAU3upqMMt6btM8tTNGuifq+in6F2eCKnZ8tfM6U65fIjjI/DTGGuqCWtKktbywvIWOx9M/Q1rDFmyNo7fASck1EOmoAhpdQZNp2kApaomgrN+LaGXOWxaspn3lrkKGPlpDW7X2wFhZGIYjPqRRVj4hlkWdvDu1+yXtzBAe44DOtux5rrcIieZZCkRd7gAPOUuT7MVR1og1WlHCWUjPxGtCSq3Y9JVFQ5M/5OSSJyslAZ8gbbEBArqI+5J2jJedKhiNbppyiwhDFTaSoQPS1pzLVtD2I+hljIHOhxi3FRN2UYiGlOJXG5xU3pg/F+YS78aKr1Y1waY9WQjFLirBlDHMdxa9mX3lj8lA9oH0AG33GKFouIUDO0FaWXDUYCcWijIJiWXUg3dI4DW4skBrW25kDCklVj1eSREmRkeyULoflgXQR5s0VJ5ARK+ZUCSzUasSKCvGF40FqWBpIK6zpe5JHgAeuTx486dpU6tfBupbHpSjfWxpIq+CTBuu8uP2hXsexNo2Us6frZgi53ZK+b8s3lrckjwEFpTeCCaS2qqHBZ51zdgq1OxWnQEm1WTgNtqohuapPj/SRoVFcekUhvjgboVdTY2jKyWD3oZwUEh671pTisFutqiOBUHKeKKJRzaX+nrUt1o0qSD1QsKhntsvAq6RaxO31kFWXw/Kr0RcYVXoeaE5ADOv31hPkXJQ0Kl7gQtcCFLM5xazR9kbPdOCs5AMM66OJOVIYJfeO91UFC+R3W3bBUK9YoDW8s5QW450wVioD1WeAJoih4pvxLqXI0mCGxbrMcFqkBCIeaU8Iu63jePxG83wXw85WMd1ID5Vtzgjb2UIesJQWJk13JCx6GqtY1xq/W1imFm25cNOElK1p9eDYLX5gVctT0328hOq+CklwLiwX1IPR4MaihEti0MlaOdb33jijdRPNPT7ewjtquIP5p5uniizKfgp4+obW3+Atnr+dRZr9wzqu6isMsePOQki0EloB8BXnu+JxvKq6c6J9jVFU+m82MUVKhuGiN95nCW+VIYq803xZiPPg5fbkE07m02kY7nGmNLOkpJECYn8HRoaTYzaZxGfHMVMhVirDipYQexuuXXxYy3j2CO5Gh3GqqjQpw0a2UGnvBWOOm5i9ftWQKkNs2a9NVJSzZZ5z68sQnSFpIFezznspWkwkGxavQmpUhjhPozBVU762Fi63xc2PX/LnpF7wIScRI2SqbojzNQYlhhdcWUvnJVtk8gdiJQIb9TmKbB9j8zjBuSjl3xmNLU6FopUYVpbiJPyV666ifJZoOBnTfYZig6VRaVVUikk+AgcfGsPRlXLqawQE0/In83GoHAcLn6DI9sOnAnc1zqR4jm2GQjH17FhMywytY2VJHBiuIpYwJFHVXiAOCSooIqEofX8Y3U8xTW+pVZRY8rHH0xj2cQ2Jub4PK+gmnU7OtnJW7Vg6EEWyGZafV3aczv0hXLavLijS2NagD1dajj5V/a2zaPW6ipvx5I+rnzwmYY9GESIflJQunb/f7+etgDnFJG2mZxSYjVS/vS+bIxeEExjKXRhzoutZpKGDKDLS1vJ3WuxTCpO/hoJJRjHZkZeaIBnh+3PFzWu1qY35r61VFIGEMkpq84DD2AErFInsMfRrGD7y7Z1Sdk0pJjW7IufJiEOfrqzI8pTvKCNQwVcwMj7l0a0Giosj73Lzztmx1Fha3u+WPj+YPpBXVGssMcV0L8AgIiUwjM2jdafGkD0vptymYO5WLvE//vz5Mw0/4aODkHFKmAtDOPwUTz+IpgqiWalB/35+VrnjQFJMOteej8fT5ul94Q1uZ3+Cw6X3tPnvaTz8x5t/Olk02K3Hp81w0Wm0rasKbc5Uio33c/4F8NR9gu88Hgf+fVDagkl9bfvXYjLlcTaR8NMv/l6qHoP1m+9vQ+x0Jufzlez3TOgtU9bg3Kl+Q8/L2Qyd6Tv2O0SHvMGmoK/Dc7lt8+pKm+dotY0XAheLym5JN/6ySAstJxxii37XPjY02XvQExCr+baobNt5J+VC+JgTuqfMqaAY8BahNuPlLPOFyqLbqPeDinEWbApzmMUOsnMOrOUEXG+748Ufv7+RMRzMffELJ6cA3DYT4N9mcOHByx3dwXY61jJKQ6+g48WCPyQMfsxmIMPyeDCZSK4D79CPfz1bS28Sj2hNlt/0/yW4jGUEnkHO7HNXwB5dcCH43OpT0oODrfSKPk328yMqa6usO4+EY2d10Rcqq4QdJ65ar+F+ISVzL1McQ9G1hl1ZchmLbts6M3g4BT6L7iIU4qXbBed17nYbLHcr6Nh5xr3PGN0wyk7WUrBtuGVx+cl+e1t9pDo6cpKA/eDAcgWCRdGW5V8hbIik0OYyT38C+xIS7oHoyhL+nhzhBTDZSkNDkBq63UVwCG6Zguq2uayBRc02exd4J3amIgtqn2HyMCXPkcX1ttQikNKAZI0GY5KULz0Kczo4MktK8sIoiz/AAg4v1pk78E4orCaI7sHqcwK8HLj3ySVWn8jU4ROZyjSQ/R4EcOHI6nD+Td/EHkkewMUNMUv5QgcQHcT7x6HkD5NOixL7tGVmQWBrsqCxGGfs2zwWT3hDnrUlUTA4yVT9CwWNHUgNHdg8eBYgMCOHdpYL+U0fhJLxlncPz5iSJttoVbzlmbLneIoHR9b6QsG47A6KZemce4wscTuVdbYTiaQYO+mrPztx3WZIwChT2CsJIf3PmPiy5A8a2gZxfJK/wPbASfEkdTYp9YzpesC/Lc7autkaxrbQ6tE4vz7fM3D1AWdA+h8368P2k+z9gMtUHZM78gvNmhBCIkt1zxyWGdbmFL7EuzEmhTgmBqsNL+EsK4hRGHrt+Jakbhw6wzH9Nof5Tpg0Hv0AGNKzFdC0vhTYoDuH1ge82e1r1uy1IbJX+7nFYJ2fY9kdkqwovZWKNfeZOMCLIYXogh1LPpGE1yMvsU6un9+SSObIeWMNJL2vAMwmO62P3YHVFmy/cxlM6bLxDkNZbt59yJqoy/5JLz4IRodjO/6g8kxlui7K892ERUefMyG5RYzsOi/gY0AO55mGHhmL68QvjjvsjI4XaaWSWG5gs/s+E/0cPEEZtYEhxCtUHCP416gL/kqMZQEORHjpdvOA7kVQx7aJXPW1ANkNuiJdrUlXnuFRrJUDTsEfdvsQLwmg2e3GGsp5IgtTeEUCnjnppt9ltu1SL1LjaO964SU2JZf3keVd+lb/HPYWclKeBxOejS7FBv0ZLk5CnPMIpte+XNKpzS6j0ei8VJ4po52OvGg+usg7BqPsWi8MdxN5S/pgUI31NxL8CwA+6XuTHO0fBBi4y4by72pXSDD5t1uDFqk7+yj+XUNs6ojv/p+EOrU41J9+EBPr8LRu9ANSAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4P/a/wP0xvlZJ/y71QAAAAASUVORK5CYII=" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cash on delivery"
                    // secondary={
                    //   <React.Fragment>
                    //     <Typography
                    //       sx={{ display: 'inline' ,color:"#1A181E"}}
                    //       component="span"
                    //       variant="body2"

                    //     >
                    //       Ali Connors
                    //     </Typography>
                    //     {" — I'll be in your neighborhood doing errands this…"}
                    //   </React.Fragment>
                    // }
                    strong
                    style={{ fontWeight: "bold" ,marginTop:"2%"}}
                  />
                  <ListItemButton>
                    {/* <Button type="primary" onClick={() => setOpen(true)}>
                      Open Modal of 1000px width
                    </Button> */}
                     <Button style={{color:"light blue",marginLeft:"119%"}}onClick={() => setOpen(true)}variant="outlined">Set up</Button>
                    <Modal
                      title="Modal 1000px width"
                      centered
                      open={open}
                      onOk={() => setOpen(false)}
                      onCancel={() => setOpen(false)}
                      width={800}
                    >
                      <p>some contents...</p>
                      <p>some contents...</p>
                      <p>some contents...</p>
                    </Modal>
                  </ListItemButton>
                </ListItem>
                

              </List>

            </Card>
          </div>

        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default Payments;