let banner = document.getElementById("banner");
let i = 1;
let bannerInner = [
    `<img src="banner/ny.jpg" alt="New york">
        <div class="banner-text">
            <p style="margin: 10px; font-size: 24px">New York</p>
            <p style="margin-bottom: 47px; margin-top: 16px; font-size: 15px">The atmosphere in New York is lorem ipsum.</p>
        </div>`,
    `<img src="banner/chicago.jpg" alt="Chicago">
        <div class="banner-text">
            <p style="margin: 10px; font-size: 24px">Chicago</p>
            <p style="margin-bottom: 47px; margin-top: 16px; font-size: 15px">Thank you, Chicago - A night we won't forget.</p>
        </div>`,
    `<img src="banner/la.jpg" alt="Los Angeles">
        <div class="banner-text">
            <p style="margin: 10px; font-size: 24px">Los Angeles</p>
            <p style="margin-bottom: 47px; margin-top: 16px; font-size: 15px">We had the best time playing at Venice Beach!</p>
        </div>`
]

const changeBanner = setInterval(()=> {
    banner.innerHTML = bannerInner[i] ;
    banner.style.animation = 'animation: appear linear 1s';
    i++;
    if (i == 3) i = 0;
}, 4000);
