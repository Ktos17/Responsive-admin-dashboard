document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');

const slider = document.querySelector('.slider');
const dot = document.querySelector('.dot');


const dashboardIcon = document.querySelector('.dashboard-icon');
const shopIcon = document.querySelector('.shop-icon');
const analyticsIcon = document.querySelector('.analytics-icon');
const ticketsIcon = document.querySelector('.tickets-icon');
const usersIcon = document.querySelector('.users-icon');
const settingsIcon = document.querySelector('.settings-icon');
const logoutIcon = document.querySelector('.logout-icon');
const name = document.querySelector('.names-div-left');

function toggleCheck() {
    const slider = document.querySelector('.slider');
    slider.classList.toggle('checked');
  }


slider.addEventListener('click', () => {
    const dot = document.querySelector('.dot');
    dot.classList.toggle('checked');
})  

const namesDivLeft = document.querySelector('.names-div-left');

let counter = 1;


const fixedLeft = document.querySelector('.fixed-left');
const openSideBarButton = document.querySelector('.menu-icon');

openSideBarButton.addEventListener('click', () => {
  counter += 1;
    if (counter >= 2 ) {
      console.log(counter);
      fixedLeft.style.width = '180px';
      const dziwnyNapis = document.querySelector('.dziwny-znak');
      dziwnyNapis.style.marginLeft = '14px';
      dashboardIcon.style.marginLeft = '14px';
      shopIcon.style.marginLeft = '14px';
      analyticsIcon.style.marginLeft = '14px';
      ticketsIcon.style.marginLeft = '14px';
      usersIcon.style.marginLeft = '14px';
      settingsIcon.style.marginLeft = '14px';
      logoutIcon.style.marginLeft = '14px';
      document.querySelector('.menu-icon').style.marginLeft = '140px';
      counter = 0;
      console.log(counter);
      document.querySelector('.container-box').style.paddingLeft = '90px';
      document.querySelector('.fourth-icon').classList.add('open-sidebar');
      document.querySelector('.reminder-div').style.marginLeft = '16px';
      document.querySelector('.slider').style.marginLeft = '500px';
      dashboardIcon.style.width = '40px';
      shopIcon.style.width = '40px';
      analyticsIcon.style.width = '40px';
      ticketsIcon.style.width = '40px';
      usersIcon.style.width = '40px';
      settingsIcon.style.width = '40px';
      logoutIcon.style.width = '40px';
      namesDivLeft.classList.remove('names-div-left');
      namesDivLeft.classList.add('names-div-left-open'); 


    } else {
      namesDivLeft.classList.add('names-div-left');
      namesDivLeft.classList.remove('names-div-left-open');
      fixedLeft.style.width = '80px';
      console.log(counter);
      document.querySelector('.icons-container').style.marginLeft = '0px';
      document.querySelector('.container-box').style.paddingLeft = '0px';
      document.querySelector('.reminder-div').style.marginLeft = '50px';
      document.querySelector('.container-box').style.borderRadius = '20px';
      document.querySelector('.menu-icon').style.marginLeft = '40px';
      document.querySelector('.profile-image').style.marginRight = '60px';
      document.querySelector('.slider').style.marginLeft = '830px';
    }




});

const container = document.querySelector('.container-box');
const dashboardNapis = document.querySelector('.dashboard');
const reminderDiv = document.querySelector('.reminder-div');
const firstIcon = document.querySelector('.first-icon');
const secondIcon = document.querySelector('.second-icon');
const thirdIcon = document.querySelector('.third-icon');
const fourthIcon = document.querySelector('.fourth-icon');
const fixedTop = document.querySelector('.fixed-top');
const containerBox = document.querySelector('.container-box');
const recentOrdersTop = document.querySelector('.recent-orders-top');
const downloadCsvButton = document.querySelector('.download-csv');
const titles = document.querySelector('.titles');
const names = document.querySelector('.names');
const images = document.querySelector('.images');
const userDiv = document.querySelector('.user-div');
const orderDateDiv = document.querySelector('.order-date-div');
const ktmexc = document.querySelector('.ktmexc');
const recentOrdersDiv = document.querySelector('.recent-orders-div');
const trendingUp = document.querySelector('.trending-up');
const dashboardp = document.querySelector('.dashboard-p');
const shopp = document.querySelector('.shop-p');
const analyticsp = document.querySelector('.analytics-p');
const ticketsp = document.querySelector('.tickets-p');
const usersp = document.querySelector('.users-p');
const settingsp = document.querySelector('.settings-p');
const koniec = document.querySelector('.container');
const right = document.querySelector('.first-structure-right');

let liczba = 1;

slider.addEventListener('click', () => {
  liczba += 1;
  if (liczba >= 2) {
    console.log(liczba);
    ticketsp.style.color = '#fff';
    usersp.style.color = '#fff';
    settingsp.style.color = '#fff';
    trendingUp.style.color = '#39B50F'
    shopp.style.color = '#fff';
    analyticsp.style.color = '#fff';
    containerBox.style.backgroundColor = "#131313";
    fixedLeft.style.backgroundColor = '#000'
    dashboardIcon.style.color = 'white';
    shopIcon.style.color = 'white';
    analyticsIcon.style.color = 'white';
    ticketsIcon.style.color = 'white';
    usersIcon.style.color = 'white';
    settingsIcon.style.color = 'white';
    recentOrdersDiv.style.backgroundColor = '#000';
    ktmexc.style.backgroundColor = '#000';
    orderDateDiv.style.backgroundColor = '#000';
    document.body.style.backgroundColor = 'white';
    orderDateDiv.style.color = '#fff';
    userDiv.style.backgroundColor = '#000';
    userDiv.style.color = '#fff';
    images.style.backgroundColor = '#000';
    names.style.backgroundColor = '#000';
    names.style.color = '#fff';
    container.style.backgroundColor = '#131313';
    containerBox.style.marginTop = '20px';
    dashboardNapis.style.color = 'white';
    document.body.style.color = 'white';
    reminderDiv.style.backgroundColor = '#000'
    firstIcon.style.backgroundColor = '#000';
    secondIcon.style.backgroundColor = '#000';
    thirdIcon.style.backgroundColor = '#000';
    fourthIcon.style.backgroundColor = '#000';
    fixedTop.style.backgroundColor = '#000';
    fixedTop.style.marginBottom = '0px';
    recentOrdersTop.style.backgroundColor = '#000';
    recentOrdersTop.style.color = '#fff';
    downloadCsvButton.style.color = '#000';
    titles.style.backgroundColor = '#000';
    titles.style.color = '#fff';
    dashboardp.style.color = '#fff';
    containerBox.style.borderBottomLeftRadius = '0px';
    container.style.backgroundColor = '#131313';
    koniec.style.backgroundColor = '#000';
    liczba = 0;
  } else {
    ticketsp.style.color = '#000';
    shopp.style.color = '#000';
    analyticsp.style.color = '#000';
    usersp.style.color = '#000';
    settingsp.style.color = '#000';
    recentOrdersDiv.style.backgroundColor = '#fff';
    fixedLeft.style.backgroundColor = '#fff';
    document.body.style.backgroundColor = '#fff';
    dashboardIcon.style.color = '#000';
    shopIcon.style.color = 'black';
    analyticsIcon.style.color = 'black';
    ticketsIcon.style.color = 'black';
    usersIcon.style.color = 'black';
    settingsIcon.style.color = 'black';
    ktmexc.style.backgroundColor = '#fff';
    orderDateDiv.style.backgroundColor = '#fff';
    orderDateDiv.style.color = '#000';
    userDiv.style.backgroundColor = '#fff';
    container.style.paddingTop = '20px';

    userDiv.style.color = '#000';
    images.style.backgroundColor = '#fff';
    names.style.backgroundColor = '#fff';
    names.style.color = '#000';
    titles.style.backgroundColor = '#fff';
    titles.style.color = '#000';
    dashboardNapis.style.color = '#000';
    document.body.style.color = '#000';
    reminderDiv.style.backgroundColor = '#fff';
    firstIcon.style.backgroundColor = '#fff';
    secondIcon.style.backgroundColor = '#fff';
    thirdIcon.style.backgroundColor = '#fff';
    fourthIcon.style.backgroundColor = '#fff';
    fixedTop.style.backgroundColor = '#fff';
    downloadCsvButton.style.color = '#fff';
    recentOrdersTop.style.backgroundColor = '#fff';
    recentOrdersTop.style.color = '#000';
    document.querySelector('.container').style.backgroundColor = "white";
    containerBox.style.backgroundColor = '#ccc';
  }

});


})

