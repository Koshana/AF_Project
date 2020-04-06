import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 className="text-white h4">Collapsed content</h5>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://eastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmysliit-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wbVqEtnD10GyKsoytEgpNQ_zR-Dc5XFAuFwKBhupPPEelRR2vPnjSK_EQzC9HRuk%2Fitems%2F01U4JDWCEV4FUCK5CVRFCK2GI2QKJWCKST%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXlzbGlpdC1teS5zaGFyZXBvaW50LmNvbUA0NGUzY2Y5NC0xOWM5LTRlMzItOTZjMy0xNGY1YmYwMTM5MWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNTg2MTg4NDI0IiwiZXhwIjoiMTU4NjIxMDAyNCIsImVuZHBvaW50dXJsIjoicDdRQTVLYU1oTEo3RjlGZUdldkp3bG53UVVyUzhaWE5ldVNYZlI5NXJJUT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiWmpZeU5UUTJPV1l0WmpCalpDMWhNREF3TFRnNVpqSXROamt3T1dJelltVTJNR0l4IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik1USTJZV0kxWXpFdFl6TmtPUzAwTVdRM0xXSXlNbUV0WTJFek1tSTBORGd5T1RNMSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8aXQxODAzNzkyMEBteS5zbGlpdC5sayIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDM3ZmZlYTVlZWJkNDFAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMyJ9.TS9aNGRxTXU3Z1hsM0dYQjUzRStCeStocFoyRmpXMEUxS3IybzVGVTN4ND0&encodeFailures=1&srcWidth=&srcHeight=&width=200&height=200&action=Access"
                            width="100" height="100" alt="logo"/>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>Men</a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>Women</a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>Kids</a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>Accessories</a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>
                                    <img src={'https://image.flaticon.com/icons/svg/1170/1170678.svg'}
                                         width={'30px'}
                                         height={'30px'}
                                         alt={'cart'}
                                    />
                                </a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>
                                    <img src={'https://image.flaticon.com/icons/svg/1246/1246351.svg'}
                                         width={'30px'}
                                         height={'30px'}
                                         alt={'singIn'}
                                    />
                                </a>
                            </li>
                            <li className={'nav-item mr-3 ml-5'}>
                                <a className={'nav-link'}>
                                    <img src={'https://www.flaticon.com/premium-icon/icons/svg/1758/1758219.svg'}
                                         width={'30px'}
                                         height={'30px'}
                                         alt={'signUp'}
                                    />
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
