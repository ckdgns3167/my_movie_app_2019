# ReactJS 초급 강의

다음은 노마드코더 인터넷 강의 중 2017년에 나왔던 react js의 업데이트 버전인 2019년형 react js 입문 강의를 보고 작성한 것이다. (2017년 강의는 이미 봄)

2019-12-27 **새롭게 새로운 마음으로 다시 기본부터 ! 현재 가장 모던하고, 업데이트된 최신 강의**인 듯하니 **믿고** 제대로 들어보자. 원래 아는 내용도 한번 더 정리했다.

-------------

**필요한 툴**

1. 가장 먼저 필요한 것은 node js의 설치. 가장 stable한 버전을 다운받자. 공식 사이트에서...
2. 그 다음은 npm을 설치한다. 근데 사실 node js 설치할 때 같이 설치됨.
3. 진짜 설치해야되는 것은 npx를 설치하자. ( 설치 명령문 : **npm i npx -g** )
4. VSC
5. Git

--------

**필요한 지식**

1. HTML, CSS, 바닐라 JS
2. Node.js (package.json)

--------

**왜 React를 배우면 좋을까?**

- 페이스북이 만듬.
- 대부분의 회사가 react js를 디폴트로 할 것이다. (유명회사 : 넷플릭스, 페이스북, npm, 에어비엔비, 스포티파이, 슬렉 등등..)
- 엄청나게 다운로드 되고 있음. 그만큼 페이스북에서 리엑트를 가장 좋은 기술로 만들기 위해 압도적인 투자를 하고 있음.
- front-end frameworks 들 중 압도적으로 인식이 좋음. (영상에서 어떤 공식 사이트에 지표가 있음.)
- 튜토리얼, 컴포넌트, 커뮤니티가 엄청 많음. 그만큼 가까워지기 쉬움.
- 혹여 react가 미래에 사라지더라도 걱정할 필요 없음. 이유는 100% 자바스크립트로 이루어져 있기 때문에...

----------

## **1.Setup**

진짜 들어가기 앞서 몇 가지 해줘야만 하는게 있다. 고것은 바로...! **Webpack**과 **Babel**을 설치해줘야 한다. 이유는 React가 매우 현대적인 코드와 동작하기 때문에 매우 sexy하고 아름다운 Component를 만드는데, 문제는 브라우저가 어리석기 때문에 이 현대적인 코드를 이해하지 못함. 따라서 **아름다운 코드를 못생긴 코드로 바꿔주는 것이 필요**하다. react 코드를 그렇게 compile하고 다른 파일에 넣어야하고 다음에 어쩌구 저쩌구 엄청 귀찮은 일을 길게 해야한다. 

**하지만!!!** 다행히도 그런 일을 전혀 하지 않도록 해주는 것이 있다. 바로 **create-react-app** 이란 것이다.  github.com/facebook/create-react-app 에 정확한 정보가 있다.

터미널에서 다음과 같이 입력해서 자신의 react app 프로젝트를 생성한다.                                               => **npx create-react-app [프로젝트 이름]**

프로젝트가 생성되면 해당 프로젝트로 이동해서 **npm start** 명령어를 실행한다. 그러면 개발 서버가 실행되고 이제 프로그래밍을 하면 곧바로 반영된 모습을 브라우저에서 볼 수 있게 된다.

**해당 프로젝트를 git에 추가하는 방법.** 

1. 해당 프로젝트 경로에서 **git init** 명령어 입력. 그러면 git 저장소를 초기화하라고 안내문 출력됨.
2. www.github.com/com/new 로 이동해서 저장소를 생성해주자. 
3. 생성 버튼을 누른 후 다음 페이지의 URL을 복사한다. 
4. 그 다음 git remote add origin https://github.com/ckdgns3167/my_movie_app_2019 과 같이 터미널에서 입력해주면 추가가 된다. 
5. 그 다음 git add . => git commit -m "커밋 내용" => git push 하면 끄읕~ 

----------

## 2.JSX & Props

React는 component로 이루어져 있다. **component는 모듈이라고 생각하면 이해하기 쉽다.** 모듈은 만들어 놓으면 필요한 곳이 있다면 그냥 가져다 사용하면 된다. 즉 재사용이 가능하다. component도 그렇다. **component는 HTML을 반환하는 함수다.** JSX는 react를 배우면서 배워야할 유일한 것이다. 나머지는 모두 Javascript의 내용이다. JSX는 react에만 있는 개념이다. **JSX는 javascript안의 HTML이다.** 즉 **JavaScript + HTML** 이다. component의 선언과 사용은 대문자로 시작한다.

component에 정보를 보낼 수 있다. 즉 **component에서 component로 데이터를 보내는 방법**을 알아야 한다. 바로 **Props**가 그 역할을 한다.

Props를 무엇인지 알았다면 다음으로 보여주려고 하는 데이터를 웹사이트에 동적으로 추가하는 방법을 알아야 한다. 데이터가 있다고 시뮬레이션 해보자. 데이터가 이미 API를 통해 받아왔다고 상상해보자. 그 데이터는 배열인데, 객체를 원소로 갖는 배열이라고 가정하자. 이제 이 배열을 화면에 동적으로 뿌려주기 위해서는 JavaScript의 배열 함수들 중 map 같은 것을 이용한다. 그리고 map을 사용할 때 object의 key값들을 component의 props에 넣어주면 동적으로 데이터를 화면에 표시해준다. HTML 코드 사이에 javascript 코드가 들어가게 되므로 { } 사이에 코드를 넣어줘야 한다.

이제 전달받은 props가 내가 원하는 props인지 확인해 줘야한다. 사람이기에 실수할 수 있다. 그래서 사용한다. ( npm i prop-types )

----

## 3.state

state를 배우기 위해 class component 개념을 알아야 한다. 원래 function component였던 코드를 class component로 변경한다. React는 자동으로 우리의 class component의 render method를 실행한다. state에는 화면에서 보여질 데이터 중 바꾸고 싶은 data를 넣는다. state를 변경하고 싶으면 직접 변경하지말고 **setState()를 사용해서 변경**해줘야 한다. 그러면 새로운 state와 함께 화면이 새롭게 랜더링되어 보여진다. 

react component는 render()말고도 다른 메서드들을 갖는다. life cycle method라고 부르는데, 이들은 기본적으로 react가 component를 생성할 때 혹은 없앨 때 사이사이에 호출되는 메서드들이다. 이들을 잘 활용하면 동적으로 데이터를 좀 더 효율적으로 표현할 수 있다. render() 호출 전과 후에 호출되는 메서드들에 대해 알아야 한다. Mounting(태어나는 것), Updating(업데이트되는 것), Unmounting(죽는 것 - 페이지가 바뀔 때 등등)

## 4.Making the Movie App

이제 fetch를 해야한다. fetch()를 사용해도 되지만 더 좋은 방법으로 axios라는 것을 사용할 것이다. 먼저 npm i axios로 설치해줘야 한다.

그리고 API로 데이터를 불러올 때 axios.get("API URL 주소")로 데이터를 불러온다. 이 때 유의할 것은 API로 데이터를 불러오는 작업 시간이 걸리는 작업이므로 이 작업이 끝나고 나서 다음 작업을 처리해야 하기 때문에 일단 불러오는 것을 기다리기 위해 불러오는 함수를 async와 await 을 사용하여 비동기 함수임을 나타내준다. 

----

## 5.Deploying to Github pages

1. npm i gh-pages : 자신이 만든 웹 사이트를 github에 업로드하는 것을 허가해주는 모듈을 설치한다.

2. package.json으로 가서 homepage를 추가한다. 

   ex ) "homepage": "https://ckdgns3167.github.io/my_movie_app_2019"

3. package.json에서 또 다른 script를 추가한다. 총 2개의 script를 추가할 것이다.

   1. 먼저 **"deploy": "gh-pages -d build "를 추가**한다. gh-pages로 build라는 파일을 업로드한다는 의미이다. -d의 의미는 디렉터리이다.
   2. build라는 파일은 **npm run build** 명령어를 통해 생성한다. 
   3. 두 번째로 **"predeploy": "npm run build"를 추가**한다. deploy를 호출하기 전 마다 호출되는 script이다. 유의할 것은 pre~ 뒤에 이름이 같아야 동작한다. 

4. 마지막으로 npm run deploy를 실행시켜주면 우리의 웹사이트가 publish되고 https://ckdgns3167.github.io/my_movie_app_2019로 들어가서 확인할 수 있다.

----

## 6.기타

1. 우리는 더 이상 state를 갖기 위해 class component를 가질 필요가 없다. react hook이라는 것 때문에 그렇다.

   ```javascript
   class App extends React.Component { 
     state = {
       isLoading: true,
       movies: []
     }
   ...생략...
   }
   ```

2. 하지만 class component가 구식인 것은 아니다. 일을 하는 다른 방식일 뿐 react hook이 이것의 대체물이 아니다!

## 7.마지막으로

다음 강의로 ReactJS 중급 강의를 들을 것이다. 이 강의는 유료인데, 더 많은 것을 배울 것이다. 초급에서는 한 페이지만 만들어봤지만 여러개의 페이지를 만들어 연결시키는 등 새로운 것을 한다.





