
/* ******************* Theam Colors Sceam ******************* */

const White_BG = 'hsl(0, 0%, 100%)';      // container
const VeryPaleBlue_TopBGPattern = 'hsl(225, 100%, 98%)';
const LightGrayishBlue_CardBG = 'hsl(227, 47%, 96%)'; // cardBackground
const DarkGrayishBlue_Text = 'hsl(228, 12%, 44%)';
const VeryDarkBlue_Text = 'hsl(230, 17%, 14%)'; // heading


/* ******************* Target Elements ******************* */

let container = document.querySelector('body');
let uppercardBackground = document.querySelectorAll('.upper-boxex');
let lowercardBackground = document.querySelectorAll('.lower-boxex');
let uppercardText = document.querySelectorAll('.upper-boxex .mid-box-info h1');
let uppercardSocialText = document.querySelectorAll('.upper-box-info p');
let lowercardTextColor = document.querySelectorAll('.upper-info p');
let lowercardText = document.querySelectorAll('.lower-boxex .lowerinfo h2');
let upperHeaderHeading = document.querySelector('.upper-header-left h1');
let upperHeaderParagraph = document.querySelector('.upper-header-left p');
let lowerHeading = document.querySelector('.lower-header h1');
let upperHeaderRightText = document.querySelector('.upper-header-right p');

/* ******************* Toggle Switch ******************* */

let toggle = document.getElementById('toggle');


toggle.addEventListener('change', (e) => {

    if (e.currentTarget.checked == true) {
        // background body color  
        container.style.backgroundColor = White_BG;

        // upper section card background color
        uppercardBackground.forEach((Ucard) => {
            Ucard.style.backgroundColor = LightGrayishBlue_CardBG;
        });

        // upper card text color
        uppercardText.forEach((Unum) => {
            Unum.style.color = VeryDarkBlue_Text;
        });

        // lower section card background color
        lowercardBackground.forEach((Lcard) => {
            Lcard.style.backgroundColor = LightGrayishBlue_CardBG;
        });

        // lower card text color
        lowercardText.forEach((Lnum) => {
            Lnum.style.color = VeryDarkBlue_Text;
        });

        // lower upper heading paragraph color
        upperHeaderHeading.style.color = VeryDarkBlue_Text;
        upperHeaderParagraph.style.color = DarkGrayishBlue_Text;
        lowerHeading.style.color = DarkGrayishBlue_Text;

        // upper card social Text
        uppercardSocialText.forEach((socialText) => {
            socialText.style.color = DarkGrayishBlue_Text;
        })

        // lower card number color
        lowercardTextColor.forEach((textColor) => {
            textColor.style.color = DarkGrayishBlue_Text;
        });

        // upper header Right Text 

        upperHeaderRightText.style.color = DarkGrayishBlue_Text;
    }
    else {
        container.style.backgroundColor = '';
        uppercardBackground.forEach((Ucard) => {
            Ucard.style.backgroundColor = '';
        });
        lowercardBackground.forEach((Lcard) => {
            Lcard.style.backgroundColor = '';
        });
        uppercardText.forEach((Unum) => {
            Unum.style.color = '';
        });
        lowercardText.forEach((Lnum) => {
            Lnum.style.color = '';
        });

        upperHeaderHeading.style.color = '';
        upperHeaderParagraph.style.color = '';
        lowerHeading.style.color = '';

        uppercardSocialText.forEach((socialText) => {
            socialText.style.color = '';
        })

        lowercardTextColor.forEach((textColor) => {
            textColor.style.color = '';
        });

        upperHeaderRightText.style.color = '';
    }

});




//  card Hover Effect

uppercardBackground.forEach((card) => {
    card.addEventListener('mouseover', () => {
        if (toggle.checked == true) {
            card.style.backgroundColor = '#E1E3F0';
        }
    })
});


lowercardBackground.forEach((card) => {
    card.addEventListener('mouseover', () => {
        if (toggle.checked == true) {
            card.style.backgroundColor = '#E1E3F0';
        }
    })
});




uppercardBackground.forEach((card) => {
    card.addEventListener('mouseout', () => {
        if (toggle.checked == true) {
            card.style.backgroundColor = LightGrayishBlue_CardBG;
        }
    })
});


lowercardBackground.forEach((card) => {
    card.addEventListener('mouseout', () => {
        if (toggle.checked == true) {
            card.style.backgroundColor = LightGrayishBlue_CardBG;
        }
    })
});



