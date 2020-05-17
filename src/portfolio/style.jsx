export const BLACK1 = '#111';
export const BLACK4 = '#444';
export const BLACK3 = '#242320';
export const BLACK5 = '#161616';
export const WHITE = '#f2f2f2';

export const responsive_size_width = 'calc(30vh + 20vw)'
export const responsive_size_height = 'calc(60vh + 5vw)'
export const font = '"Ubuntu Mono", monospace';
export const fontOrigin = '1rem';
export const fontSmall = '0.80em';
export const fontMedium = '0.875em';
export const fontNormal = '1em';
export const fontLarge = '1.375em';
export const fontLight = '100';
export const fontRegular = '400';
export const speed = '0.65s';

export const basic_container = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh'
}
export const Container_coverpage = {
    ...basic_container,

    justifyContent: 'center',

    backgroundColor: WHITE
}
export const Container_aboutme = {
    ...basic_container,
    backgroundColor: BLACK5,
    paddingTop: '10vh',
    paddingBottom: '10vh',
    flexDirection: 'column'
};
export const Container_workpage = {
    ...basic_container,
    backgroundColor: WHITE,
    color: BLACK1,
    flexDirection: 'column',
    flexFlow: 'wrap',
    justifyContent: 'center',
    paddingLeft: '10vw',
    paddingRight: '10vw'
};
export const Container_skillpage = {
    // ...basic_container,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: WHITE,
    flexDirection: 'column',
    flexFlow: 'wrap'
};
export const Container_card = {
    position: 'relative',
    gridArea: 'card',
    alignSelf: 'center',
    justifySelf: 'center',
    overflow: 'hidden',
    display: 'block',
    padding: 'calc(2vh + 4vw)',
    
    width: responsive_size_width,
    height: responsive_size_height,
    fontSize: fontOrigin,
    borderRadius: '48px',
    boxShadow: '0 18px 30px -12px rgb(17, 17, 17,0.35)',
    // boxShadow: '0 16px 60px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease',
    '&:hover': {
        boxShadow: '0 40px 40px -12px rgb(17, 17, 17,0.55)',
        // boxShadow: '0 40px 130px rgba(0, 0, 0, 0.6)',
        '-webkit-transform': 'scale(1.1, 1.1)',
        transform: 'scale(1.1, 1.1)',
        borderRadius: '48px'
    },
    '&:hover $Image_card_img': {
        '-webkit-transform': 'scale(1, 1)',
        transform: 'scale(1, 1)',
        opacity: '0.4',
        '-webkit-filter': 'grayscale(10%) contrast(80%) brightness(1.4)',
        filter: 'grayscale(10%) contrast(80%) brightness(1.4)'
    },
    '&:hover $Profile_card_img': {
        '-webkit-transform': 'scale(1, 1) translateZ(0)',
        transform: 'scale(1, 1) translateZ(0)'
    },
    '&:hover $Name_card': {
        textShadow: '0 1px 4px rgba(0, 0, 0, 0)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    },
    '&:hover $Job_card': {
        color: 'rgba(90, 140, 255, 1)'
    },
    '&:hover $Bio_card': {
        '-webkit-transform': 'translateY(0)',
        transform: 'translateY(0)',
        opacity: 1
    }
}
export const Image_card = {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))'
}

export const Image_card_img = {
    '-webkit-transform': 'scale(1.3, 1.3)',
    transform: 'scale(1.3, 1.3)',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 1,
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease',
    animationName: 'zoom',
    animationDuration: '30s',
    animationDirection: 'alternate',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
}

export const Header_card = {
    display: 'grid',
    width: '100%',
    height: '200px'
}

export const Profile_card = {
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'block',
    overflow: 'hidden',
    width: 'calc(14vh + 4vw)',
    height: 'calc(14vh + 4vw)',
    borderRadius: '50%'
}
export const Profile_card_img = {
    '-webkit-transform': 'scale(1.5, 1.5) translateZ(0)',
    transform: 'scale(1.5, 1.5) translateZ(0)',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease',
    mixBlendMode: 'normal',
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden'
}

export const Body_card = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}

export const Name_card = {
    alignSelf: 'center',
    justifySelf: 'center',
    marginBottom: '2px',
    color: 'white',
    zIndex: 1,
    fontSize: fontLarge,
    fontWeight: fontLight,
    letterSpacing: '0.1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
    background: 'white',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease'
}
export const Job_card = {
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'inline-block',
    zIndex: 1,
    fontSize: fontSmall,
    fontWeight: fontLight,
    textAlign: 'center',
    letterSpacing: '0.26rem',
    color: 'rgba(90, 140, 255, 0.6)',
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease'
}
export const Bio_card = {
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    position: 'relative',
    '-webkit-transform': 'translateY(30%)',
    transform: 'translateY(30%)',
    display: 'block',
    letterSpacing: '0.08rem',
    margin: '22px 0 16px',
    fontSize: fontMedium,
    fontWeight: fontLight,
    color: 'rgba(255, 255, 255, 0.65)',
    opacity: 0,
    '-webkit-transition': 'all ' + speed + ' ease',
    transition: 'all ' + speed + ' ease'
}

export const float_menu = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: 0,
    top: '50%',
    overflow: 'hidden',
    transform: 'translate(-10%, -50%)',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    cursor: 'pointer'
}
export const float_menu_icons = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
}
export const float_menu_button = {
    display: 'flex',
    flexDirection: 'column',
    width: '7vh',
    height: '7vh',
    justifyContent: 'center',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
}
export const float_menu_icon = {
    fill: '#f5f5f5',
    padding: '5px',
    '&:hover': {
        fill: '#4cf0ff'
    }
}
export const GridContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
}
export const GridItem = {

    overflow: 'hidden',
    borderRadius: 14,
    boxShadow: '0 18px 40px -12px rgb(17, 17, 17,0.35)',
    width: '50vh',
    backgroundColor: '#fcfcfc',
    marginBottom: '2.4vw',
    padding: '1.4vw',
    color: '#333'
}
export const GridItemImage = {
    width: '100%',
    borderRadius: 8
}
export const GridItemTitle = {
    marginTop: '1.4vw'
}
export const GridItemDateTime = {
    marginTop: '0.6vw'
}
export const GridItemContent = {
    marginTop: '1.4vw',
    letterSpacing: '0.02rem',
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#333',
    lineHeight: '120%'
}
export const GridItemButton = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.4vw'
}
export const $Container = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    flexFlow: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '50px'
};

export const $ProfilePage = {
    ...$Container,
    backgroundColor: WHITE
};
export const $CoverPage = {
    backgroundColor: WHITE
}

export const $Desc = {
    width: '60vh',
    flexDirection: 'column',
    margin: 0,
    paddingTop: '25vh'
};
export const $Myname = {
    fontWeight: '900',
    fontSize: '5vh',
    width: '100%',
    margin: 0,
    padding: 0
};
export const $As = {
    fontFamily: 'monospace',
    width: '100%',
    marginBottom: '20px'
};
export const $Focus = {
    fontFamily: 'monospace',
    width: '100%',
    fontWeight: '900',
    fontSize: '3vh',
    marginBottom: '20px'
};

export const TitleContainer = {
    letterSpacing: '0.08rem',
    color: WHITE
}
export const TitleLight = {
    ...TitleContainer,
    marginBottom:'5vh',
    color: WHITE
}
export const TitleDark = {
    ...TitleContainer,
    color: BLACK4
}
export const Content_aboutme = {
    width: responsive_size_width,
    marginBottom: '5vh',
    textAlign: 'justify',
    lineHeight: '150%',
    color: WHITE,
    letterSpacing: '0.08rem'
};
export const SocialNetwork = {
    width: responsive_size_width,
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    flexFlow: 'wrap',
    justifyContent: 'space-between'
};
export const $ButonContainer = {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
export const $Button = {
    backgroundColor: '#f0f0f0',
    display: 'flex',
    width: '10vw',
    justifyContent: 'center',
    verticalAlign: 'top',
    padding: '8px',
    color: BLACK4,
    cursor: 'pointer',
    borderRadius: '22px'
};
export const $ImgContainer = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
};
export const $img = {
    margin: '5vh',
    width: '50vh',
    height: '50vh',
    maxWidth: 290,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};
export const Title = {
    width: '100vw',
    marginBottom: '5vw',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
export const $TitleText = {
    color: WHITE,
    margin: 0,
    marginLeft: 20,
    fontWeight: '900',
    fontSize: '6vh'
};
export const $TitleTextLight = {
    ...$TitleText,
    color: WHITE
}
export const $TitleTextDark = {
    ...$TitleText,
    color: BLACK4
}

export const $SkillLists = {
    // marginBottom: 50,
    padding: 10,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    color: '#aaa',
    flexDirection: 'column',
    textAlign: 'space-evenly',
    flexFlow: 'wrap'
};
export const $ListItems = {
    overflow: 'auto',
    margin: 10,
    textAlign: 'center',
    padding: 20,
    backgroundColor: BLACK5,
    flexGrow: 1,
    borderRadius: 10,
    boxShadow: '0 18px 40px -12px rgb(17, 17, 17,0.35)',
    wordWrap: 'break-word'
};
export const $SkillItemText = {
    margin: 0,
    marginTop: '10px',
    fontSize: '18px',
    fontFamily: 'monospace',
    color: '#969696'
};
export const $Footer = {
    padding:'8vh',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '50vh',
    fontFamily: 'monospace',
    fontSize: '1.8vh',
    color: WHITE,
    backgroundColor: BLACK1
}
export const $FooterContent = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
}
export const $FooterIcon = {
    margin: '10px'
}