const messageIcon = document.querySelector('.message-icon');

addEventListener('DOMContentLoaded', () => {

    function generateRandomString(length) {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
      }

      let userID;
      
      const randomString = generateRandomString(80);
      console.log(randomString);
      localStorage.setItem('userID', randomString);
      const storedUserID = localStorage.getItem('userID');
      console.log(userID);
      /*
        randomString = ZAPISUJE ID UZYTKOWNIKA
      */
      

});