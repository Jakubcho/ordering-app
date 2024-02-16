import React from 'react'

const Auth = () => {
  return (
    <div>
      Tworzymy rejestracje:
      <ol>
        <li>Strona next auth</li>
        <li>Get Started</li>
        <li>npm install next-auth wybieramy 13.2 guide</li>
        <li>dodajemy /app/api/auth/[...nextauth]/route.ts</li>
        <li> dodaje /auth/api/register/register.js</li>
        <li> w pliku register/page.js dodajemy stany email/password i cała resztę</li>
        <li> dodajemy mongodb tworzymy nowy projekt dodajemy database za daarmo ustalamy jej nazwe i hasło </li>
        <li> tworzymy plik .env i dodajemy tam string do łączenia z baza danych</li>
        <li>Trzeba dodać schemat</li>
        <li>dodajemy również bcrypt npm install bcrypt</li>
        <li>rozbudowujemy strone rejestracji o kolejne elementy</li>
        <li>Tworzymy element login</li>
        <li>dodajemy do .env secure i auth_url </li>
        <li>Modyfikujemy api/auth/[...next]/route.js</li>
        <li>kiedy mamy opcje logowania mozemy przygotowac w header session</li>
        <li>z sesi wiemy czy użytkownik jest zalogowany i można stworzyć guzik logout with singout</li>
        <li>aby dodac logowanie przez google wchodzimy na google cloud i tworzymy nowy projekt </li>
        <li>Po stworzeniu szukamy Ekran zgody OAuth = Zewnętrzny potem tworzymy klucz klient auth i dodajemy do strony
 </li>
      </ol>
      </div>
  )
}

export default Auth;