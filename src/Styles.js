


/* --- COLOR THEME DEFINITION --- */


let season;

//Color themes:
const Themes = {
    summer:{
        main:'#F1CD33',
        accent:'#C27E0A',
        white: '#FFFFFF'
    },
    fall:{
        main:'#9B5632',
        accent:'#382419',
        white: '#FFFFFF'
    },
    winter:{
        main:'#6485C7',
        accent:'#293F6E',
        white: '#FFFFFF'
    },
    spring:{
        main:'#9ABB41',
        accent:'#314E30',
        white: '#FFFFFF'
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
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Palette.main
        }
    }
};

export default generalStyles;