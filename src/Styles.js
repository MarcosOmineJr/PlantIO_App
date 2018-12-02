import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');


/* --- COLOR THEME DEFINITION --- */


let season;

//Color themes:
const Themes = {
    summer:{
        main:'#F1CD33',
        accent:(o=1)=>{return `rgba(194, 126, 10, ${o})`},
        text: '#FFFFFF'
    },
    fall:{
        main:'#9B5632',
        accent:(o=1)=>{return `rgba(56, 36, 25, ${o})`},
        text: '#FFFFFF'
    },
    winter:{
        main:'#6485C7',
        accent:(o=1)=>{return `rgba(41, 63, 110, ${o})`},
        text: '#FFFFFF'
    },
    spring:{
        main:'#9ABB41',
        accent:(o=1)=>{return `rgba(49, 78, 48, ${o})`},
        text: '#FFFFFF'
    }
}

//Seasons are set to south hemisphere only for now:
const determineDateSeason = (parY, parM, parD)=>{
    let date;

    if(typeof parY === 'undefined' && typeof parM === 'undefined' && typeof parD === 'undefined'){
        date = new Date(); //In case no parameters has been passed
    } else if (typeof parY !== 'undefined' && typeof parM !== 'undefined' && typeof parD !== 'undefined'){
        date = new Date(parY, parM, parD); //In case all parameter has been passed
    } else if(typeof parD === 'undefined'){
        date = new Date(parY, parM); //In case only Year and Month has been passed
    } else {
        throw 'Incorrect parameters, you have to pass nothing or at least year and month'; //In case only one parameter has been passed
    }

    let d = date.getDate(), m = date.getMonth();

    switch(m){
        case 0:
            season = 'summer';
            break;
        case 1:
            season = 'summer';
            break;
        case 2:
            if(d <= 20){
                season = 'summer';
            } else {
                season = 'fall';
            }
            break;
        case 3:
            season = 'fall';
            break;
        case 4:
            season = 'fall';
            break;
        case 5:
            if(d <= 20){
                season = 'fall';
            } else {
                season = 'winter';
            }
            break;
        case 6:
            season = 'winter';
            break;
        case 7:
            season = 'winter';
            break;
        case 8:
            if(d <= 20){
                season = 'winter';
            } else {
                season = 'spring';
            }
            break;
        case 9:
            season = 'spring';
            break;
        case 10:
            season = 'spring';
            break;
        case 11:
            if(d <= 20){
                season = 'spring';
            } else {
                season = 'summer';
            }
            break;
        default:
            console.log('Não foi possível definir o dia atual');
            break;
    }

    return season;
}

//Defining the season:

/*
To test it out:
 - Set the first parameter (year) to any number;
 - Set the second parameter (month) preferably to a month where there is no season transition (notice that january is 0 and december is 11);
 - Optional: you can set the third parameter (day) if you want. If not set, it takes the present day;
 - If you don't pass any parameters, it should take the present date of your system;
Eg.: season = determineDateSeason(2018, 3); -> It must set to Fall/Autumn;

 - Here are some month suggestions:
   - 0 (January) -> Summer in South Hemisphere;
   - 3 (April) -> Fall/Autumn in South Hemisphere;
   - 6 (July) -> Winter in South Hemisphere;
   - 9 (October) -> Spring in South Hemisphere;
*/

try{
    season = determineDateSeason();
} catch(error){
    console.log(error);
}

//based on season, define the theme:
const determineTheme = (season, themes)=>{
    let theme;

    switch(season){
        case 'summer':
            theme = themes.summer;
            break;
        case 'fall':
            theme = themes.fall;
            break;
        case 'winter':
            theme = themes.winter;
            break;
        case 'spring':
            theme = themes.spring;
            break;
        default:
            console.log('Não foi possível determinar o tema');
    }

    return theme;
}

//Defining the theme:
export const Palette = determineTheme(season, Themes);


/* --- END OF COLOR THEME DEFINITION --- */


//General styles of the app, divided by components and using the correct theme:
let generalStyles = {
    signUp:{
        container:{
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: Palette.main
        },
        formContainer:{
            width:'100%',
            height:'100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: Palette.main,
            paddingTop: height*0.05,
        },
        loginBtn:{
            marginTop: height*0.15,
            marginBottom: height*0.02,
        },
        horizontalInput:{
            width: '90%',
            flexDirection: 'row',
            marginBottom: height*0.02
        },
        hiInput:{
            width: '69%',
            height: height*0.06,
            backgroundColor: Palette.text,
            marginLeft: width*0.05,
            borderRadius: width*0.01,
            paddingHorizontal: 10,
            fontSize: 20,
            color: Palette.accent()
        },
        verticalInput:{
            width: '90%',
            flexDirection: 'column',
            marginBottom: height*0.02
        },
        label:{
            marginBottom: height*0.02
        },
        normalInput:{
            width: '100%',
            height: height*0.06,
            backgroundColor: Palette.text,
            borderRadius: width*0.01,
            paddingHorizontal: 10,
            fontSize: 20,
            color: Palette.accent()
        },
        signUpBtn:{
            alignSelf: 'flex-end',
            marginRight: width*0.05
        }
    },
    login:{
        container:{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: Palette.main
        },
        formContainer:{
            width:'100%',
            height:'100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: Palette.main
        },
        signUpBtn:{
            marginTop: height*0.2,
            marginBottom: height*0.02
        },
        horizontalInput:{
            width: '90%',
            flexDirection: 'row',
            marginBottom: height*0.1,
        },
        hiInput:{
            width: '69%',
            height: height*0.06,
            backgroundColor: Palette.text,
            marginLeft: width*0.05,
            borderRadius: width*0.01,
            paddingHorizontal: 10,
            fontSize: 20,
            color: Palette.accent()
        },
        loginBtn:{
            alignSelf: 'flex-end',
            marginRight: width*0.05
        }
    },
    modulesScreen:{
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontFamily: 'cabin',
            fontSize: 50
        }
    },
    hintsScreen:{
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontFamily: 'cabin',
            fontSize: 50
        }
    },
    newsScreen:{
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontFamily: 'cabin',
            fontSize: 50
        }
    },
    communityScreen:{
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontFamily: 'cabin',
            fontSize: 50
        }
    }
};

export default generalStyles;